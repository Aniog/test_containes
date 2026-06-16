import { useState, useCallback, useEffect } from 'react';
import { COLORS, GRID_COLORS, NUM_COLORS } from '../gameData';
import { computeBlockedCells, isValidPlacement, checkWin } from '../gameLogic';
import GridCell from './GridCell';
import CatFace from './CatFace';

const GRID_SIZE = 8;

// Fish icon component
const FishIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M28 16 C24 10 18 8 12 10 L6 16 L12 22 C18 24 24 22 28 16Z" fill="#f0a830" />
    <path d="M6 16 L2 10 L2 22 Z" fill="#f0a830" />
    <circle cx="22" cy="14" r="1.5" fill="#3d2b1f" />
    <path d="M14 12 C16 10 20 10 22 12" stroke="#d08020" strokeWidth="1" fill="none" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const WinOverlay = ({ onRestart }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}>
    <div
      className="rounded-3xl p-8 text-center mx-6"
      style={{ backgroundColor: '#f0ebe4', maxWidth: 320, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
    >
      <div className="text-6xl mb-3">🎉</div>
      <h2 className="text-2xl font-bold mb-1" style={{ color: '#3d2b1f' }}>恭喜通关！</h2>
      <p className="text-sm mb-5" style={{ color: '#9a7a6a' }}>第 31 关完成！</p>
      <div className="flex justify-center gap-2 mb-6">
        {[0, 1, 2].map(i => <FishIcon key={i} size={34} />)}
      </div>
      <button
        onClick={onRestart}
        className="px-10 py-3 rounded-full text-white font-bold text-base"
        style={{ backgroundColor: '#e8748a', boxShadow: '0 4px 12px rgba(232,116,138,0.4)' }}
      >
        再玩一次
      </button>
    </div>
  </div>
);

const CatGame = () => {
  const [cats, setCats] = useState([]);
  const [cellStates, setCellStates] = useState(
    () => Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill('empty'))
  );
  const [errorCells, setErrorCells] = useState(new Set());
  const [won, setWon] = useState(false);
  const [hints, setHints] = useState(3);

  const updateCellStates = useCallback((newCats) => {
    const states = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill('empty'));
    const errors = new Set();

    newCats.forEach(({ row, col }) => {
      states[row][col] = 'cat';
    });

    const blocked = computeBlockedCells(newCats, GRID_COLORS, GRID_SIZE);

    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (states[r][c] !== 'cat' && blocked[r][c]) {
          states[r][c] = 'x';
        }
      }
    }

    newCats.forEach((cat, idx) => {
      const otherCats = newCats.filter((_, i) => i !== idx);
      if (!isValidPlacement(cat.row, cat.col, otherCats, GRID_COLORS)) {
        errors.add(`${cat.row}-${cat.col}`);
      }
    });

    setCellStates(states);
    setErrorCells(errors);
  }, []);

  const handleCellClick = useCallback((row, col) => {
    if (won) return;

    const catIndex = cats.findIndex(c => c.row === row && c.col === col);

    if (catIndex !== -1) {
      const newCats = cats.filter((_, i) => i !== catIndex);
      setCats(newCats);
      updateCellStates(newCats);
      setWon(false);
    } else if (cellStates[row][col] === 'x') {
      return;
    } else {
      const color = GRID_COLORS[row][col];
      const newCats = [...cats, { row, col, color }];
      setCats(newCats);
      updateCellStates(newCats);
      if (checkWin(newCats, GRID_COLORS, NUM_COLORS)) {
        setTimeout(() => setWon(true), 400);
      }
    }
  }, [cats, cellStates, won, updateCellStates]);

  const handleReset = useCallback(() => {
    setCats([]);
    setCellStates(Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill('empty')));
    setErrorCells(new Set());
    setWon(false);
  }, []);

  const handleHint = useCallback(() => {
    if (hints <= 0) return;
    const placedColors = new Set(cats.map(c => c.color));
    const unplacedColors = Array.from({ length: NUM_COLORS }, (_, i) => i).filter(c => !placedColors.has(c));
    if (unplacedColors.length === 0) return;

    const targetColor = unplacedColors[0];
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (GRID_COLORS[r][c] === targetColor && isValidPlacement(r, c, cats, GRID_COLORS)) {
          const newCats = [...cats, { row: r, col: c, color: targetColor }];
          setCats(newCats);
          updateCellStates(newCats);
          setHints(h => h - 1);
          if (checkWin(newCats, GRID_COLORS, NUM_COLORS)) {
            setTimeout(() => setWon(true), 400);
          }
          return;
        }
      }
    }
  }, [cats, hints, updateCellStates]);

  const catsPlaced = cats.length;
  const remaining = Math.max(0, NUM_COLORS - catsPlaced);

  return (
    <div
      className="min-h-screen flex flex-col items-center select-none"
      style={{ backgroundColor: '#f0ebe4' }}
    >
      {/* Header */}
      <div className="w-full max-w-sm flex items-center justify-between px-5 pt-10 pb-3">
        <button
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'white', color: '#8a7060', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
          onClick={handleReset}
        >
          <BackIcon />
        </button>
        <h1 className="text-2xl font-bold tracking-wide" style={{ color: '#3d2b1f' }}>
          第 <span className="font-extrabold">31</span> 关
        </h1>
        <button
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'white', color: '#8a7060', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Score bar */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{ backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}
        >
          <CatFace colorId={5} size="small" />
          <span className="font-bold text-lg" style={{ color: '#7cc87a' }}>{catsPlaced}</span>
          <span className="font-semibold text-lg" style={{ color: '#9a7a6a' }}>/{NUM_COLORS}</span>
        </div>
        <div
          className="flex items-center gap-1 px-4 py-2 rounded-full"
          style={{ backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}
        >
          {[0, 1, 2].map(i => <FishIcon key={i} size={24} />)}
        </div>
      </div>

      {/* Rules */}
      <div
        className="w-full max-w-sm mx-4 mb-3 px-3 py-2.5 rounded-2xl flex items-center justify-around"
        style={{ backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
      >
        {['一种颜色一只猫', '同行同列各一只', '猫咪不能接触'].map((rule, i) => (
          <span key={i} className="text-xs font-medium" style={{ color: '#9a7a6a' }}>
            {rule}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div
        className="w-full max-w-sm mx-4 p-2.5 rounded-3xl"
        style={{ backgroundColor: 'white', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
            gap: '3px',
          }}
        >
          {Array.from({ length: GRID_SIZE }, (_, row) =>
            Array.from({ length: GRID_SIZE }, (_, col) => {
              const colorId = GRID_COLORS[row][col];
              const state = cellStates[row][col];
              const isError = errorCells.has(`${row}-${col}`);
              return (
                <GridCell
                  key={`${row}-${col}`}
                  row={row}
                  col={col}
                  colorId={colorId}
                  state={state}
                  onClick={handleCellClick}
                  isError={isError}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Bottom toolbar */}
      <div className="flex items-center justify-center gap-14 mt-7 mb-8">
        <div className="relative">
          <button
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'white', boxShadow: '0 4px 18px rgba(0,0,0,0.12)' }}
            onClick={handleReset}
          >
            <CatFace colorId={0} size="normal" />
          </button>
          <div
            className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: '#ef4444', boxShadow: '0 2px 6px rgba(239,68,68,0.4)' }}
          >
            {remaining}
          </div>
        </div>

        <div className="relative">
          <button
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 4px 18px rgba(0,0,0,0.12)',
              opacity: hints > 0 ? 1 : 0.5,
            }}
            onClick={handleHint}
            disabled={hints <= 0}
          >
            💡
          </button>
          <div
            className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: '#22c55e', boxShadow: '0 2px 6px rgba(34,197,94,0.4)' }}
          >
            +
          </div>
        </div>
      </div>

      {won && <WinOverlay onRestart={handleReset} />}
    </div>
  );
};

export default CatGame;
