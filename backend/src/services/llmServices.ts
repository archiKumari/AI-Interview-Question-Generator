import OpenAI from 'openai';
import dotenv from 'dotenv';
import { QuestionRequest, QuestionResponse } from '../types/question';
import { buildInterviewPrompt, RoleRequirements } from '../utils/builderInterviewPrompt';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
const model: string = process.env.MODEL || 'gpt-4o';

if (!apiKey) {
  throw new Error('Missing OPENAI_API_KEY in environment');
}

const openai = new OpenAI({ apiKey });

export async function generateQuestions(
  payload: QuestionRequest
): Promise<QuestionResponse> {
  const formatted: RoleRequirements = {
    jobTitle: payload.jobTitle,
    totalYearsOfExperience: parseInt(payload.requiredExperience, 10),
    experienceLevel: payload.experienceLevel as 'Junior' | 'Mid' | 'Senior',
    fullJobDescription: payload.fullJobDescription,
    skills: payload.skills.map(s => ({
      name: s.name,
      yearsOfExperience: parseInt(s.years, 10),
    })),
  };

  const prompt = buildInterviewPrompt(formatted);

  const response = await openai.chat.completions.create({
    model: model,
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 3000,
    temperature: 0.7,
  });

  const text = response.choices[0].message.content;
  if (!text) {
    throw new Error('No content received from LLM');
  }

let cleanedText = text.trim()
  .replace(/^```json\s*/i, '')
  .replace(/^```/, '')
  .replace(/^json\s*/i, '')
  .replace(/```$/, '')
  .trim();


  try {
    const result: QuestionResponse = JSON.parse(cleanedText);
    return result
  } catch (err) {
    console.error('Failed to parse LLM response as JSON:', cleanedText);
    throw new Error('Invalid response format from LLM');
  }
}
