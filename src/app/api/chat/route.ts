import { groqClient } from "~/lib/openai";

export async function POST(request: Request) {
  const { prompt } = (await request.json()) as { prompt: string };

  const response = await groqClient.chat.completions.create({
    model: "openai/gpt-oss-120b",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  return Response.json({
    message: response?.choices[0]?.message.content,
  });
}
