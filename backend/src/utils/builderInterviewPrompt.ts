export interface SkillRequirement {
  name: string;
  yearsOfExperience: number;
}

export interface RoleRequirements {
  jobTitle: string;
  totalYearsOfExperience: number;
  experienceLevel: "Junior" | "Mid" | "Senior";
  skills: SkillRequirement[];
  fullJobDescription: string
}

export function buildInterviewPrompt(req: RoleRequirements): string {
  const { jobTitle, totalYearsOfExperience, experienceLevel, skills } = req;
  const skillsList = skills
    .map(
      (s) =>
        `- ${s.name}: ${s.yearsOfExperience} year${
          s.yearsOfExperience > 1 ? "s" : ""
        }`
    )
    .join("\n");

  return `You are an expert technical interviewer. Based on the role requirements below, generate a comprehensive list of interview questions and evaluation criteria. You should:
   
   1. Select Topics Intelligently
   Identify the most relevant high-level topics for the given job title and core skills (e.g., for “Frontend Developer”: state management, accessibility, performance optimization, etc.).
   
   Use the candidate’s seniority level to determine the expected scope, complexity, and depth of these topics.
   
   2. Generate Interview Questions
   First 4-5 questions should be generic questions relevant to the job title or domain.
   
   For each core skill (from the skills list):
   
   Generate 3 questions per skill if experience level is "junior"
   
   Generate 5 questions per skill if experience level is "mid" or "senior"
   
   Questions should be a mix of practical application, design/architecture, and theoretical fundamentals (favoring practical).
   
   Include 3–5 soft or transferable skills questions, at least 2 of which should be behavioral questions using the STAR format (Situation, Task, Action, Result).
   
   Ensure diversity in question types (e.g., debugging scenarios, trade-off discussions, real-world problem-solving).
   
   3. Calibrate Difficulty
   For each question, include a "difficulty" field: "Basic", "Mid", or "Advanced" — based on candidate experience and complexity of the question.
   
   Maintain consistency in difficulty level across different domains and skills.
   
   4. Evaluation Criteria
   For each question, include an "evaluationCriteria" array with 3–5 bullet points describing what an ideal answer should demonstrate.
   
   Cover both technical accuracy and real-world reasoning where applicable.
   

  ##### Role Requirements
  - Job Title: ${jobTitle}  
  - Total Years of Experience Required: ${totalYearsOfExperience}  
  - Experience Level: ${experienceLevel}  
  - Core Skills & Experience:  ${skillsList}
  
  ##### Output format
  Respond ONLY with valid JSON. DO NOT include any explanations, markdown, comments, or formatting other than this:
  
  {
    "questions": [
      {
        "skillArea": "React",
        "question": "How would you optimize rendering performance in a large React app?",
        "difficulty": "Mid",
        "evaluationCriteria": [
          "Mentions React.memo and useMemo",
          "Understands virtual DOM and reconciliation",
          "Considers component splitting and lazy loading"
        ]
      }
      More questions...
    ]
  }
  `;
}
