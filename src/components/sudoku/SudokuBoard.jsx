import { getHighlightType } from '@/lib/sudoku';

const SudokuBoard = ({ board, puzzle, solution, selected, onSelect, notes, errors }) => {
  const getCellClass = (row, col) => {
    const highlight = getHighlightType(selected?.row, selected?.col, row, col, board);
    const isSelected = highlight === 'selected';
    const isRelated = highlight === 'related';
    const isSameNumber = highlight === 'same-number';
    const isError = errors?.has(`${row}-${col}`);
    const isGiven = puzzle[row][col] !== 0;

    // Border classes — thick borders at box boundaries
    const borderR = col === 8
      ? 'border-r-[2px] border-r-gray-800'
      : (col + 1) % 3 === 0
        ? 'border-r-[2px] border-r-gray-700'
        : 'border-r border-r-gray-300';

    const borderB = row === 8
      ? 'border-b-[2px] border-b-gray-800'
      : (row + 1) % 3 === 0
        ? 'border-b-[2px] border-b-gray-700'
        : 'border-b border-b-gray-300';

    const borderL = col === 0 ? 'border-l-[2px] border-l-gray-800' : '';
    const borderT = row === 0 ? 'border-t-[2px] border-t-gray-800' : '';

    let bg = 'bg-white';
    if (isSelected) bg = 'bg-blue-500';
    else if (isSameNumber) bg = 'bg-blue-100';
    else if (isRelated) bg = 'bg-gray-100';

    const textColor = isSelected
      ? 'text-white'
      : isError
        ? 'text-red-500'
        : isGiven
          ? 'text-gray-900'
          : 'text-blue-600';

    return { bg, borderR, borderB, borderL, borderT, isSelected, isGiven, isError, textColor };
  };

  const getCellNotes = (row, col) => notes?.[`${row}-${col}`] || new Set();

  return (
    <div className="w-full select-none" style={{ aspectRatio: '1/1' }}>
      {Array.from({ length: 9 }, (_, row) => (
        <div key={row} className="flex" style={{ height: '11.11%' }}>
          {Array.from({ length: 9 }, (_, col) => {
            const { bg, borderR, borderB, borderL, borderT, isSelected, textColor } = getCellClass(row, col);
            const value = board[row][col];
            const cellNotes = getCellNotes(row, col);
            const hasNotes = cellNotes.size > 0 && value === 0;

            return (
              <div
                key={col}
                className={`flex-1 flex items-center justify-center cursor-pointer relative
                  ${bg} ${borderR} ${borderB} ${borderL} ${borderT}
                  transition-colors duration-75`}
                onClick={() => onSelect(row, col)}
              >
                {hasNotes ? (
                  <div className="grid grid-cols-3 w-full h-full p-[1px]">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                      <span
                        key={n}
                        className={`flex items-center justify-center leading-none font-medium
                          ${cellNotes.has(n)
                            ? (isSelected ? 'text-white' : 'text-blue-500')
                            : 'text-transparent'}`}
                        style={{ fontSize: 'clamp(6px, 1.2vw, 10px)' }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                ) : value !== 0 ? (
                  <span
                    className={`font-semibold leading-none select-none ${textColor}`}
                    style={{ fontSize: 'clamp(14px, 4vw, 22px)' }}
                  >
                    {value}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SudokuBoard;
