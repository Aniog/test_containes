import { getHighlightType } from '@/lib/sudoku';

const SudokuBoard = ({ board, puzzle, solution, selected, onSelect, notes, errors }) => {
  const getCellStyle = (row, col) => {
    const highlight = getHighlightType(selected?.row, selected?.col, row, col, board);
    const isSelected = highlight === 'selected';
    const isRelated = highlight === 'related';
    const isSameNumber = highlight === 'same-number';
    const isError = errors?.has(`${row}-${col}`);
    const isGiven = puzzle[row][col] !== 0;

    let bg = 'bg-white';
    if (isSelected) bg = 'bg-blue-500';
    else if (isSameNumber) bg = 'bg-blue-200';
    else if (isRelated) bg = 'bg-slate-100';

    const borderRight = (col + 1) % 3 === 0 && col !== 8 ? 'border-r-2 border-r-slate-700' : 'border-r border-r-slate-300';
    const borderBottom = (row + 1) % 3 === 0 && row !== 8 ? 'border-b-2 border-b-slate-700' : 'border-b border-b-slate-300';
    const borderLeft = col === 0 ? 'border-l-2 border-l-slate-700' : '';
    const borderTop = row === 0 ? 'border-t-2 border-t-slate-700' : '';
    const extraBorderRight = col === 8 ? 'border-r-2 border-r-slate-700' : '';
    const extraBorderBottom = row === 8 ? 'border-b-2 border-b-slate-700' : '';

    return { bg, borderRight, borderBottom, borderLeft, borderTop, extraBorderRight, extraBorderBottom, isSelected, isGiven, isError };
  };

  const getCellNotes = (row, col) => notes?.[`${row}-${col}`] || new Set();

  return (
    <div className="w-full aspect-square select-none">
      {Array.from({ length: 9 }, (_, row) => (
        <div key={row} className="flex">
          {Array.from({ length: 9 }, (_, col) => {
            const { bg, borderRight, borderBottom, borderLeft, borderTop, extraBorderRight, extraBorderBottom, isSelected, isGiven, isError } = getCellStyle(row, col);
            const value = board[row][col];
            const cellNotes = getCellNotes(row, col);
            const hasNotes = cellNotes.size > 0 && value === 0;

            return (
              <div
                key={col}
                className={`flex-1 aspect-square flex items-center justify-center cursor-pointer relative
                  ${bg} ${borderRight} ${borderBottom} ${borderLeft} ${borderTop} ${extraBorderRight} ${extraBorderBottom}
                  transition-colors duration-100`}
                onClick={() => onSelect(row, col)}
              >
                {hasNotes ? (
                  <div className="grid grid-cols-3 w-full h-full p-px">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                      <span
                        key={n}
                        className={`flex items-center justify-center text-[8px] leading-none font-medium
                          ${cellNotes.has(n) ? (isSelected ? 'text-white' : 'text-blue-600') : 'text-transparent'}`}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                ) : value !== 0 ? (
                  <span
                    className={`text-lg font-semibold leading-none
                      ${isSelected ? 'text-white' :
                        isError ? 'text-red-500' :
                        isGiven ? 'text-slate-800' :
                        'text-blue-600'}`}
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
