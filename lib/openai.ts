import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface GridResponse {
  grid: string[][];
  correct_letters: string[];
}

export async function processImage(base64Image: string): Promise<GridResponse> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`
            }
          }
        ]
      }
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "word_hunt",
        strict: true,
        schema: {
          type: "object",
          properties: {
            grid: {
              type: "array",
              description: "A 4x4 grid of letters for the word hunt.",
              items: {
                type: "array",
                description: "A single row of the letter grid.",
                items: {
                  type: "string",
                  description: "A single letter in the row."
                }
              }
            },
            correct_letters: {
              type: "array",
              description: "The correct letters extracted from each row of the word hunt grid.",
              items: {
                type: "string",
                description: "The correct letter from a row."
              }
            }
          },
          required: ["grid", "correct_letters"],
          additionalProperties: false
        }
      }
    },
    temperature: 1,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });

  const result = response.choices[0]?.message?.content;
  if (!result) {
    throw new Error('Failed to process image');
  }

  try {
    const parsed = JSON.parse(result);
    if (!parsed.grid || !Array.isArray(parsed.grid) || !parsed.correct_letters || !Array.isArray(parsed.correct_letters)) {
      throw new Error('Invalid response format');
    }
    return parsed as GridResponse;
  } catch (error) {
    console.error('Failed to parse OpenAI response:', result);
    throw new Error('Invalid response format from OpenAI');
  }
} 