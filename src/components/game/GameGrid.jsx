import GridCell from './GridCell';

const GameGrid = ({ level, cellStates, errorCells, onCellClick }) => {
  const { grid, size } = level;
  const gap = size <= 6 ? 'gap-1.5' : size <= 7 ? 'gap-1' : 'gap-1';

  return (
    <div
      className={`grid ${gap} p-3 rounded-2xl`}
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        backgroundColor: 'rgba(255,255,255,0.6)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      {grid.map((row, r) =>
        row.map((colorIdx, c) => {
          const key = `${r},${c}`;
          const state = cellStates[key] || 'empty';
          const isError = errorCells.has(key);
          return (
            <GridCell
              key={key}
              row={r}
              col={c}
              colorIdx={colorIdx}
              state={state}
              isError={isError}
              onClick={onCellClick}
              size={size}
            />
          );
        })
      )}
    </div>
  );
};

export default GameGrid;
