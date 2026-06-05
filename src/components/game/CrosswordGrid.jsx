import { useState, useEffect } from 'react';

const CELL_SIZE = 36;
const CELL_GAP = 3;

export default function CrosswordGrid({ grid, revealedWordIndices, flashWordIndex, flashType }) {
  const [animatingCells, setAnimatingCells] = useState(new Set());

  useEffect(() => {
    if (flashWordIndex === null || flashWordIndex === undefined) return;
    const cells = new Set();
    grid.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell.wordIndices.includes(flashWordIndex)) cells.add(`${r}-${c}`);
      });
    });
    setAnimatingCells(cells);
    const timer = setTimeout(() => setAnimatingCells(new Set()), 800);
    return () => clearTimeout(timer);
  }, [flashWordIndex, grid]);

  const isCellRevealed = (cell) => cell.wordIndices.some(wi => revealedWordIndices.has(wi));

  // Compute tight bounding box of active cells
  let minRow = Infinity, maxRow = -Infinity, minCol = Infinity, maxCol = -Infinity;
  grid.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (cell.active) {
        minRow = Math.min(minRow, r);
        maxRow = Math.max(maxRow, r);
        minCol = Math.min(minCol, c);
        maxCol = Math.max(maxCol, c);
      }
    });
  });

  const activeRows = maxRow - minRow + 1;
  const activeCols = maxCol - minCol + 1;
  const gridWidth = activeCols * CELL_SIZE + (activeCols - 1) * CELL_GAP;
  const gridHeight = activeRows * CELL_SIZE + (activeRows - 1) * CELL_GAP;
  const PAD = 12;

  return (
    <div
      className="relative rounded-2xl"
      style={{
        width: gridWidth + PAD * 2,
        height: gridHeight + PAD * 2,
        background: 'rgba(20, 50, 90, 0.4)',
        backdropFilter: 'blur(6px)',
        border: '2px solid rgba(255,255,255,0.18)',
        padding: PAD,
      }}
    >
      <div className="relative" style={{ width: gridWidth, height: gridHeight }}>
        {grid.map((row, r) =>
          row.map((cell, c) => {
            if (!cell.active) return null;

            const x = (c - minCol) * (CELL_SIZE + CELL_GAP);
            const y = (r - minRow) * (CELL_SIZE + CELL_GAP);
            const revealed = isCellRevealed(cell);
            const cellKey = `${r}-${c}`;
            const isAnimating = animatingCells.has(cellKey);
            const isCorrectFlash = isAnimating && flashType === 'correct';

            return (
              <div
                key={cellKey}
                className="absolute flex items-center justify-center font-black rounded-lg transition-all duration-300"
                style={{
                  left: x,
                  top: y,
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  fontSize: 20,
                  background: revealed
                    ? isCorrectFlash
                      ? 'linear-gradient(135deg, #86efac, #4ade80)'
                      : 'linear-gradient(135deg, #FFFDE7 0%, #F5E6C8 100%)'
                    : 'rgba(15, 28, 50, 0.75)',
                  color: revealed ? '#3D1A06' : 'transparent',
                  border: revealed
                    ? isCorrectFlash
                      ? '2px solid #22c55e'
                      : '2px solid rgba(180,140,80,0.7)'
                    : '2px solid rgba(255,255,255,0.1)',
                  boxShadow: revealed
                    ? isCorrectFlash
                      ? '0 0 18px rgba(74,222,128,0.7)'
                      : '0 3px 8px rgba(0,0,0,0.25), inset 0 1px 3px rgba(255,255,255,0.6)'
                    : 'inset 0 2px 5px rgba(0,0,0,0.4)',
                  transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                {revealed ? cell.letter : ''}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
