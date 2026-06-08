import React from 'react';

const PlayerHeader = ({ name = 'Kawshar', multiplier = 10 }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        width: 'calc(100% - 32px)',
        maxWidth: 380,
      }}
    >
      <div
        style={{
          background: 'rgba(200,200,240,0.28)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: 20,
          border: '1.5px solid rgba(255,255,255,0.35)',
          padding: '8px 14px 8px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: '2.5px solid rgba(255,255,255,0.6)',
            background: 'linear-gradient(135deg, #6600ff, #00ccff)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
            flexShrink: 0,
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          👩
        </div>

        {/* Name */}
        <div style={{ flex: 1 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: 17,
              color: '#ffffff',
              fontFamily: 'Inter, system-ui, sans-serif',
              textShadow: '0 1px 4px rgba(0,0,0,0.4)',
              letterSpacing: 0.3,
            }}
          >
            {name}的棋盘
          </span>
        </div>

        {/* Multiplier badge */}
        <div
          style={{
            background: '#ff5500',
            borderRadius: 12,
            padding: '5px 14px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(255,85,0,0.5)',
            border: '1.5px solid rgba(255,120,50,0.6)',
          }}
        >
          <span
            style={{
              fontWeight: 900,
              fontSize: 18,
              color: '#fff',
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: 0.5,
            }}
          >
            x{multiplier}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerHeader;

