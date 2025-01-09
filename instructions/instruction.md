1. Project Overview
1.1 Summary
We want to build a Next.js web application that allows users to upload a “Word Hunt” puzzle screenshot and generates valid words from the detected letters. Now, instead of relying solely on Tesseract or a Python OCR script, we will use OpenAI’s LLM to process the image and produce a structured grid via OpenAI’s JSON schema functionality.

1.2 Goals
Image Upload: Let users upload a Word Hunt screenshot.
LLM-based OCR: Send the image to OpenAI’s latest model ("gpt-4o") with a structured output request to return the letter grid.
Word Generation: Use the extracted grid to generate all valid words.
Display Results: Show a sorted list of those words, plus an option to refresh/start a new puzzle.
1.3 Non-Goals
Handling extremely skewed images or special puzzle formats.
Complex user profiles or advanced analytics.
Multi-lingual dictionary support at this time (English only for MVP).
2. Features
2.1 Image Upload
User can upload a puzzle image (PNG, JPEG).
Preview or filename confirmation before submission.
Client sends the base64 of the image to our server or directly to the OpenAI API (depending on architecture).
2.2 OCR & Grid Extraction (Now Using OpenAI)
LLM-based Image Parsing

We will send the puzzle image (in base64) to OpenAI’s "gpt-4o" model with a structured JSON schema.
The LLM should respond with a JSON object containing the detected grid.
Grid Construction

Parse the JSON response to a 2D array, e.g. [['T','R','M','L'],['N','A','N','S'],...].
Store the final grid in our Next.js state or backend DB.
Fallback/Manual Correction (Optional)

If OCR fails or the grid has errors, allow the user to correct letters manually (MVP can skip this if time is short).
3. Requirements for Each Feature
3.1 Image Upload Requirements
File Input / Drag & Drop

Must accept .png, .jpg, .jpeg.
Provide an error if the file type or size is invalid.
Sending Image Data

Convert the uploaded file to base64 string (client-side) or handle the file in the server, then pass the base64 to the LLM.
UI

Show a simple progress indicator while the LLM is processing.
3.2 OCR & Grid Extraction Requirements (LLM)
OpenAI Request

We will use the OpenAI Python client library with the “chat.completions” endpoint.
Must include the image as a base64 URL under "role": "user" → "content": [{"type":"image_url", ...}].
Structured Output Schema

We require a JSON schema specifying the grid property.
The model is gpt-4o.
Below is an example code snippet showing how we’ll call the OpenAI API:
python
Copy code
from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "data:image/jpeg;base64,..."
                    }
                }
            ]
        },
        {
            "role": "assistant",
            "content": [
                {
                    "type": "text",
                    "text": "{\"grid\":[[\"T\",\"R\",\"M\",\"L\"],[\"N\",\"A\",\"N\",\"S\"],[\"D\",\"O\",\"T\",\"E\"],[\"R\",\"O\",\"L\",\"A\"]]}"
                }
            ]
        }
    ],
    response_format={
        "type": "json_schema",
        "json_schema": {
            "name": "word_hunt",
            "strict": True,
            "schema": {
                "type": "object",
                "properties": {
                    "grid": {
                        "type": "array",
                        "description": "A 4x4 grid of letters for the word hunt.",
                        "items": {
                            "type": "array",
                            "description": "A single row of the letter grid.",
                            "items": {
                                "type": "string",
                                "description": "A single letter in the row."
                            }
                        }
                    }
                },
                "required": [
                    "grid"
                ],
                "additionalProperties": False
            }
        }
    },
    temperature=1,
    max_completion_tokens=2048,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
)
Note: This call will produce a response similar to:

json
Copy code
{
  "grid": [
    ["T","R","M","L"],
    ["N","A","N","S"],
    ["D","O","T","E"],
    ["R","O","L","A"]
  ]
}
Parse JSON

Once the API call returns, parse response to extract the grid.
Save the grid for downstream word generation.
3.3 Word Generation & Verification
Use standard adjacency rules in a backtracking algorithm to generate candidate words from the NxN grid.
Validate each candidate word against an English dictionary (local or external).
Sort and remove duplicates.
3.4 Results Display & Refresh
Show a scrollable list of valid words, sorted by length or alphabetical order.
“Refresh” button to reset state and upload a new puzzle image.
4. Data Models
4.1 Puzzle
ts
Copy code
interface Puzzle {
  id: string;             // Unique ID for puzzle
  grid: string[][];       // 2D array of letters
  createdAt: Date;
  imageUrl?: string;      // Optional: base64 or public URL for reference
}
4.2 Word
ts
Copy code
interface Word {
  id: string;
  puzzleId: string;       
  value: string;          // The word
  length: number;
  score?: number;         // Optional if we implement scoring
}
5. API Contract
5.1 POST /api/upload
Description: Receives the user-uploaded image (base64 or multipart form), calls the OpenAI LLM to get the grid, stores the puzzle in memory/DB, and returns puzzle info.
Response:
json
Copy code
{
  "puzzleId": "abc123",
  "grid": [
    ["T","R","M","L"],
    ["N","A","N","S"],
    ["D","O","T","E"],
    ["R","O","L","A"]
  ]
}
5.2 GET /api/puzzle/:puzzleId/words
Description: Returns the list of generated words for the puzzle ID provided.
Response:
json
Copy code
{
  "puzzleId": "abc123",
  "words": [
    {"id":"w1", "value":"TERM", "length":4},
    {"id":"w2", "value":"TROLL", "length":5}
  ]
}
5.3 POST /api/puzzle/:puzzleId/generateWords
Description: Triggers the server to find valid words from the puzzle’s grid.
Response:
json
Copy code
{
  "puzzleId": "abc123",
  "words": [
    {"id":"w1", "value":"TERM", "length":4},
    {"id":"w2", "value":"TROLL", "length":5}
  ]
}
5.4 POST /api/puzzle/:puzzleId/refresh
Description: Clears puzzle data or sets puzzle to a “clean” state.
Response: 200 OK or a JSON response confirming the reset.
6. Implementation Details
Next.js

Use Next.js API routes for /api/upload and puzzle endpoints.
The front-end will handle file upload (via drag/drop or input).
The server-side route will call OpenAI’s client.chat.completions.create(...).
OpenAI LLM

We rely on openai Python library in this example. If Next.js is purely Node-based, you might use the openai Node library or a separate Python microservice.
The key is sending data:image/*;base64,<base64String> to the model with the structured json_schema.
Dictionary

Either store a local dictionary file for quick lookups or use a 3rd-party dictionary API.
Scaling & Performance

The image-to-LLM call is the heaviest operation (OCR + LLM). For higher volume, consider queueing or an asynchronous pattern.
Security

Validate and sanitize all uploads.
Ensure secrets (OpenAI API keys) aren’t exposed in the client.