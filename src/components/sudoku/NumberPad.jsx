import React from 'react';
import { Pencil, Delete } from 'lucide-react';

const NumberPad = ({ onNumber, onDelete, onToggleNote, noteMode, board, selectedCell }) => {
  // Count how many times each number appears on the board
  const counts = Array(10).fill(0);
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] > 0) counts[board[r][c]]++;
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Number buttons */}
      <div className="grid grid-cols-9 gap-1 sm:gap-1.5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
          const full = counts[n] >= 9;
          return (
            <button
              key={n}
              onClick={() => onNumber(n)}
              disabled={full}
              className={`w-9 h-9 sm:w-12 sm:h-12 rounded-lg text-lg sm:text-xl font-bold transition-all duration-150 shadow-sm
                ${full
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : noteMode
                  ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 active:scale-95 border-2 border-indigo-300'
                  : 'bg-white text-gray-800 hover:bg-blue-50 active:scale-95 border border-gray-200 hover:border-blue-300'
                }`}
            >
              {n}
            </button>
          );
        })}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-1">
        <button
          onClick={onToggleNote}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-150 shadow-sm
            ${noteMode
              ? 'bg-indigo-500 text-white shadow-indigo-200'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
        >
          <Pencil size={15} />
          <span>笔记</span>
          {noteMode && <span className="text-xs bg-white/30 px-1.5 py-0.5 rounded">开</span>}
        </button>

        <button
          onClick={onDelete}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm bg-white text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all duration-150 shadow-sm"
        >
          <Delete size={15} />
          <span>删除</span>
        </button>
      </div>
    </div>
  );
};

export default NumberPad;
