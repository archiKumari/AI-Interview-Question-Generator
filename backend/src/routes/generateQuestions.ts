import { Router } from 'express';
import { generateQuestions } from '../services/llmServices';
import { QuestionRequest, QuestionResponse } from '../types/question';

const router = Router();

router.post('/', async (req, res) => {
  const payload: QuestionRequest = req.body;
  try {
    const result: QuestionResponse = await generateQuestions(payload);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.json({ error: 'Failed to generate questions' });
  }
});

export default router;