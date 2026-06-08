import React, { useState } from 'react';
import PlayerHeader from '../components/game/PlayerHeader';
import IsometricBoard from '../components/game/IsometricBoard';

const opponents = [
  { name: 'Kawshar', multiplier: 10 },
  { name: 'Alex', multiplier: 5 },
  { name: 'Mia', multiplier: 20 },
  { name: 'Leo', multiplier: 3 },
];

const GameBoard = () => {
  const [opponentIndex, setOpponentIndex] = useState(0);

  const handleSwitch = () => {
    setOpponentIndex((prev) => (prev + 1) % opponents.length);
  };

  const current = opponents[opponentIndex];

  return (
    <div
      style={{
        width: '100%',
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        background: '#5555cc',
        fontFamily: 'Inter, system-ui, sans-serif',
        maxWidth: 480,
        margin: '0 auto',
      }}
    >
      <PlayerHeader name={current.name} multiplier={current.multiplier} />

      <IsometricBoard />

      {/* Bottom button */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px 24px 28px',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 70%, transparent 100%)',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 20,
        }}
      >
        <button
          onClick={handleSwitch}
          style={{
            background: 'linear-gradient(135deg, #ff5500 0%, #ff7722 100%)',
            border: '2px solid rgba(255,150,80,0.5)',
            borderRadius: 50,
            padding: '15px 64px',
            fontSize: 18,
            fontWeight: 800,
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(255,85,0,0.55), inset 0 1px 0 rgba(255,255,255,0.25)',
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: 2,
            transition: 'transform 0.1s, box-shadow 0.1s',
            minWidth: 220,
            textShadow: '0 1px 3px rgba(0,0,0,0.3)',
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.96)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(255,85,0,0.4)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,85,0,0.55), inset 0 1px 0 rgba(255,255,255,0.25)';
          }}
          onTouchStart={(e) => { e.currentTarget.style.transform = 'scale(0.96)'; }}
          onTouchEnd={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          切换对手
        </button>
      </div>
    </div>
  );
};

export default GameBoard;

