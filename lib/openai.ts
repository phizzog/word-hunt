import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface GridResponse {
  grid: string[][];
  gridSize: 4 | 5;
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
        name: "word_hunt_puzzle",
        strict: true,
        schema: {
          type: "object",
          properties: {
            grid: {
              type: "array",
              description: "A 2D array representing the characters in the word hunt puzzle.",
              items: {
                type: "array",
                description: "A single row of the grid.",
                items: {
                  type: "string",
                  description: "A single character in the grid."
                }
              }
            }
          },
          required: ["grid"],
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
    if (!parsed.grid || !Array.isArray(parsed.grid)) {
      throw new Error('Invalid response format');
    }

    const gridSize = parsed.grid.length;
    if (gridSize !== 4 && gridSize !== 5) {
      throw new Error('Invalid grid size - must be 4x4 or 5x5');
    }

    for (const row of parsed.grid) {
      if (!Array.isArray(row) || row.length !== gridSize) {
        throw new Error('Invalid grid format - rows must match grid size');
      }
      for (const cell of row) {
        if (typeof cell !== 'string' || !/^[A-Z]$/.test(cell)) {
          throw new Error('Invalid grid content - each cell must be a single uppercase letter');
        }
      }
    }

    return {
      grid: parsed.grid,
      gridSize: gridSize as 4 | 5
    };
  } catch (error) {
    console.error('Failed to parse OpenAI response:', result);
    throw new Error('Invalid response format from OpenAI');
  }
} 