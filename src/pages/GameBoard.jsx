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
        background: '#a8d8e8',
        fontFamily: 'Inter, system-ui, sans-serif',
        maxWidth: 480,
        margin: '0 auto',
      }}
    >
      {/* Header overlay */}
      <PlayerHeader name={current.name} multiplier={current.multiplier} />

      {/* Game board fills the space */}
      <IsometricBoard />

      {/* Bottom button */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px 24px 24px',
          background: 'linear-gradient(0deg, rgba(212,184,150,0.95) 0%, rgba(212,184,150,0.7) 80%, transparent 100%)',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 20,
        }}
      >
        <button
          onClick={handleSwitch}
          style={{
            background: 'linear-gradient(180deg, #e8d4a8 0%, #d4b896 100%)',
            border: '2px solid #c4a070',
            borderRadius: 50,
            padding: '14px 60px',
            fontSize: 18,
            fontWeight: 600,
            color: '#5a3e1b',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: 1,
            transition: 'transform 0.1s, box-shadow 0.1s',
            minWidth: 220,
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.97)';
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)';
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.transform = 'scale(0.97)';
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          切换对手
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
