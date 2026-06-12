import { getHighlightType } from '@/lib/sudoku';

const SudokuBoard = ({ board, puzzle, solution, selected, onSelect, notes, errors }) => {
  const getCellClass = (row, col) => {
    const highlight = getHighlightType(selected?.row, selected?.col, row, col, board);
    const isSelected = highlight === 'selected';
    const isRelated = highlight === 'related';
    const isSameNumber = highlight === 'same-number';
    const isError = errors?.has(`${row}-${col}`);
    const isGiven = puzzle[row][col] !== 0;

    // Thick borders at 3×3 box boundaries, thin within
    const borderR = col === 8
      ? 'border-r-[2px]'
      : (col + 1) % 3 === 0
        ? 'border-r-[2px]'
        : 'border-r border-r-[#c8a870]';

    const borderB = row === 8
      ? 'border-b-[2px]'
      : (row + 1) % 3 === 0
        ? 'border-b-[2px]'
        : 'border-b border-b-[#c8a870]';

    const borderL = col === 0 ? 'border-l-[2px]' : '';
    const borderT = row === 0 ? 'border-t-[2px]' : '';

    let bg = 'bg-[#fdf5e4]';
    if (isSelected) bg = 'bg-[#f5a623]';
    else if (isSameNumber) bg = 'bg-[#fde9a0]';
    else if (isRelated) bg = 'bg-[#f5e8cc]';

    const textColor = isSelected
      ? 'text-white'
      : isError
        ? 'text-red-600'
        : isGiven
          ? 'text-[#3d2b1a]'
          : 'text-[#1a6fa4]';

    return { bg, borderR, borderB, borderL, borderT, isSelected, isGiven, isError, textColor };
  };

  const getCellNotes = (row, col) => notes?.[`${row}-${col}`] || new Set();

  return (
    <div
      className="w-full select-none border-[2px] border-[#8b6340]"
      style={{ aspectRatio: '1/1', backgroundColor: '#8b6340' }}
    >
      {Array.from({ length: 9 }, (_, row) => (
        <div key={row} className="flex" style={{ height: '11.11%' }}>
          {Array.from({ length: 9 }, (_, col) => {
            const { bg, borderR, borderB, borderL, borderT, isSelected, textColor } = getCellClass(row, col);
            const value = board[row][col];
            const cellNotes = getCellNotes(row, col);
            const hasNotes = cellNotes.size > 0 && value === 0;

            // Use brown for box borders, lighter for inner borders
            const boxBorderColor = 'border-[#8b6340]';
            const innerBorderColor = '';

            return (
              <div
                key={col}
                className={`flex-1 flex items-center justify-center cursor-pointer relative
                  ${bg} ${borderR} ${borderB} ${borderL} ${borderT} ${boxBorderColor}
                  transition-colors duration-75`}
                style={{
                  borderColor: undefined,
                  borderRightColor: col === 8 || (col + 1) % 3 === 0 ? '#8b6340' : '#c8a870',
                  borderBottomColor: row === 8 || (row + 1) % 3 === 0 ? '#8b6340' : '#c8a870',
                  borderLeftColor: col === 0 ? '#8b6340' : undefined,
                  borderTopColor: row === 0 ? '#8b6340' : undefined,
                }}
                onClick={() => onSelect(row, col)}
              >
                {hasNotes ? (
                  <div className="grid grid-cols-3 w-full h-full p-[1px]">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                      <span
                        key={n}
                        className={`flex items-center justify-center leading-none font-medium
                          ${cellNotes.has(n)
                            ? (isSelected ? 'text-white' : 'text-[#1a6fa4]')
                            : 'text-transparent'}`}
                        style={{ fontSize: 'clamp(6px, 1.2vw, 9px)' }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                ) : value !== 0 ? (
                  <span
                    className={`font-bold leading-none select-none ${textColor}`}
                    style={{ fontSize: 'clamp(15px, 4.2vw, 24px)' }}
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
