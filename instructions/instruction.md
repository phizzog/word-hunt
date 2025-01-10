1. Project Overview

1.1 Summary
We want to build a Next.js web application that allows users to upload a "Word Hunt" puzzle screenshot and generates valid words from the detected letters. The application will use OpenAI's Vision model to process the image and produce a structured grid via OpenAI's JSON schema functionality, supporting both 4x4 and 5x5 puzzle grids.

1.2 Goals
- Image Upload: Let users upload a Word Hunt screenshot
- LLM-based OCR: Send the image to OpenAI's Vision model with a structured output request to return the letter grid
- Grid Size Support: Handle both 4x4 and 5x5 puzzle grids automatically
- Word Generation: Use the extracted grid to generate all valid words
- Display Results: Show a sorted list of those words, plus an option to refresh/start a new puzzle

1.3 Non-Goals
- Handling extremely skewed images or special puzzle formats
- Complex user profiles or advanced analytics
- Multi-lingual dictionary support at this time (English only for MVP)

2. Features
2.1 Image Upload
- User can upload a puzzle image (PNG, JPEG)
- Preview or filename confirmation before submission
- Client sends the base64 of the image to our Next.js API route

2.2 OCR & Grid Extraction (Using OpenAI Vision)
LLM-based Image Parsing
- Send the puzzle image (in base64) to OpenAI's Vision model with a structured JSON schema
- The LLM should respond with a JSON object containing the detected grid
- Automatically detect and handle both 4x4 and 5x5 grids

Grid Construction
- Parse the JSON response to a 2D array, e.g.:
  4x4: [['T','R','M','L'],['N','A','N','S'],...]
  5x5: [['T','R','M','L','E'],['N','A','N','S','R'],...]
- Store the final grid in Next.js state

Fallback/Manual Correction (Optional)
- If OCR fails or the grid has errors, allow the user to correct letters manually

3. Requirements for Each Feature
3.1 Image Upload Requirements
File Input / Drag & Drop
- Must accept .png, .jpg, .jpeg
- Provide an error if the file type or size is invalid

Sending Image Data
- Convert the uploaded file to base64 string client-side
- Send to Next.js API route which forwards to OpenAI

UI
- Show a simple progress indicator while processing
- Display preview of uploaded image

3.2 OCR & Grid Extraction Requirements (Vision Model)
OpenAI Request
- Use the OpenAI TypeScript/JavaScript client library
- Include the image as a base64 URL in the messages array
- Use proper JSON schema for structured output

Structured Output Schema
- Define a flexible schema that handles both 4x4 and 5x5 grids
- Example API call structure:

```typescript
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
    type: "json_object",
    schema: {
      type: "object",
      properties: {
        grid: {
          type: "array",
          description: "A grid of letters (4x4 or 5x5) for the word hunt.",
          items: {
            type: "array",
            items: {
              type: "string",
              description: "A single letter in the row."
            }
          }
        }
      },
      required: ["grid"]
    }
  },
  max_tokens: 1000
});
```

Example Response Format:
```json
{
  "grid": [
    ["T","R","M","L","E"],  // 5x5 grid example
    ["N","A","N","S","R"], 
    ["D","O","T","E","A"],
    ["R","O","L","A","M"],
    ["S","P","I","N","E"]
  ]
}
```

3.3 Word Generation & Verification
- Use standard adjacency rules in a backtracking algorithm
- Support both 4x4 and 5x5 grid traversal
- Validate against English dictionary (using local SOWPODS dictionary)
- Sort words by length and alphabetically
- Remove duplicates

3.4 Results Display & Refresh
- Show a scrollable list of valid words
- Group words by length
- "Refresh" button to reset state
- Display grid size indicator (4x4 or 5x5)

4. Data Models
4.1 Puzzle
```typescript
interface Puzzle {
  id: string;
  grid: string[][];       // 2D array of letters (4x4 or 5x5)
  gridSize: 4 | 5;        // Grid dimension
  createdAt: Date;
  imageUrl?: string;      // Base64 of uploaded image
}
```

4.2 Word
```typescript
interface Word {
  value: string;          // The word
  length: number;
  path?: number[][];      // Optional: path of indices in grid
}
```

5. API Contract
5.1 POST /api/upload
Description: Processes uploaded image and returns grid data
Response:
```json
{
  "grid": [["T","R","M","L","E"], ...],  // 4x4 or 5x5
  "gridSize": 5,
  "success": true
}
```

5.2 POST /api/dictionary
Description: Validates words against dictionary
Request:
```json
{
  "word": "EXAMPLE"
}
```
Response:
```json
{
  "isValid": true
}
```

6. Implementation Details
Next.js
- Use API routes for image upload and dictionary validation
- Implement proper error handling and loading states
- Use TypeScript for type safety

OpenAI Integration
- Store API key securely in environment variables
- Implement proper error handling for API calls
- Handle rate limiting and timeouts

Dictionary
- Use local SOWPODS dictionary for fast lookups
- Implement efficient search algorithm

Performance
- Optimize grid traversal algorithm for both sizes
- Cache dictionary lookups where possible
- Implement proper loading states

Security
- Validate uploads server-side
- Sanitize all inputs
- Protect API routes
- Keep OpenAI key secure