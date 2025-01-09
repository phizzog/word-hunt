'use client';

import { Card, CardBody, Divider } from "@nextui-org/react";

interface Position {
  row: number;
  col: number;
}

interface Word {
  word: string;
  score: number;
  length: number;
  path: Position[];
}

interface MultiGridDisplayProps {
  grid: string[][];
  words: Word[];
}

export default function MultiGridDisplay({ grid, words }: MultiGridDisplayProps) {
  // Group words by length for better organization
  const wordsByLength = words.reduce((acc, word) => {
    acc[word.length] = acc[word.length] || [];
    acc[word.length].push(word);
    return acc;
  }, {} as Record<number, Word[]>);

  const getArrowDirection = (from: Position, to: Position) => {
    const dx = to.col - from.col;
    const dy = to.row - from.row;
    
    if (dy === -1 && dx === 0) return '↑';
    if (dy === 1 && dx === 0) return '↓';
    if (dy === 0 && dx === -1) return '←';
    if (dy === 0 && dx === 1) return '→';
    if (dy === -1 && dx === -1) return '↖';
    if (dy === -1 && dx === 1) return '↗';
    if (dy === 1 && dx === -1) return '↙';
    if (dy === 1 && dx === 1) return '↘';
    return '';
  };

  // Get color for path position with smoother progression
  const getPathColor = (pathIndex: number, totalLength: number) => {
    if (pathIndex === -1) return 'bg-gray-100';
    
    // Calculate progress through the path (0 to 1)
    const progress = pathIndex / (totalLength - 1);
    
    // Enhanced color progression
    if (progress === 0) {
      return 'bg-green-600 shadow-lg ring-2 ring-green-400 ring-offset-2'; // Start
    } else if (progress < 0.25) {
      return 'bg-green-500 shadow-lg';
    } else if (progress < 0.5) {
      return 'bg-yellow-500 shadow-lg';
    } else if (progress < 0.75) {
      return 'bg-orange-500 shadow-lg';
    } else if (progress === 1) {
      return 'bg-red-600 shadow-lg ring-2 ring-red-400 ring-offset-2'; // End
    } else {
      return 'bg-red-500 shadow-lg';
    }
  };

  return (
    <div className="space-y-8">
      {Object.entries(wordsByLength)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([length, lengthWords]) => (
          <div key={length} className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-gray-800">
                {length} Letters
              </h3>
              <div className="text-sm text-gray-500">
                {lengthWords.length} words • {lengthWords[0].score} points each
              </div>
              <Divider className="flex-grow" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {lengthWords.map((word) => (
                <Card 
                  key={word.word}
                  className="border-none hover:shadow-md transition-shadow"
                  shadow="sm"
                >
                  <CardBody className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold tracking-wide">{word.word}</span>
                      <span className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm font-bold">
                        {word.score}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 p-2 bg-gray-50 rounded-xl">
                      {grid.map((row, i) =>
                        row.map((letter, j) => {
                          const pathIndex = word.path.findIndex(pos => pos.row === i && pos.col === j);
                          const isInPath = pathIndex !== -1;
                          const isStart = pathIndex === 0;
                          const isEnd = pathIndex === word.path.length - 1;

                          return (
                            <div
                              key={`${i}-${j}`}
                              className={`
                                relative aspect-square flex items-center justify-center
                                text-lg font-bold rounded-xl transition-all duration-300
                                ${getPathColor(pathIndex, word.path.length)}
                                ${isInPath 
                                  ? 'text-white scale-110 z-10' 
                                  : 'text-gray-400 bg-white border border-gray-100'
                                }
                                ${(isStart || isEnd) ? 'scale-115' : ''}
                              `}
                            >
                              {letter}
                              {isInPath && pathIndex < word.path.length - 1 && (
                                <div className="absolute -top-1 -right-1 text-base font-bold text-white drop-shadow-lg">
                                  {getArrowDirection(
                                    word.path[pathIndex],
                                    word.path[pathIndex + 1]
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
} 