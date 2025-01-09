import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

// Load the dictionary from a JSON file containing SOWPODS words
const DICTIONARY_PATH = path.join(process.cwd(), 'data', 'sowpods.json');

export async function GET() {
  try {
    // Check if dictionary file exists
    try {
      await fs.access(DICTIONARY_PATH);
    } catch {
      // If file doesn't exist, create it with fetch
      const response = await fetch('https://raw.githubusercontent.com/jmlewis/valett/master/scrabble/sowpods.txt');
      const text = await response.text();
      
      // Process the word list (filter words 3-8 letters)
      const words = text
        .split('\n')
        .map(word => word.trim().toUpperCase())
        .filter(word => word.length >= 3 && word.length <= 8 && /^[A-Z]+$/.test(word));

      // Create data directory if it doesn't exist
      await fs.mkdir(path.join(process.cwd(), 'data'), { recursive: true });
      
      // Save processed dictionary
      await fs.writeFile(DICTIONARY_PATH, JSON.stringify(words));
      
      return NextResponse.json(words);
    }

    // Read existing dictionary file
    const fileContent = await fs.readFile(DICTIONARY_PATH, 'utf-8');
    const words = JSON.parse(fileContent);
    
    return NextResponse.json(words);
  } catch (error) {
    console.error('Dictionary error:', error);
    // Fallback to basic word list if everything fails
    return NextResponse.json([
      "THE", "AND", "FOR", "ARE", "BUT", "NOT", "YOU", "ALL", "ANY", "CAN",
      // ... (keep some basic words as fallback)
    ]);
  }
} 