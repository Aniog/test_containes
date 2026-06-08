import { useCallback, useEffect, useRef, useState } from 'react';
import Reel, { SYMBOLS } from './Reel';

// Payout table: symbol -> multiplier (for 3-of-a-kind)
const PAYOUTS = {
  '💎': 50,
  '7️⃣': 20,
  '⭐': 10,
  '🔔': 8,
  '🍇': 5,
  '🍊': 4,
  '🍋': 3,
  '🍒': 2,
};

const REEL_COUNT = 3;
const INITIAL_COINS = 1000;

// Weighted random symbol (rarer symbols less likely)
const WEIGHTS = {
  '🍒': 20,
  '🍋': 18,
  '🍊': 16,
  '🍇': 14,
  '🔔': 12,
  '⭐': 10,
  '7️⃣': 6,
  '💎': 4,
};

const weightedRandom = () => {
  const entries = Object.entries(WEIGHTS);
  const total = entries.reduce((sum, [, w]) => sum + w, 0);
  let rand = Math.random() * total;
  for (const [sym, w] of entries) {
    rand -= w;
    if (rand <= 0) return sym;
  }
  return entries[0][0];
};

const evaluateResult = (results) => {
  const [a, b, c] = results;
  if (a === b && b === c) {
    return { type: 'jackpot', multiplier: PAYOUTS[a] || 2, winReels: [0, 1, 2] };
  }
  if (a === b) return { type: 'pair', multiplier: 1, winReels: [0, 1] };
  if (b === c) return { type: 'pair', multiplier: 1, winReels: [1, 2] };
  if (a === c) return { type: 'pair', multiplier: 1, winReels: [0, 2] };
  return { type: 'loss', multiplier: 0, winReels: [] };
};

const WinBanner = ({ result, bet, visible }) => {
  if (!visible || result.type === 'loss') return null;
  const winAmount = bet * result.multiplier;
  return (
    <div className={`absolute inset-0 flex items-center justify-center z-30 pointer-events-none`}>
      <div className={`px-8 py-4 rounded-2xl text-center animate-bounce-in ${
        result.type === 'jackpot'
          ? 'bg-gradient-to-r from-yellow-500 to-amber-400 shadow-[0_0_40px_rgba(245,197,24,0.8)]'
          : 'bg-gradient-to-r from-green-600 to-emerald-500 shadow-[0_0_30px_rgba(34,197,94,0.6)]'
      }`}>
        <div className="text-white font-black text-2xl uppercase tracking-widest">
          {result.type === 'jackpot' ? '🎉 JACKPOT!' : '✨ WIN!'}
        </div>
        <div className="text-white font-bold text-xl mt-1">
          +{winAmount} 🪙
        </div>
      </div>
    </div>
  );
};

const SlotMachine = () => {
  const [coins, setCoins] = useState(INITIAL_COINS);
  const [bet, setBet] = useState(10);
  const [spinning, setSpinning] = useState(false);
  const [results, setResults] = useState(['🍒', '🍋', '🍊']);
  const [pendingResults, setPendingResults] = useState(['🍒', '🍋', '🍊']);
  const [stoppedCount, setStoppedCount] = useState(0);
  const [lastResult, setLastResult] = useState(null);
  const [showWin, setShowWin] = useState(false);
  const [history, setHistory] = useState([]);
  const [totalWon, setTotalWon] = useState(0);
  const [totalSpins, setTotalSpins] = useState(0);
  const winTimerRef = useRef(null);

  const canSpin = !spinning && coins >= bet;

  const handleSpin = useCallback(() => {
    if (!canSpin) return;

    setShowWin(false);
    setLastResult(null);
    setStoppedCount(0);

    const newResults = Array.from({ length: REEL_COUNT }, () => weightedRandom());
    setPendingResults(newResults);
    setCoins((c) => c - bet);
    setSpinning(true);
    setTotalSpins((s) => s + 1);
  }, [canSpin, bet]);

  const handleReelStop = useCallback(() => {
    setStoppedCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (stoppedCount === REEL_COUNT && spinning) {
      setSpinning(false);
      setResults(pendingResults);

      const evaluation = evaluateResult(pendingResults);
      setLastResult(evaluation);

      if (evaluation.type !== 'loss') {
        const winAmount = bet * evaluation.multiplier;
        setCoins((c) => c + winAmount);
        setTotalWon((w) => w + winAmount);
        setShowWin(true);
        if (winTimerRef.current) clearTimeout(winTimerRef.current);
        winTimerRef.current = setTimeout(() => setShowWin(false), 2500);
      }

      setHistory((h) => [
        { symbols: pendingResults, result: evaluation, bet, id: Date.now() },
        ...h.slice(0, 9),
      ]);
    }
  }, [stoppedCount, spinning, pendingResults, bet]);

  // Keyboard: Space to spin
  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space' && canSpin) {
        e.preventDefault();
        handleSpin();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [canSpin, handleSpin]);

  const betOptions = [5, 10, 25, 50, 100];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{ background: 'radial-gradient(ellipse at center, #1a0a2e 0%, #0a0a0f 70%)' }}>

      {/* Title */}
      <div className="mb-6 text-center">
        <h1 className="text-5xl font-black tracking-widest uppercase"
          style={{ color: '#f5c518', textShadow: '0 0 30px rgba(245,197,24,0.6), 0 0 60px rgba(245,197,24,0.3)' }}>
          🎰 LUCKY SLOTS
        </h1>
        <p className="text-gray-400 text-sm mt-1 tracking-wider uppercase">Press SPACE or click SPIN</p>
      </div>

      {/* Machine body */}
      <div className="relative rounded-3xl p-6 w-full max-w-md"
        style={{
          background: 'linear-gradient(145deg, #1e1e3f 0%, #12122a 50%, #0d0d20 100%)',
          border: '2px solid rgba(245,197,24,0.3)',
          boxShadow: '0 0 60px rgba(245,197,24,0.1), 0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}>

        {/* Coin display */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs uppercase tracking-widest">Balance</span>
            <span className="text-2xl font-black text-yellow-400">🪙 {coins.toLocaleString()}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-gray-400 text-xs uppercase tracking-widest">Spins</span>
            <span className="text-lg font-bold text-gray-300">{totalSpins}</span>
          </div>
        </div>

        {/* Reels container */}
        <div className="relative rounded-2xl p-4 mb-5"
          style={{
            background: 'linear-gradient(180deg, #080814 0%, #0d0d20 100%)',
            border: '1px solid rgba(245,197,24,0.15)',
            boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.8)',
          }}>

          {/* Win banner overlay */}
          <WinBanner result={lastResult || { type: 'loss' }} bet={bet} visible={showWin} />

          <div className="flex gap-3 justify-center">
            {Array.from({ length: REEL_COUNT }).map((_, i) => (
              <Reel
                key={i}
                spinning={spinning}
                targetSymbol={pendingResults[i]}
                onStop={handleReelStop}
                delay={i * 300}
                isWinReel={showWin && lastResult?.winReels?.includes(i)}
              />
            ))}
          </div>

          {/* Payline indicator */}
          <div className="flex items-center justify-center mt-3 gap-2">
            <div className="h-px flex-1" style={{ background: 'rgba(245,197,24,0.3)' }} />
            <span className="text-yellow-400/60 text-xs uppercase tracking-widest">Payline</span>
            <div className="h-px flex-1" style={{ background: 'rgba(245,197,24,0.3)' }} />
          </div>
        </div>

        {/* Bet selector */}
        <div className="mb-4">
          <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">Bet Amount</div>
          <div className="flex gap-2 flex-wrap">
            {betOptions.map((b) => (
              <button
                key={b}
                onClick={() => !spinning && setBet(b)}
                disabled={spinning}
                className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all duration-150 ${
                  bet === b
                    ? 'text-black'
                    : 'text-gray-300 hover:text-yellow-400'
                } ${spinning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:scale-95'}`}
                style={bet === b ? {
                  background: 'linear-gradient(135deg, #f5c518, #f59e0b)',
                  boxShadow: '0 0 15px rgba(245,197,24,0.4)',
                } : {
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Spin button */}
        <button
          onClick={handleSpin}
          disabled={!canSpin}
          className={`w-full py-5 rounded-2xl text-xl font-black uppercase tracking-widest transition-all duration-150 ${
            canSpin
              ? 'active:scale-95 cursor-pointer'
              : 'opacity-50 cursor-not-allowed'
          }`}
          style={canSpin ? {
            background: 'linear-gradient(135deg, #f5c518 0%, #f59e0b 50%, #d97706 100%)',
            boxShadow: '0 0 30px rgba(245,197,24,0.5), 0 4px 20px rgba(0,0,0,0.4)',
            color: '#000',
          } : {
            background: 'rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          {spinning ? '⏳ Spinning...' : coins < bet ? '💸 No Funds' : '🎰 SPIN'}
        </button>

        {/* Low balance warning */}
        {coins < bet && !spinning && (
          <button
            onClick={() => { setCoins(INITIAL_COINS); setTotalSpins(0); setTotalWon(0); setHistory([]); }}
            className="w-full mt-3 py-3 rounded-xl text-sm font-bold text-gray-300 hover:text-white transition-colors cursor-pointer"
            style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }}
          >
            🔄 Reset Game (Get 1000 coins)
          </button>
        )}
      </div>

      {/* Payout table */}
      <div className="mt-5 w-full max-w-md rounded-2xl p-4"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
        <div className="text-gray-400 text-xs uppercase tracking-widest mb-3 text-center">Payout Table (3 of a kind)</div>
        <div className="grid grid-cols-4 gap-2">
          {Object.entries(PAYOUTS).map(([sym, mult]) => (
            <div key={sym} className="flex flex-col items-center gap-1 py-2 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <span className="text-2xl">{sym}</span>
              <span className="text-yellow-400 text-xs font-bold">×{mult}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 text-center text-gray-500 text-xs">Pair = ×1 (bet back)</div>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="mt-4 w-full max-w-md rounded-2xl p-4"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
          <div className="text-gray-400 text-xs uppercase tracking-widest mb-3">Recent Spins</div>
          <div className="flex flex-col gap-1">
            {history.slice(0, 5).map((h) => (
              <div key={h.id} className="flex items-center justify-between py-1 px-2 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.03)' }}>
                <span className="text-lg">{h.symbols.join(' ')}</span>
                <span className={`text-sm font-bold ${
                  h.result.type === 'jackpot' ? 'text-yellow-400' :
                  h.result.type === 'pair' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {h.result.type === 'loss' ? `-${h.bet}` : `+${h.bet * h.result.multiplier}`} 🪙
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
