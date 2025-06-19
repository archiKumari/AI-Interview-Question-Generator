import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function generateQuestions(payload) {
  const response = await axios.post(`${API_URL}/generate-questions`, payload);
  return response.data;
}
