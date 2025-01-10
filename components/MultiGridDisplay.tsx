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
  const gridSize = grid.length; // 4 or 5

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
    if (pathIndex === -1) return '';
    
    // Calculate progress through the path (0 to 1)
    const progress = pathIndex / (totalLength - 1);
    
    // Color progression from green -> yellow -> red
    if (progress === 0) {
      return 'bg-green-500 shadow-green-500/50 z-20'; // Start
    } else if (progress < 0.25) {
      return 'bg-green-400 z-10';
    } else if (progress < 0.5) {
      return 'bg-yellow-400 z-10';
    } else if (progress < 0.75) {
      return 'bg-orange-400 z-10';
    } else if (progress === 1) {
      return 'bg-red-500 shadow-red-500/50 z-20'; // End
    } else {
      return 'bg-red-400 z-10';
    }
  };

  // Get arrow position based on direction
  const getArrowPosition = (from: Position, to: Position): React.CSSProperties => {
    const dx = to.col - from.col;
    const dy = to.row - from.row;
    
    // Base positioning with orange color and larger size
    const style: React.CSSProperties = {
      position: 'absolute',
      fontSize: '1.2rem',
      color: '#ffffff',
      fontWeight: 'bold',
      zIndex: 30,
      backgroundColor: '#f97316', // Orange-500
      width: '28px',
      height: '28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      border: '2px solid white',
    };

    // Position arrows with consistent padding
    const PADDING = 8;

    // Horizontal
    if (dy === 0) {
      style.top = '12px';
      if (dx > 0) {
        style.right = PADDING;
      } else {
        style.left = PADDING;
      }
    }
    // Vertical
    else if (dx === 0) {
      style.left = '12px';
      if (dy > 0) {
        style.bottom = PADDING;
      } else {
        style.top = PADDING;
      }
    }
    // Diagonal
    else {
      if (dy < 0) {
        style.top = PADDING;
      } else {
        style.bottom = PADDING;
      }
      if (dx < 0) {
        style.left = PADDING;
      } else {
        style.right = PADDING;
      }
    }

    return style;
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4">
      {Object.entries(wordsByLength)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([length, lengthWords]) => (
          <div key={length} className="space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-gray-800">
                {length} Letters
              </h3>
              <div className="text-base text-gray-500">
                {lengthWords.length} words • {lengthWords[0].score} points each
              </div>
              <Divider className="flex-grow" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lengthWords.map((word) => (
                <Card 
                  key={word.word}
                  className="border-none hover:shadow-lg transition-all duration-300 group"
                  shadow="sm"
                >
                  <CardBody className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-3xl font-bold tracking-wide group-hover:text-green-500 transition-colors">{word.word}</span>
                      <span className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-base font-bold shadow-sm">
                        {word.score} pts
                      </span>
                    </div>
                    <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                      <div 
                        className={`absolute inset-0 grid ${
                          gridSize === 5 ? 'grid-cols-5' : 'grid-cols-4'
                        } gap-3 p-4 rounded-xl bg-[#2E7D32]`}
                        style={{ 
                          boxShadow: '0 0 0 4px #4CAF50',
                        }}
                      >
                        {grid.map((row, i) =>
                          row.map((letter, j) => {
                            const pathIndex = word.path.findIndex(pos => pos.row === i && pos.col === j);
                            const isInPath = pathIndex !== -1;
                            const isNotLast = pathIndex < word.path.length - 1;

                            return (
                              <div
                                key={`${i}-${j}`}
                                className={`
                                  relative aspect-square flex items-center justify-center
                                  rounded-lg transition-all duration-300
                                  ${isInPath ? getPathColor(pathIndex, word.path.length) : 'bg-[#f7d794]'}
                                  ${isInPath ? 'text-white font-bold' : 'text-black font-bold'}
                                  ${isInPath ? 'ring-2 ring-white/50' : ''}
                                `}
                                style={{
                                  backgroundImage: !isInPath ? 'linear-gradient(135deg, #f7d794 0%, #f5c976 100%)' : 'none',
                                  boxShadow: !isInPath ? '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.2)' : 'none',
                                }}
                              >
                                <span 
                                  className="absolute inset-0 flex items-center justify-center transform translate-y-[1px]"
                                  style={{
                                    fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                                    letterSpacing: '-0.025em',
                                  }}
                                >
                                  {letter}
                                </span>
                                {isInPath && isNotLast && (
                                  <div
                                    style={getArrowPosition(
                                      word.path[pathIndex],
                                      word.path[pathIndex + 1]
                                    )}
                                  >
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