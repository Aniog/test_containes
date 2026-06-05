import React from "react";

const GameGrid = ({ gridMap, rows, cols, revealedWords, hintCells }) => {
  const cellSize = Math.min(44, Math.floor(320 / Math.max(rows, cols)));

  return (
    <div
      className="relative mx-auto"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        gap: "3px",
        width: `${cols * (cellSize + 3)}px`,
      }}
    >
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => {
          const key = `${r},${c}`;
          const cell = gridMap[key];

          if (!cell) {
            return (
              <div
                key={key}
                style={{ width: cellSize, height: cellSize }}
                className="rounded-sm bg-transparent"
              />
            );
          }

          const isRevealed = revealedWords && cell.wordIndices.some(
            (wi) => revealedWords.has(wi)
          );
          const isHint = hintCells && hintCells.has(key);

          return (
            <div
              key={key}
              style={{ width: cellSize, height: cellSize }}
              className={`
                flex items-center justify-center rounded-md font-bold text-lg
                border-2 transition-all duration-500
                ${isRevealed
                  ? "bg-amber-100 border-amber-400 text-amber-900 shadow-md scale-105"
                  : isHint
                  ? "bg-yellow-200 border-yellow-500 text-yellow-800 animate-pulse"
                  : "bg-white/90 border-gray-300 text-transparent shadow-sm"
                }
              `}
            >
              {(isRevealed || isHint) ? cell.letter : ""}
            </div>
          );
        })
      )}
    </div>
  );
};

export default GameGrid;
