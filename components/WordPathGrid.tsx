'use client';

interface Position {
  row: number;
  col: number;
}

interface WordPathGridProps {
  grid: string[][];
  highlightedWord?: string;
  path?: Position[];
}

export default function WordPathGrid({ grid, highlightedWord, path }: WordPathGridProps) {
  const isHighlighted = (row: number, col: number) => {
    if (!path) return false;
    return path.some(pos => pos.row === row && pos.col === col);
  };

  const getArrowDirection = (from: Position, to: Position) => {
    const dx = to.col - from.col;
    const dy = to.row - from.row;
    
    // Return arrow character based on direction
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

  const getHighlightClass = (row: number, col: number) => {
    if (!path) return 'bg-gray-100';
    const index = path.findIndex(pos => pos.row === row && pos.col === col);
    if (index === -1) return 'bg-gray-100';
    if (index === 0) return 'bg-emerald-200 scale-105';
    if (index === path.length - 1) return 'bg-emerald-400 scale-105';
    return 'bg-emerald-300 scale-105';
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-1.5 w-48">
        {grid.map((row, i) =>
          row.map((letter, j) => (
            <div
              key={`${i}-${j}`}
              className={`
                relative aspect-square flex items-center justify-center
                text-xl font-bold rounded-lg transition-all duration-200
                ${getHighlightClass(i, j)}
                ${isHighlighted(i, j) ? 'text-gray-800 shadow-md z-10' : 'text-gray-500'}
              `}
            >
              {letter}
              {path && path.length > 1 && path.findIndex(pos => pos.row === i && pos.col === j) >= 0 && (
                <>
                  {/* First letter gets "Start" indicator */}
                  {path[0].row === i && path[0].col === j && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-emerald-600">
                      Start
                    </div>
                  )}
                  {/* Show direction arrow for all except last letter */}
                  {path.findIndex(pos => pos.row === i && pos.col === j) < path.length - 1 && (
                    <div className="absolute -top-1 -right-1 text-lg text-emerald-600 font-bold">
                      {getArrowDirection(
                        { row: i, col: j },
                        path[path.findIndex(pos => pos.row === i && pos.col === j) + 1]
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          ))
        )}
      </div>
      {highlightedWord && (
        <div className="absolute -bottom-8 left-0 right-0 text-center font-medium text-emerald-700">
          {highlightedWord}
        </div>
      )}
    </div>
  );
} 