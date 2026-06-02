import React from 'react';
import { cn } from '@/lib/utils';
import { PUZZLE_TYPES } from '@/data/puzzles';

// Returns the standard 3x3 box index for a cell
const getBoxIndex = (row, col) => Math.floor(row / 3) * 3 + Math.floor(col / 3);

// Check if two cells are in the same standard 3x3 box
const sameBox = (r1, c1, r2, c2) => getBoxIndex(r1, c1) === getBoxIndex(r2, c2);

// Check if a cell is on either main diagonal
const isOnDiagonal = (row, col) => row === col || row + col === 8;

// Region color palette for irregular sudoku
const REGION_COLORS = [
  'bg-blue-900/40',
  'bg-purple-900/40',
  'bg-emerald-900/40',
  'bg-amber-900/40',
  'bg-rose-900/40',
  'bg-cyan-900/40',
  'bg-indigo-900/40',
  'bg-teal-900/40',
  'bg-orange-900/40',
];

const REGION_BORDER_COLORS = [
  'border-blue-500',
  'border-purple-500',
  'border-emerald-500',
  'border-amber-500',
  'border-rose-500',
  'border-cyan-500',
  'border-indigo-500',
  'border-teal-500',
  'border-orange-500',
];

const SudokuBoard = ({
  puzzle,
  solution,
  userGrid,
  notes,
  selectedCell,
  onCellClick,
  puzzleType,
  regionMap,
  windowCells,
  consecutivePairs,
  conflicts,
}) => {
  const isSelected = (r, c) => selectedCell && selectedCell[0] === r && selectedCell[1] === c;

  const isHighlighted = (r, c) => {
    if (!selectedCell) return false;
    const [sr, sc] = selectedCell;
    if (r === sr || c === sc) return true;
    if (sameBox(r, c, sr, sc)) return true;
    if (puzzleType === PUZZLE_TYPES.DIAGONAL) {
      if (isOnDiagonal(sr, sc) && isOnDiagonal(r, c)) return true;
    }
    if (puzzleType === PUZZLE_TYPES.IRREGULAR && regionMap) {
      if (regionMap[r][c] === regionMap[sr][sc]) return true;
    }
    if (puzzleType === PUZZLE_TYPES.WINDOW && windowCells) {
      const selWindow = windowCells.findIndex(w => w.some(([wr, wc]) => wr === sr && wc === sc));
      const curWindow = windowCells.findIndex(w => w.some(([wr, wc]) => wr === r && wc === c));
      if (selWindow !== -1 && selWindow === curWindow) return true;
    }
    return false;
  };

  const isSameNumber = (r, c) => {
    if (!selectedCell) return false;
    const [sr, sc] = selectedCell;
    const selVal = userGrid[sr][sc] || puzzle[sr][sc];
    const curVal = userGrid[r][c] || puzzle[r][c];
    return selVal !== 0 && selVal === curVal;
  };

  const isConflict = (r, c) => conflicts && conflicts.some(([cr, cc]) => cr === r && cc === c);

  const isGiven = (r, c) => puzzle[r][c] !== 0;

  const isDiagonalCell = (r, c) => puzzleType === PUZZLE_TYPES.DIAGONAL && isOnDiagonal(r, c);

  const isWindowCell = (r, c) => {
    if (puzzleType !== PUZZLE_TYPES.WINDOW || !windowCells) return false;
    return windowCells.some(w => w.some(([wr, wc]) => wr === r && wc === c));
  };

  // Determine thick borders for box separation
  const getBoxBorders = (r, c) => {
    const borders = [];
    if (r % 3 === 0 && r !== 0) borders.push('border-t-2 border-t-slate-300');
    if (c % 3 === 0 && c !== 0) borders.push('border-l-2 border-l-slate-300');
    return borders.join(' ');
  };

  // For irregular: determine which borders to thicken based on region boundaries
  const getIrregularBorders = (r, c) => {
    if (!regionMap) return '';
    const myRegion = regionMap[r][c];
    const borders = [];
    if (r > 0 && regionMap[r-1][c] !== myRegion) borders.push('border-t-[3px] border-t-slate-200');
    if (r < 8 && regionMap[r+1][c] !== myRegion) borders.push('border-b-[3px] border-b-slate-200');
    if (c > 0 && regionMap[r][c-1] !== myRegion) borders.push('border-l-[3px] border-l-slate-200');
    if (c < 8 && regionMap[r][c+1] !== myRegion) borders.push('border-r-[3px] border-r-slate-200');
    return borders.join(' ');
  };

  // Check if a consecutive pair exists between two cells
  const hasConsecutivePair = (r1, c1, r2, c2) => {
    if (!consecutivePairs) return false;
    return consecutivePairs.some(
      p => (p.r1 === r1 && p.c1 === c1 && p.r2 === r2 && p.c2 === c2) ||
           (p.r1 === r2 && p.c1 === c2 && p.r2 === r1 && p.c2 === c1)
    );
  };

  const getCellValue = (r, c) => {
    if (puzzle[r][c] !== 0) return puzzle[r][c];
    return userGrid[r][c] || 0;
  };

  const getCellNotes = (r, c) => notes[r][c] || new Set();

  return (
    <div className="relative inline-block">
      {/* Diagonal overlay lines */}
      {puzzleType === PUZZLE_TYPES.DIAGONAL && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 9 9" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="9" y2="9" stroke="#60a5fa" strokeWidth="0.15"/>
            <line x1="9" y1="0" x2="0" y2="9" stroke="#60a5fa" strokeWidth="0.15"/>
          </svg>
        </div>
      )}

      <div
        className="grid border-2 border-slate-300 relative z-10"
        style={{ gridTemplateColumns: 'repeat(9, 1fr)' }}
      >
        {Array.from({ length: 9 }, (_, r) =>
          Array.from({ length: 9 }, (_, c) => {
            const value = getCellValue(r, c);
            const cellNotes = getCellNotes(r, c);
            const given = isGiven(r, c);
            const selected = isSelected(r, c);
            const highlighted = isHighlighted(r, c);
            const sameNum = isSameNumber(r, c);
            const conflict = isConflict(r, c);
            const diagonal = isDiagonalCell(r, c);
            const windowCell = isWindowCell(r, c);
            const regionIdx = regionMap ? regionMap[r][c] : -1;

            return (
              <div
                key={`${r}-${c}`}
                className={cn(
                  'relative w-9 h-9 sm:w-10 sm:h-10 border border-slate-600 flex items-center justify-center cursor-pointer select-none transition-colors duration-100',
                  // Box borders
                  puzzleType !== PUZZLE_TYPES.IRREGULAR && getBoxBorders(r, c),
                  // Irregular region borders
                  puzzleType === PUZZLE_TYPES.IRREGULAR && getIrregularBorders(r, c),
                  // Background states (order matters - most specific last)
                  diagonal && !selected && 'bg-blue-950/60',
                  windowCell && !selected && 'bg-indigo-950/60',
                  puzzleType === PUZZLE_TYPES.IRREGULAR && regionIdx >= 0 && !selected && REGION_COLORS[regionIdx % 9],
                  highlighted && !selected && 'bg-slate-700',
                  sameNum && !selected && 'bg-blue-900/60',
                  conflict && !selected && 'bg-red-900/50',
                  selected && 'bg-blue-600',
                  given && !selected && 'cursor-default',
                )}
                onClick={() => onCellClick(r, c)}
              >
                {value !== 0 ? (
                  <span className={cn(
                    'text-base sm:text-lg font-bold leading-none',
                    given ? 'text-slate-100' : conflict ? 'text-red-300' : 'text-blue-300',
                    selected && 'text-white',
                  )}>
                    {value}
                  </span>
                ) : cellNotes.size > 0 ? (
                  <div className="grid grid-cols-3 gap-0 w-full h-full p-0.5">
                    {[1,2,3,4,5,6,7,8,9].map(n => (
                      <span key={n} className={cn(
                        'text-[7px] leading-none flex items-center justify-center',
                        cellNotes.has(n) ? 'text-slate-300' : 'text-transparent',
                      )}>
                        {n}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Consecutive pair markers */}
                {puzzleType === PUZZLE_TYPES.CONSECUTIVE && (
                  <>
                    {hasConsecutivePair(r, c, r, c+1) && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 z-20 border border-slate-900" />
                    )}
                    {hasConsecutivePair(r, c, r+1, c) && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 z-20 border border-slate-900" />
                    )}
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SudokuBoard;
