# Word Hunt - Next.js OCR Puzzle Game

A modern web application that combines OCR technology with word puzzle gaming. Upload images of letter grids and discover all possible words that can be formed by connecting adjacent letters.

## Features

- 📷 Image upload with OCR processing
- 🎯 Intelligent word finding algorithm
- 📝 Interactive grid display with word path visualization
- 📚 Dictionary validation using SOWPODS
- ⚡ Real-time word validation and scoring
- 🎨 Modern, responsive UI with Tailwind CSS

## Tech Stack

- Next.js 13+ with App Router
- TypeScript
- OpenAI API for OCR
- Tailwind CSS
- Server-side API routes
- Client-side caching

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API route handlers
│   │   ├── dictionary/    # Dictionary validation endpoint
│   │   └── upload/        # Image upload and OCR endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page
│   └── providers.tsx      # App providers
├── components/            # React components
│   ├── ImageUpload.tsx    # Image upload component
│   ├── MultiGridDisplay   # Grid visualization
│   └── WordPathGrid       # Word path display
├── data/                  # Static data
│   └── sowpods.json      # Dictionary word list
├── lib/                   # Utility functions
│   ├── dictionary.ts      # Dictionary operations
│   ├── openai.ts         # OpenAI API client
│   └── wordFinder.ts     # Word search algorithm
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd word-hunt
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```
OPENAI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Upload an image containing a grid of letters
2. Wait for OCR processing
3. View the detected grid and found words
4. Click on words to see their paths in the grid
5. Use the dictionary validation to verify words

## Development

### Key Components

- `ImageUpload.tsx`: Handles image upload and processing
- `MultiGridDisplay.tsx`: Displays the letter grid with word paths
- `WordPathGrid.tsx`: Shows individual word paths
- `dictionary.ts`: Manages word validation
- `wordFinder.ts`: Implements the word search algorithm

### API Routes

- `/api/upload`: Processes uploaded images using OpenAI's OCR
- `/api/dictionary`: Validates words against the SOWPODS dictionary

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Security

- Server-side image validation
- Secure API key handling
- Rate limiting on API routes
- CORS and CSP headers implemented

## Performance

- Client-side caching
- Optimized word search algorithm
- Efficient grid traversal
- Minimal client-side processing

## License

[MIT License](LICENSE) 