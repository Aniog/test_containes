import { useState, useCallback } from 'react';
import { COLORS, checkWin, getConflicts } from '../../data/levels';

function CatCell({ state, color, isConflict, onClick, cellPx }) {
  const colorDef = COLORS[color];
  const bg = isConflict ? '#E05555' : colorDef.bg;
  const borderColor = isConflict ? '#B03030' : colorDef.border;

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-xl transition-transform duration-100 active:scale-90 select-none"
      style={{
        width: cellPx,
        height: cellPx,
        backgroundColor: bg,
        border: `2.5px solid ${borderColor}`,
        boxShadow: state === 'cat'
          ? '0 3px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)'
          : '0 1px 4px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.25)',
        padding: 0,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top highlight */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
        background: 'rgba(255,255,255,0.18)', borderRadius: '10px 10px 0 0', pointerEvents: 'none'
      }} />

      {state === 'x' && (
        <span style={{
          fontSize: cellPx * 0.42,
          fontWeight: 900,
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 1,
          textShadow: '0 1px 3px rgba(0,0,0,0.2)',
          userSelect: 'none',
        }}>✕</span>
      )}
      {state === 'cat' && (
        <span style={{ fontSize: cellPx * 0.52, lineHeight: 1, userSelect: 'none' }}>🐱</span>
      )}
    </button>
  );
}

export default function GameBoard({ level, onWin, onBack }) {
  const { size, colorMap, colors, solution } = level;

  const initCells = () => Array.from({ length: size }, () => Array(size).fill('empty'));

  const [cellStates, setCellStates] = useState(initCells);
  const [showWin, setShowWin] = useState(false);
  const [steps, setSteps] = useState(0);
  const [hintCount, setHintCount] = useState(3);

  const catCount = cellStates.flat().filter(s => s === 'cat').length;
  const conflicts = getConflicts(cellStates, size);

  // Responsive cell size: fit grid in ~340px max width
  const maxGridPx = 340;
  const gap = 4;
  const cellPx = Math.floor((maxGridPx - gap * (size - 1)) / size);

  const handleCellClick = useCallback((row, col) => {
    if (showWin) return;
    setCellStates(prev => {
      const next = prev.map(r => [...r]);
      const cur = next[row][col];
      if (cur === 'empty') next[row][col] = 'x';
      else if (cur === 'x') next[row][col] = 'cat';
      else next[row][col] = 'empty';

      if (checkWin(next, colorMap, colors, size)) {
        setTimeout(() => { setShowWin(true); onWin && onWin(); }, 350);
      }
      return next;
    });
    setSteps(s => s + 1);
  }, [showWin, colorMap, colors, size, onWin]);

  const handleReset = () => {
    setCellStates(initCells());
    setShowWin(false);
    setSteps(0);
  };

  const handleHint = () => {
    if (hintCount <= 0) return;
    const placedColors = new Set();
    for (let r = 0; r < size; r++)
      for (let c = 0; c < size; c++)
        if (cellStates[r][c] === 'cat') placedColors.add(colorMap[r][c]);

    const hint = solution.find(([r, c]) => !placedColors.has(colorMap[r][c]));
    if (hint) {
      const [hr, hc] = hint;
      setCellStates(prev => {
        const next = prev.map(r => [...r]);
        next[hr][hc] = 'cat';
        return next;
      });
      setHintCount(h => h - 1);
    }
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen w-full pb-10"
      style={{ backgroundColor: '#F0EBE3', fontFamily: "'PingFang SC','Hiragino Sans GB',sans-serif" }}
    >
      {/* Header */}
      <div className="w-full max-w-sm flex items-center justify-between px-5 pt-10 pb-3">
        <button
          onClick={onBack}
          className="w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: '#7A5C4A', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        >
          ←
        </button>
        <h1 className="text-2xl font-bold tracking-wide" style={{ color: '#5A3A2A' }}>
          第 <span style={{ color: '#C85070' }}>{level.id}</span> 关
        </h1>
        <button
          className="w-11 h-11 rounded-full flex items-center justify-center text-lg"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: '#7A5C4A', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        >
          ⚙️
        </button>
      </div>

      {/* Progress & Fish */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
        >
          <span className="text-xl">🐱</span>
          <span className="font-bold text-lg" style={{ color: '#4A9A4A' }}>{catCount}</span>
          <span className="font-semibold text-lg" style={{ color: '#9A7A6A' }}>/{colors.length}</span>
        </div>
        <div
          className="flex items-center gap-1 px-4 py-2 rounded-full"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
        >
          {Array.from({ length: 3 }, (_, i) => (
            <span key={i} className="text-xl">{i < hintCount ? '🐟' : '🩶'}</span>
          ))}
        </div>
      </div>

      {/* Rules */}
      <div className="flex gap-2 mb-5 px-4 w-full max-w-sm">
        {['一种颜色一只猫', '同行同列各一只', '猫咪不能接触'].map((rule, i) => (
          <div
            key={i}
            className="flex-1 py-2 px-1 rounded-xl text-xs font-medium text-center leading-tight"
            style={{
              backgroundColor: 'rgba(255,255,255,0.75)',
              color: '#7A5C4A',
              border: '1px solid rgba(200,175,155,0.5)',
            }}
          >
            {rule}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div
        className="rounded-2xl p-3"
        style={{
          backgroundColor: 'rgba(255,255,255,0.65)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${size}, ${cellPx}px)`,
            gap: `${gap}px`,
          }}
        >
          {cellStates.map((row, r) =>
            row.map((state, c) => (
              <CatCell
                key={`${r}-${c}`}
                state={state}
                color={colorMap[r][c]}
                isConflict={conflicts.has(`${r},${c}`)}
                onClick={() => handleCellClick(r, c)}
                cellPx={cellPx}
              />
            ))
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-center gap-10 mt-8">
        <div className="relative">
          <button
            onClick={handleReset}
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
            style={{ backgroundColor: 'white', boxShadow: '0 4px 18px rgba(0,0,0,0.13)', border: 'none' }}
            title="重置"
          >
            🐱
          </button>
          <div
            className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ backgroundColor: '#E84444' }}
          >
            {steps}
          </div>
        </div>

        <div className="relative">
          <button
            onClick={handleHint}
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 4px 18px rgba(0,0,0,0.13)',
              border: 'none',
              opacity: hintCount > 0 ? 1 : 0.45,
            }}
            title="提示"
          >
            💡
          </button>
          <div
            className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ backgroundColor: '#4CAF50' }}
          >
            +
          </div>
        </div>
      </div>

      {/* Win overlay */}
      {showWin && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
        >
          <div
            className="rounded-3xl p-8 flex flex-col items-center gap-4 mx-6"
            style={{ backgroundColor: '#F0EBE3', boxShadow: '0 10px 50px rgba(0,0,0,0.3)', minWidth: 280 }}
          >
            <div className="text-6xl animate-bounce">🎉</div>
            <h2 className="text-2xl font-bold" style={{ color: '#5A3A2A' }}>恭喜过关！</h2>
            <p className="text-sm" style={{ color: '#9A7A6A' }}>第 {level.id} 关 · {steps} 步完成</p>
            <div className="flex gap-3 mt-2 w-full">
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-2xl font-bold text-white text-base"
                style={{ backgroundColor: '#E8748A', border: 'none' }}
              >
                再玩一次
              </button>
              <button
                onClick={onBack}
                className="flex-1 py-3 rounded-2xl font-bold text-base"
                style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#5A3A2A', border: 'none' }}
              >
                选关
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
