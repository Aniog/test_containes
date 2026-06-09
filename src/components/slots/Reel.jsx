import { useState, useEffect, useRef } from 'react';
import { getRandomSymbol, getSymbol } from './symbols';

const REEL_ROWS = 3;
const SYMBOL_HEIGHT = 90;
const SPIN_STRIP_LENGTH = 24;

const generateSpinStrip = (finalSymbolIds) => {
  const randomPart = Array.from({ length: SPIN_STRIP_LENGTH }, () => getRandomSymbol());
  return [...randomPart, ...finalSymbolIds];
};

const SymbolCell = ({ symbolId, isWinning, winColor }) => {
  const sym = getSymbol(symbolId) || { emoji: '❓', color: '#fff' };

  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        height: `${SYMBOL_HEIGHT}px`,
        width: '100%',
        background: isWinning
          ? `radial-gradient(circle, ${winColor}44 0%, transparent 70%)`
          : 'transparent',
        transition: 'background 0.2s',
      }}
    >
      {isWinning && (
        <div
          className="absolute inset-1 rounded-lg pointer-events-none"
          style={{
            border: `2px solid ${winColor}`,
            boxShadow: `0 0 12px ${winColor}88, inset 0 0 12px ${winColor}22`,
            animation: 'winLineFlash 0.4s ease-in-out infinite',
          }}
        />
      )}
      <span
        style={{
          fontSize: '2.6rem',
          lineHeight: 1,
          filter: isWinning
            ? `drop-shadow(0 0 8px ${sym.color}) drop-shadow(0 0 16px ${sym.color})`
            : `drop-shadow(0 2px 4px rgba(0,0,0,0.6))`,
          transform: isWinning ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.2s, filter 0.2s',
          display: 'block',
          userSelect: 'none',
        }}
      >
        {sym.emoji}
      </span>
    </div>
  );
};

const Reel = ({ finalSymbols, isSpinning, spinDelay, onStop, winningCells }) => {
  const [visibleIds, setVisibleIds] = useState(() =>
    Array.from({ length: REEL_ROWS }, () => getRandomSymbol())
  );
  const [spinStrip, setSpinStrip] = useState([]);
  const [offset, setOffset] = useState(0);
  const [phase, setPhase] = useState('idle');
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const durationRef = useRef(0);

  useEffect(() => {
    if (!isSpinning) return;

    const strip = generateSpinStrip(finalSymbols);
    setSpinStrip(strip);
    setOffset(0);
    setPhase('idle');

    const timer = setTimeout(() => {
      setPhase('spinning');
      durationRef.current = 1000 + spinDelay * 250;
      startTimeRef.current = performance.now();
    }, spinDelay * 120);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isSpinning, spinDelay, finalSymbols]);

  useEffect(() => {
    if (phase !== 'spinning') return;

    const totalSymbols = spinStrip.length;
    const maxOffset = (totalSymbols - REEL_ROWS) * SYMBOL_HEIGHT;

    const animate = (now) => {
      const elapsed = now - startTimeRef.current;
      const t = Math.min(elapsed / durationRef.current, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const rawOffset = eased * maxOffset;
      const snapped = t >= 0.95
        ? Math.round(rawOffset / SYMBOL_HEIGHT) * SYMBOL_HEIGHT
        : rawOffset;

      setOffset(snapped);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Reset offset to 0 and switch to display symbols
        setOffset(0);
        setPhase('stopped');
        setVisibleIds([...finalSymbols]);
        onStop?.();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [phase, spinStrip, finalSymbols, onStop]);

  const isSpinPhase = phase === 'spinning';
  const symbolsToRender = isSpinPhase ? spinStrip : visibleIds;

  return (
    <div
      className="relative overflow-hidden flex-1"
      style={{
        height: `${REEL_ROWS * SYMBOL_HEIGHT}px`,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(10,5,25,0.95) 50%, rgba(0,0,0,0.5) 100%)',
        borderLeft: '1px solid rgba(124,58,237,0.3)',
        borderRight: '1px solid rgba(124,58,237,0.3)',
      }}
    >
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{ height: 28, background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, transparent 100%)' }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{ height: 28, background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)' }} />

      {/* Symbol strip */}
      <div
        style={{
          transform: `translateY(-${offset}px)`,
          willChange: 'transform',
        }}
      >
        {symbolsToRender.map((id, idx) => {
          const isWinning = phase === 'stopped' && winningCells?.some(c => c.row === idx);
          const winColor = isWinning
            ? (winningCells?.find(c => c.row === idx)?.color || '#f5a623')
            : null;
          return (
            <SymbolCell
              key={idx}
              symbolId={id}
              isWinning={isWinning}
              winColor={winColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reel;


