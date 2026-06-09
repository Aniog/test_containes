import { useState, useCallback, useEffect, useRef } from 'react';
import Reel from './Reel';
import Header from './Header';
import Controls from './Controls';
import { getRandomSymbol, checkWin, calculateWinAmount, PAYLINES } from './symbols';

const NUM_REELS = 5;
const NUM_ROWS = 3;
const INITIAL_BALANCE = 1000;
const BET_OPTIONS = [0.2, 0.4, 0.6, 0.8, 1.0, 2.0, 5.0, 10.0];

const generateInitialGrid = () =>
  Array.from({ length: NUM_REELS }, () =>
    Array.from({ length: NUM_ROWS }, () => getRandomSymbol())
  );

const PaylineIndicator = ({ numbers, side }) => (
  <div className="flex flex-col gap-1.5 justify-center" style={{ minWidth: 28 }}>
    {numbers.map((n, i) => (
      <div
        key={i}
        className="flex items-center justify-center rounded-lg font-bold text-xs"
        style={{
          width: 26,
          height: 26,
          background: 'linear-gradient(135deg, #2d1b69 0%, #1e1040 100%)',
          border: '1.5px solid #7c3aed',
          boxShadow: '0 0 6px rgba(124,58,237,0.4)',
          fontFamily: 'Orbitron, sans-serif',
          color: '#e9d5ff',
          fontSize: '0.6rem',
        }}
      >
        {n}
      </div>
    ))}
  </div>
);

const WinBanner = ({ wins, totalWin, onClose }) => {
  const isJackpot = wins.some(w => w.count === 5);
  const isBigWin = totalWin >= 50;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
      style={{ background: 'rgba(0,0,0,0.6)' }}
    >
      <div
        className="text-center px-8 py-6 rounded-2xl pointer-events-auto"
        style={{
          background: isJackpot
            ? 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 50%, #7c3aed 100%)'
            : 'linear-gradient(135deg, #1e1040 0%, #2d1b69 100%)',
          border: `3px solid ${isJackpot ? '#ffd700' : '#f5a623'}`,
          boxShadow: isJackpot
            ? '0 0 40px rgba(255,215,0,0.8), 0 0 80px rgba(255,215,0,0.4)'
            : '0 0 30px rgba(245,166,35,0.6)',
          animation: 'bigWinText 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        }}
        onClick={onClose}
      >
        {isJackpot && (
          <div
            className="text-2xl font-black mb-1 tracking-widest"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#ffd700',
              textShadow: '0 0 20px rgba(255,215,0,0.8)',
              animation: 'neonFlicker 1s infinite',
            }}
          >
            🎰 JACKPOT! 🎰
          </div>
        )}
        {isBigWin && !isJackpot && (
          <div
            className="text-xl font-black mb-1 tracking-widest"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#f5a623',
              textShadow: '0 0 15px rgba(245,166,35,0.8)',
            }}
          >
            🌟 BIG WIN! 🌟
          </div>
        )}
        {!isBigWin && !isJackpot && (
          <div
            className="text-lg font-bold mb-1"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#f5a623',
            }}
          >
            YOU WIN!
          </div>
        )}
        <div
          className="text-3xl font-black"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: '#ffffff',
            textShadow: '0 0 20px rgba(245,166,35,0.9)',
          }}
        >
          +{totalWin.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
        </div>
        <div
          className="text-xs mt-2 opacity-60"
          style={{ fontFamily: 'Orbitron, sans-serif', color: '#e9d5ff' }}
        >
          Tap to continue
        </div>
      </div>
    </div>
  );
};

const CoinParticles = ({ active }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!active) { setParticles([]); return; }
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 0.5}s`,
      duration: `${0.8 + Math.random() * 0.8}s`,
      emoji: ['🪙', '⭐', '💰', '✨'][Math.floor(Math.random() * 4)],
    }));
    setParticles(newParticles);
    const timer = setTimeout(() => setParticles([]), 2000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="coin-particle"
          style={{
            left: p.left,
            top: '-20px',
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </>
  );
};

const SlotMachine = () => {
  const [balance, setBalance] = useState(INITIAL_BALANCE);
  const [bet, setBet] = useState(1.0);
  const [grid, setGrid] = useState(generateInitialGrid);
  const [finalGrids, setFinalGrids] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wins, setWins] = useState([]);
  const [winAmount, setWinAmount] = useState(0);
  const [showWinBanner, setShowWinBanner] = useState(false);
  const [showCoins, setShowCoins] = useState(false);
  const [stoppedReels, setStoppedReels] = useState(0);
  const [spinKey, setSpinKey] = useState(0);
  const stoppedReelsRef = useRef(0);

  const handleSpin = useCallback(() => {
    if (isSpinning || balance < bet) return;

    setBalance(prev => prev - bet);
    setWins([]);
    setWinAmount(0);
    setShowWinBanner(false);
    setShowCoins(false);
    stoppedReelsRef.current = 0;
    setStoppedReels(0);

    // Generate final grid
    const newGrid = Array.from({ length: NUM_REELS }, () =>
      Array.from({ length: NUM_ROWS }, () => getRandomSymbol())
    );
    setFinalGrids(newGrid);
    setIsSpinning(true);
    setSpinKey(k => k + 1);
  }, [isSpinning, balance, bet]);

  const handleReelStop = useCallback(() => {
    stoppedReelsRef.current += 1;
    setStoppedReels(stoppedReelsRef.current);

    if (stoppedReelsRef.current === NUM_REELS) {
      setIsSpinning(false);
      // Evaluate wins after all reels stop
      setTimeout(() => {
        if (!finalGrids) return;
        const detectedWins = checkWin(finalGrids, 8);
        const total = calculateWinAmount(detectedWins, bet);
        setGrid(finalGrids);
        setWins(detectedWins);
        setWinAmount(total);
        if (total > 0) {
          setBalance(prev => prev + total);
          setShowWinBanner(true);
          setShowCoins(true);
          console.log('Win detected:', detectedWins, 'Total:', total);
        }
      }, 100);
    }
  }, [finalGrids, bet]);

  const handleMaxBet = () => {
    const maxAffordable = BET_OPTIONS.filter(b => b <= balance);
    if (maxAffordable.length > 0) {
      setBet(maxAffordable[maxAffordable.length - 1]);
    }
  };

  const handleBuyCoins = () => {
    setBalance(prev => prev + 500);
  };

  // Build winning cells map per reel
  const winningCellsPerReel = Array.from({ length: NUM_REELS }, (_, col) => {
    const cells = [];
    for (const win of wins) {
      const cell = win.cells.find(c => c.col === col);
      if (cell) {
        cells.push({ row: cell.row, color: win.color });
      }
    }
    return cells;
  });

  const leftPaylines = [5, 4, 1, 2, 8];
  const rightPaylines = [1, 6, 2, 3, 7];

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen p-2"
      style={{
        background: 'radial-gradient(ellipse at center, #2d1b69 0%, #1a0a2e 40%, #0d0620 100%)',
      }}
    >
      <CoinParticles active={showCoins} />

      {/* Machine outer frame */}
      <div
        className="w-full max-w-2xl rounded-3xl p-1"
        style={{
          background: 'linear-gradient(135deg, #f5a623 0%, #7c3aed 50%, #f5a623 100%)',
          boxShadow: '0 0 40px rgba(124,58,237,0.6), 0 0 80px rgba(245,166,35,0.2)',
        }}
      >
        {/* Machine inner */}
        <div
          className="rounded-3xl p-3"
          style={{
            background: 'linear-gradient(180deg, #2d1b69 0%, #1e1040 50%, #2d1b69 100%)',
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)',
          }}
        >
          {/* Header */}
          <Header balance={balance} onBuyCoins={handleBuyCoins} />

          {/* Reel area with payline indicators */}
          <div className="flex items-stretch gap-2 mb-2">
            {/* Left paylines */}
            <PaylineIndicator numbers={leftPaylines} side="left" />

            {/* Reel frame */}
            <div
              className="flex-1 rounded-2xl overflow-hidden relative"
              style={{
                background: '#0a0515',
                border: '3px solid',
                borderColor: '#f5a623',
                boxShadow: '0 0 20px rgba(245,166,35,0.4), inset 0 0 20px rgba(0,0,0,0.8)',
              }}
            >
              {/* Center line highlight */}
              <div
                className="absolute left-0 right-0 z-20 pointer-events-none"
                style={{
                  top: '50%',
                  transform: 'translateY(-50%)',
                  height: '90px',
                  background: 'linear-gradient(90deg, rgba(245,166,35,0.08) 0%, rgba(245,166,35,0.15) 50%, rgba(245,166,35,0.08) 100%)',
                  borderTop: '1px solid rgba(245,166,35,0.3)',
                  borderBottom: '1px solid rgba(245,166,35,0.3)',
                }}
              />

              {/* Reels */}
              <div className="flex" key={spinKey}>
                {Array.from({ length: NUM_REELS }, (_, col) => (
                  <Reel
                    key={col}
                    finalSymbols={finalGrids ? finalGrids[col] : grid[col]}
                    isSpinning={isSpinning}
                    spinDelay={col}
                    onStop={handleReelStop}
                    winningCells={winningCellsPerReel[col]}
                  />
                ))}
              </div>

              {/* Win banner overlay */}
              {showWinBanner && (
                <WinBanner
                  wins={wins}
                  totalWin={winAmount}
                  onClose={() => setShowWinBanner(false)}
                />
              )}
            </div>

            {/* Right paylines */}
            <PaylineIndicator numbers={rightPaylines} side="right" />
          </div>

          {/* Controls */}
          <Controls
            bet={bet}
            onBetChange={setBet}
            onMaxBet={handleMaxBet}
            onSpin={handleSpin}
            isSpinning={isSpinning}
            winAmount={winAmount}
            balance={balance}
          />
        </div>
      </div>

      {/* Low balance warning */}
      {balance < bet && !isSpinning && (
        <div
          className="mt-3 px-4 py-2 rounded-full text-sm font-bold animate-pulse"
          style={{
            background: 'rgba(239,68,68,0.2)',
            border: '1px solid #ef4444',
            color: '#fca5a5',
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '0.7rem',
          }}
        >
          Insufficient balance — Buy more coins!
        </div>
      )}

      {/* Paytable hint */}
      <div className="mt-3 flex flex-wrap justify-center gap-2 max-w-lg">
        {[
          { emoji: '⭐', label: 'Jackpot', value: '100x' },
          { emoji: '🎩', label: 'Top Hat', value: '20x' },
          { emoji: '💰', label: 'Money', value: '15x' },
          { emoji: '💣', label: 'Wild', value: 'Any' },
        ].map(item => (
          <div
            key={item.label}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(45,27,105,0.6)',
              border: '1px solid rgba(124,58,237,0.4)',
              fontSize: '0.65rem',
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>{item.emoji}</span>
            <span style={{ color: '#c4b5fd', fontFamily: 'Orbitron, sans-serif' }}>{item.label}</span>
            <span style={{ color: '#f5a623', fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotMachine;
