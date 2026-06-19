import { OpenAI } from "openai";

export const groqClient = new OpenAI({
  baseURL: process.env.GROQ_BASE_URL,
  apiKey: process.env.GROQ_API_KEY,
});
