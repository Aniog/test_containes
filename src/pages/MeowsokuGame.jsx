import { useState, useCallback, useEffect } from 'react';
import { LEVELS, validatePlacement } from '../data/levels';
import GameGrid from '../components/game/GameGrid';
import WinModal from '../components/game/WinModal';
import SettingsModal from '../components/game/SettingsModal';

const RULES = ['一种颜色一只猫', '同行同列各一只', '猫咪不能接触'];

const MeowsokuGame = () => {
  const [levelIdx, setLevelIdx] = useState(0);
  const [cellStates, setCellStates] = useState({});
  const [errorCells, setErrorCells] = useState(new Set());
  const [won, setWon] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  const level = LEVELS[levelIdx];

  const getCats = (states) =>
    Object.entries(states)
      .filter(([, v]) => v === 'cat')
      .map(([key]) => key.split(',').map(Number));

  const checkWinState = (states, lvl) => {
    const cats = getCats(states);
    if (cats.length !== lvl.size) return false;
    const errors = validatePlacement(lvl.grid, cats);
    if (errors.size > 0) return false;
    const rows = new Set(cats.map(([r]) => r));
    const cols = new Set(cats.map(([, c]) => c));
    const colors = new Set(cats.map(([r, c]) => lvl.grid[r][c]));
    return rows.size === lvl.size && cols.size === lvl.size && colors.size === lvl.size;
  };

  const resetLevel = useCallback(() => {
    setCellStates({});
    setErrorCells(new Set());
    setWon(false);
    setMoves(0);
  }, []);

  useEffect(() => {
    resetLevel();
  }, [levelIdx, resetLevel]);

  const handleCellClick = useCallback(
    (row, col) => {
      if (won) return;
      const key = `${row},${col}`;

      setCellStates((prev) => {
        const current = prev[key] || 'empty';
        let next;
        if (current === 'empty') next = 'cat';
        else if (current === 'cat') next = 'x';
        else next = 'empty';

        const newStates = { ...prev };
        if (next === 'empty') delete newStates[key];
        else newStates[key] = next;

        const cats = getCats(newStates);
        const errors = validatePlacement(level.grid, cats);
        setErrorCells(errors);

        if (checkWinState(newStates, level)) {
          setTimeout(() => setWon(true), 300);
        }

        return newStates;
      });

      setMoves((m) => m + 1);
    },
    [won, level],
  );

  const catCount = getCats(cellStates).length;

  const handleNext = () => {
    setLevelIdx((i) => (i < LEVELS.length - 1 ? i + 1 : 0));
  };

  const handleHint = () => {
    const { solution } = level;
    const cats = getCats(cellStates);
    const placedKeys = new Set(cats.map(([r, c]) => `${r},${c}`));
    const remaining = solution.filter(([r, c]) => !placedKeys.has(`${r},${c}`));
    if (remaining.length === 0) return;
    const [hr, hc] = remaining[Math.floor(Math.random() * remaining.length)];
    const key = `${hr},${hc}`;
    setCellStates((prev) => {
      const newStates = { ...prev, [key]: 'cat' };
      const newCats = getCats(newStates);
      const errors = validatePlacement(level.grid, newCats);
      setErrorCells(errors);
      if (checkWinState(newStates, level)) {
        setTimeout(() => setWon(true), 300);
      }
      return newStates;
    });
    setMoves((m) => m + 1);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center pb-8"
      style={{ backgroundColor: '#f0ebe4', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header */}
      <div className="w-full max-w-md flex items-center justify-between px-5 pt-8 pb-3">
        <button
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all active:scale-90"
          style={{
            backgroundColor: 'rgba(255,255,255,0.75)',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: levelIdx > 0 ? 'pointer' : 'default',
            opacity: levelIdx > 0 ? 1 : 0.4,
          }}
          onClick={() => levelIdx > 0 && setLevelIdx((i) => i - 1)}
        >
          <span style={{ color: '#5a4030', fontSize: 18, fontWeight: 600 }}>←</span>
        </button>

        <h1 className="text-xl font-bold tracking-wide" style={{ color: '#3d2b1f' }}>
          第 <span style={{ fontSize: 26, fontWeight: 800 }}>{level.id}</span> 关
        </h1>

        <button
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all active:scale-90"
          style={{
            backgroundColor: 'rgba(255,255,255,0.75)',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
          onClick={() => setShowSettings(true)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5a4030"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            backgroundColor: 'rgba(255,255,255,0.75)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          <span className="text-lg">🐱</span>
          <span className="font-bold text-base" style={{ color: '#4db84d' }}>
            {catCount}
          </span>
          <span className="font-medium text-sm" style={{ color: '#9a7a6a' }}>
            /{level.size}
          </span>
        </div>
        <div
          className="flex items-center gap-0.5 px-4 py-2 rounded-full"
          style={{
            backgroundColor: 'rgba(255,255,255,0.75)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="text-lg"
              style={{ opacity: i < Math.min(3, catCount) ? 1 : 0.3 }}
            >
              🐟
            </span>
          ))}
        </div>
      </div>

      {/* Rules */}
      <div
        className="flex gap-2 px-4 py-2.5 rounded-2xl mx-4 mb-4 flex-wrap justify-center"
        style={{
          backgroundColor: 'rgba(255,255,255,0.6)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        {RULES.map((rule) => (
          <span
            key={rule}
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: '#5a4030' }}
          >
            {rule}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div className="px-3 w-full max-w-md flex justify-center">
        <GameGrid
          level={level}
          cellStates={cellStates}
          errorCells={errorCells}
          onCellClick={handleCellClick}
        />
      </div>

      {/* Level dots */}
      <div className="flex gap-2 mt-4">
        {LEVELS.map((l, i) => (
          <button
            key={l.id}
            onClick={() => setLevelIdx(i)}
            className="rounded-full transition-all"
            style={{
              width: i === levelIdx ? 24 : 8,
              height: 8,
              backgroundColor: i === levelIdx ? '#e8637a' : 'rgba(0,0,0,0.2)',
              border: 'none',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-center gap-10 mt-6">
        <button
          className="w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all active:scale-90 relative"
          style={{
            backgroundColor: '#fff',
            border: 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          }}
          onClick={resetLevel}
        >
          <span className="text-3xl">🐱</span>
          <span className="text-xs font-semibold mt-0.5" style={{ color: '#5a4030' }}>
            重置
          </span>
          {moves > 0 && (
            <span
              className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ backgroundColor: '#e8637a' }}
            >
              {moves > 99 ? '99+' : moves}
            </span>
          )}
        </button>

        <button
          className="w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all active:scale-90 relative"
          style={{
            backgroundColor: '#fff',
            border: 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          }}
          onClick={handleHint}
        >
          <span className="text-3xl">💡</span>
          <span className="text-xs font-semibold mt-0.5" style={{ color: '#5a4030' }}>
            提示
          </span>
          <span
            className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ backgroundColor: '#4db84d' }}
          >
            +
          </span>
        </button>
      </div>

      {/* Win Modal */}
      {won && (
        <WinModal level={level.id} onNext={handleNext} onReplay={resetLevel} />
      )}

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          onReset={() => {
            setLevelIdx(0);
            resetLevel();
            setShowSettings(false);
          }}
        />
      )}
    </div>
  );
};

export default MeowsokuGame;
