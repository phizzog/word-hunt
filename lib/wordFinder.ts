import { dictionary } from './dictionary';

interface Position {
  row: number;
  col: number;
}

export interface WordResult {
  word: string;
  path: Position[];
}

// All possible directions for word search (horizontal, vertical, diagonal)
const DIRECTIONS: Position[] = [
  { row: -1, col: -1 }, { row: -1, col: 0 }, { row: -1, col: 1 },
  { row: 0, col: -1 },                        { row: 0, col: 1 },
  { row: 1, col: -1 },  { row: 1, col: 0 },  { row: 1, col: 1 }
];

// Minimum word length for Word Hunt
const MIN_WORD_LENGTH = 3;

export async function findWords(grid: string[][]): Promise<WordResult[]> {
  try {
    await dictionary.initialize();
  } catch (error) {
    console.error('Failed to initialize dictionary:', error);
    return [];
  }

  const results = new Map<string, WordResult>();
  const visited = Array(4).fill(null).map(() => Array(4).fill(false));

  // Start from each cell in the grid
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      findWordsFromCell(grid, row, col, '', visited, [], results);
    }
  }

  return Array.from(results.values()).sort((a, b) => {
    // Sort by length first (descending), then alphabetically
    if (a.word.length !== b.word.length) return b.word.length - a.word.length;
    return a.word.localeCompare(b.word);
  });
}

function findWordsFromCell(
  grid: string[][],
  row: number,
  col: number,
  currentWord: string,
  visited: boolean[][],
  currentPath: Position[],
  results: Map<string, WordResult>
): void {
  visited[row][col] = true;
  const newWord = currentWord + grid[row][col];
  const newPath = [...currentPath, { row, col }];

  if (!dictionary.hasValidPrefix(newWord)) {
    visited[row][col] = false;
    return;
  }

  if (newWord.length >= MIN_WORD_LENGTH && dictionary.contains(newWord)) {
    results.set(newWord, { word: newWord, path: newPath });
  }

  if (newWord.length < 8) {
    for (const dir of DIRECTIONS) {
      const newRow = row + dir.row;
      const newCol = col + dir.col;

      if (isValidPosition(newRow, newCol) && !visited[newRow][newCol]) {
        findWordsFromCell(grid, newRow, newCol, newWord, visited, newPath, results);
      }
    }
  }

  visited[row][col] = false;
}

function isValidPosition(row: number, col: number): boolean {
  return row >= 0 && row < 4 && col >= 0 && col < 4;
}

export function scoreWord(word: string): number {
  const length = word.length;
  if (length < MIN_WORD_LENGTH) return 0;
  if (length === 3) return 100;
  if (length === 4) return 400;
  if (length === 5) return 800;
  return 1400 + (length - 6) * 400; // Additional points for longer words
} 