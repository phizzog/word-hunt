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
// Maximum word length based on grid size
const getMaxWordLength = (gridSize: number) => gridSize * 2;

export async function findWords(grid: string[][]): Promise<WordResult[]> {
  try {
    await dictionary.initialize();
  } catch (error) {
    console.error('Failed to initialize dictionary:', error);
    return [];
  }

  const gridSize = grid.length; // Determine grid size (4 or 5)
  const maxWordLength = getMaxWordLength(gridSize);
  
  const results = new Map<string, WordResult>();
  const visited = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));

  // Start from each cell in the grid
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      findWordsFromCell(grid, row, col, '', visited, [], results, gridSize, maxWordLength);
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
  results: Map<string, WordResult>,
  gridSize: number,
  maxWordLength: number
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

  if (newWord.length < maxWordLength) {
    for (const dir of DIRECTIONS) {
      const newRow = row + dir.row;
      const newCol = col + dir.col;

      if (isValidPosition(newRow, newCol, gridSize) && !visited[newRow][newCol]) {
        findWordsFromCell(grid, newRow, newCol, newWord, visited, newPath, results, gridSize, maxWordLength);
      }
    }
  }

  visited[row][col] = false;
}

function isValidPosition(row: number, col: number, gridSize: number): boolean {
  return row >= 0 && row < gridSize && col >= 0 && col < gridSize;
}

export function scoreWord(word: string): number {
  const length = word.length;
  if (length < MIN_WORD_LENGTH) return 0;
  if (length === 3) return 100;
  if (length === 4) return 400;
  if (length === 5) return 800;
  return 1400 + (length - 6) * 400; // Additional points for longer words
} 