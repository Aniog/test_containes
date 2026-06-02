import React from 'react';
import { cn } from '@/lib/utils';
import { PUZZLE_TYPES } from '@/data/puzzles';

const getBoxIndex = (row, col) => Math.floor(row / 3) * 3 + Math.floor(col / 3);
const sameBox = (r1, c1, r2, c2) => getBoxIndex(r1, c1) === getBoxIndex(r2, c2);
const isOnDiagonal = (row, col) => row === col || row + col === 8;

const REGION_COLORS = [
  'bg-blue-900/50',
  'bg-purple-900/50',
  'bg-emerald-900/50',
  'bg-amber-900/50',
  'bg-rose-900/50',
  'bg-cyan-900/50',
  'bg-indigo-900/50',
  'bg-teal-900/50',
  'bg-orange-900/50',
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
    if (puzzleType === PUZZLE_TYPES.DIAGONAL && isOnDiagonal(sr, sc) && isOnDiagonal(r, c)) return true;
    if (puzzleType === PUZZLE_TYPES.IRREGULAR && regionMap && regionMap[r][c] === regionMap[sr][sc]) return true;
    if (puzzleType === PUZZLE_TYPES.WINDOW && windowCells) {
      const selWin = windowCells.findIndex(w => w.some(([wr, wc]) => wr === sr && wc === sc));
      const curWin = windowCells.findIndex(w => w.some(([wr, wc]) => wr === r && wc === c));
      if (selWin !== -1 && selWin === curWin) return true;
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
  const isWindowCell = (r, c) =>
    puzzleType === PUZZLE_TYPES.WINDOW && windowCells &&
    windowCells.some(w => w.some(([wr, wc]) => wr === r && wc === c));

  // Build inline border style for clean box separation
  const getCellStyle = (r, c) => {
    const style = {};
    if (puzzleType === PUZZLE_TYPES.IRREGULAR && regionMap) {
      const myRegion = regionMap[r][c];
      style.borderTop    = r > 0 && regionMap[r-1][c] !== myRegion ? '2px solid #94a3b8' : '1px solid #334155';
      style.borderBottom = r < 8 && regionMap[r+1][c] !== myRegion ? '2px solid #94a3b8' : '1px solid #334155';
      style.borderLeft   = c > 0 && regionMap[r][c-1] !== myRegion ? '2px solid #94a3b8' : '1px solid #334155';
      style.borderRight  = c < 8 && regionMap[r][c+1] !== myRegion ? '2px solid #94a3b8' : '1px solid #334155';
    } else {
      style.borderTop    = r % 3 === 0 ? '2px solid #94a3b8' : '1px solid #334155';
      style.borderLeft   = c % 3 === 0 ? '2px solid #94a3b8' : '1px solid #334155';
      style.borderBottom = r === 8 ? '2px solid #94a3b8' : '1px solid #334155';
      style.borderRight  = c === 8 ? '2px solid #94a3b8' : '1px solid #334155';
    }
    return style;
  };

  const hasConsecutivePair = (r1, c1, r2, c2) => {
    if (!consecutivePairs) return false;
    return consecutivePairs.some(
      p => (p.r1 === r1 && p.c1 === c1 && p.r2 === r2 && p.c2 === c2) ||
           (p.r1 === r2 && p.c1 === c2 && p.r2 === r1 && p.c2 === c1)
    );
  };

  const getCellValue = (r, c) => puzzle[r][c] !== 0 ? puzzle[r][c] : (userGrid[r][c] || 0);
  const getCellNotes = (r, c) => notes[r][c] || new Set();

  return (
    <div className="relative inline-block">
      {/* Diagonal overlay */}
      {puzzleType === PUZZLE_TYPES.DIAGONAL && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full opacity-15" viewBox="0 0 9 9" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="9" y2="9" stroke="#60a5fa" strokeWidth="0.2"/>
            <line x1="9" y1="0" x2="0" y2="9" stroke="#60a5fa" strokeWidth="0.2"/>
          </svg>
        </div>
      )}

      <div
        className="grid relative z-10"
        style={{ gridTemplateColumns: 'repeat(9, 1fr)', display: 'grid' }}
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

            let bg = 'bg-slate-850';
            if (puzzleType === PUZZLE_TYPES.IRREGULAR && regionIdx >= 0) bg = REGION_COLORS[regionIdx % 9];
            if (diagonal && !selected) bg = 'bg-blue-950/70';
            if (windowCell && !selected) bg = 'bg-indigo-950/70';
            if (highlighted && !selected) bg = 'bg-slate-700';
            if (sameNum && !selected) bg = 'bg-blue-900/70';
            if (conflict && !selected) bg = 'bg-red-900/60';
            if (selected) bg = 'bg-blue-500';

            return (
              <div
                key={`${r}-${c}`}
                className={cn(
                  'relative flex items-center justify-center cursor-pointer select-none transition-colors duration-100',
                  'w-9 h-9 sm:w-10 sm:h-10',
                  bg,
                  given && !selected && 'cursor-default',
                )}
                style={getCellStyle(r, c)}
                onClick={() => onCellClick(r, c)}
              >
                {value !== 0 ? (
                  <span className={cn(
                    'text-base sm:text-lg font-bold leading-none',
                    selected ? 'text-white' :
                    conflict ? 'text-red-300' :
                    given ? 'text-slate-100' : 'text-blue-300',
                  )}>
                    {value}
                  </span>
                ) : cellNotes.size > 0 ? (
                  <div className="grid grid-cols-3 w-full h-full p-0.5">
                    {[1,2,3,4,5,6,7,8,9].map(n => (
                      <span key={n} className={cn(
                        'text-[6px] leading-none flex items-center justify-center',
                        cellNotes.has(n) ? 'text-slate-300' : 'text-transparent',
                      )}>
                        {n}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Consecutive pair dots */}
                {puzzleType === PUZZLE_TYPES.CONSECUTIVE && (
                  <>
                    {c < 8 && hasConsecutivePair(r, c, r, c + 1) && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 z-20 border border-slate-900" />
                    )}
                    {r < 8 && hasConsecutivePair(r, c, r + 1, c) && (
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
