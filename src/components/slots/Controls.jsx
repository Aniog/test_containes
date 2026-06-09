import { Minus, Plus, Zap } from 'lucide-react';

const BET_OPTIONS = [0.2, 0.4, 0.6, 0.8, 1.0, 2.0, 5.0, 10.0];

const Controls = ({ bet, onBetChange, onMaxBet, onSpin, isSpinning, winAmount, balance }) => {
  const currentBetIndex = BET_OPTIONS.findIndex(b => Math.abs(b - bet) < 0.001);

  const decreaseBet = () => {
    if (currentBetIndex > 0) onBetChange(BET_OPTIONS[currentBetIndex - 1]);
  };

  const increaseBet = () => {
    if (currentBetIndex < BET_OPTIONS.length - 1) onBetChange(BET_OPTIONS[currentBetIndex + 1]);
  };

  const canSpin = !isSpinning && balance >= bet;

  return (
    <div className="flex items-center justify-between gap-2 px-2 py-2 mt-1">
      {/* Win display */}
      <div className="flex flex-col items-center">
        <span
          className="uppercase tracking-widest mb-1"
          style={{ fontFamily: 'Orbitron, sans-serif', color: '#a78bfa', fontSize: '0.55rem' }}
        >
          Win
        </span>
        <div
          className="px-3 py-1.5 rounded-lg text-center"
          style={{
            minWidth: 80,
            background: 'linear-gradient(135deg, #0f0a1e 0%, #1e1040 100%)',
            border: `2px solid ${winAmount > 0 ? '#f5a623' : '#3b2a6e'}`,
            boxShadow: winAmount > 0
              ? '0 0 15px rgba(245,166,35,0.6), inset 0 0 10px rgba(245,166,35,0.1)'
              : 'none',
            transition: 'border-color 0.3s, box-shadow 0.3s',
          }}
        >
          <span
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: winAmount > 0 ? '#f5a623' : '#4a3a6e',
              fontSize: '0.85rem',
              fontWeight: 700,
              textShadow: winAmount > 0 ? '0 0 10px rgba(245,166,35,0.8)' : 'none',
            }}
          >
            {winAmount > 0
              ? winAmount.toLocaleString(undefined, { maximumFractionDigits: 1 })
              : '0'}
          </span>
        </div>
      </div>

      {/* Bet controls */}
      <div className="flex flex-col items-center">
        <span
          className="uppercase tracking-widest mb-1"
          style={{ fontFamily: 'Orbitron, sans-serif', color: '#a78bfa', fontSize: '0.55rem' }}
        >
          Total Bet
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={decreaseBet}
            disabled={currentBetIndex <= 0 || isSpinning}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(135deg, #3730a3 0%, #4c1d95 100%)',
              border: '2px solid #7c3aed',
              boxShadow: '0 0 6px rgba(124,58,237,0.4)',
              color: '#e9d5ff',
            }}
          >
            <Minus size={12} />
          </button>

          <div
            className="px-3 py-1.5 rounded-lg text-center"
            style={{
              minWidth: 56,
              background: 'linear-gradient(135deg, #1e1040 0%, #2d1b69 100%)',
              border: '2px solid #7c3aed',
              boxShadow: '0 0 8px rgba(124,58,237,0.3)',
            }}
          >
            <span
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#e9d5ff',
                fontSize: '0.85rem',
                fontWeight: 700,
              }}
            >
              {bet.toFixed(1)}
            </span>
          </div>

          <button
            onClick={increaseBet}
            disabled={currentBetIndex >= BET_OPTIONS.length - 1 || isSpinning}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(135deg, #3730a3 0%, #4c1d95 100%)',
              border: '2px solid #7c3aed',
              boxShadow: '0 0 6px rgba(124,58,237,0.4)',
              color: '#e9d5ff',
            }}
          >
            <Plus size={12} />
          </button>
        </div>
      </div>

      {/* Max Bet */}
      <button
        onClick={onMaxBet}
        disabled={isSpinning}
        className="px-3 py-2 rounded-lg font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          background: 'linear-gradient(135deg, #f5a623 0%, #d97706 100%)',
          border: '2px solid #fbbf24',
          boxShadow: '0 0 12px rgba(245,166,35,0.5)',
          fontFamily: 'Orbitron, sans-serif',
          color: '#1a0a2e',
          fontSize: '0.6rem',
        }}
      >
        Max Bet
      </button>

      {/* Spin button */}
      <button
        onClick={onSpin}
        disabled={!canSpin}
        className="relative flex items-center justify-center rounded-full font-black uppercase tracking-wider transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          width: 76,
          height: 76,
          flexShrink: 0,
          background: canSpin
            ? 'linear-gradient(135deg, #f472b6 0%, #ec4899 40%, #be185d 100%)'
            : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
          border: `3px solid ${canSpin ? '#f9a8d4' : '#9ca3af'}`,
          boxShadow: canSpin
            ? '0 0 20px rgba(236,72,153,0.7), 0 0 40px rgba(236,72,153,0.3), inset 0 2px 4px rgba(255,255,255,0.2)'
            : 'none',
          fontFamily: 'Orbitron, sans-serif',
          color: '#ffffff',
          fontSize: '0.7rem',
        }}
      >
        {isSpinning ? (
          <div className="flex flex-col items-center gap-0.5">
            <Zap size={18} className="animate-bounce" />
            <span style={{ fontSize: '0.5rem' }}>SPIN</span>
          </div>
        ) : (
          <span>SPIN</span>
        )}
        {canSpin && !isSpinning && (
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)' }}
          />
        )}
      </button>
    </div>
  );
};

export default Controls;

