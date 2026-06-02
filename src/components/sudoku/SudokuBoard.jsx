import React from 'react';

const SudokuBoard = ({
  board,
  puzzle,
  solution,
  selectedCell,
  onCellClick,
  conflicts,
  notes,
  noteMode,
  completed,
}) => {
  const getBoxIndex = (row, col) => Math.floor(row / 3) * 3 + Math.floor(col / 3);

  const getCellClass = (row, col) => {
    const key = `${row}-${col}`;
    const isSelected = selectedCell && selectedCell[0] === row && selectedCell[1] === col;
    const isOriginal = puzzle[row][col] !== 0;
    const isConflict = conflicts.has(key);
    const val = board[row][col];
    const selectedVal = selectedCell ? board[selectedCell[0]][selectedCell[1]] : 0;
    const isSameNumber = val !== 0 && selectedVal !== 0 && val === selectedVal;
    const isRelated =
      selectedCell &&
      (selectedCell[0] === row ||
        selectedCell[1] === col ||
        getBoxIndex(selectedCell[0], selectedCell[1]) === getBoxIndex(row, col));

    let base =
      'relative flex items-center justify-center cursor-pointer select-none transition-colors duration-100 ';

    // Border styling for 3x3 boxes
    base += 'border border-gray-300 ';

    if (completed) {
      base += 'bg-emerald-50 ';
    } else if (isSelected) {
      base += 'bg-blue-400 ';
    } else if (isConflict) {
      base += 'bg-red-100 ';
    } else if (isSameNumber) {
      base += 'bg-blue-100 ';
    } else if (isRelated) {
      base += 'bg-blue-50 ';
    } else {
      base += 'bg-white hover:bg-blue-50 ';
    }

    return base;
  };

  const getNumberClass = (row, col) => {
    const isOriginal = puzzle[row][col] !== 0;
    const key = `${row}-${col}`;
    const isConflict = conflicts.has(key);
    const isSelected = selectedCell && selectedCell[0] === row && selectedCell[1] === col;

    if (completed) return 'text-emerald-700 font-bold';
    if (isOriginal) return 'text-gray-800 font-bold';
    if (isConflict) return 'text-red-500 font-semibold';
    if (isSelected) return 'text-white font-semibold';
    return 'text-blue-600 font-semibold';
  };

  const getBorderClass = (row, col) => {
    let cls = '';
    if (col % 3 === 0 && col !== 0) cls += ' border-l-2 border-l-gray-700';
    if (row % 3 === 0 && row !== 0) cls += ' border-t-2 border-t-gray-700';
    return cls;
  };

  const cellNotes = (row, col) => notes[`${row}-${col}`] || new Set();

  // Responsive cell size
  const cellSize = typeof window !== 'undefined' && window.innerWidth < 480 ? 36 : 52;

  return (
    <div className="inline-block border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg">
      {board.map((rowArr, row) => (
        <div key={row} className="flex">
          {rowArr.map((val, col) => (
            <div
              key={col}
              className={`${getCellClass(row, col)}${getBorderClass(row, col)}`}
              style={{ width: cellSize, height: cellSize }}
              onClick={() => !completed && onCellClick(row, col)}
            >
              {val !== 0 ? (
                <span className={`text-lg sm:text-xl leading-none ${getNumberClass(row, col)}`}>
                  {val}
                </span>
              ) : noteMode || cellNotes(row, col).size > 0 ? (
                <div className="grid grid-cols-3 gap-0 w-full h-full p-0.5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <span
                      key={n}
                      className={`flex items-center justify-center text-[8px] leading-none font-medium ${
                        cellNotes(row, col).has(n) ? 'text-gray-500' : 'text-transparent'
                      }`}
                    >
                      {n}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuBoard;
