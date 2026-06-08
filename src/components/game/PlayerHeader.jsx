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
          background: 'rgba(255,255,255,0.95)',
          borderRadius: 20,
          border: '2px solid #d4b896',
          padding: '8px 16px 8px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: '3px solid #d4b896',
            background: 'linear-gradient(135deg, #c8a870, #a08050)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
            flexShrink: 0,
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          👩
        </div>

        {/* Name */}
        <div style={{ flex: 1 }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: 17,
              color: '#2a2a2a',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            {name}的棋盘
          </span>
        </div>

        {/* Multiplier badge */}
        <div
          style={{
            background: '#f5a623',
            borderRadius: 12,
            padding: '5px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            boxShadow: '0 2px 6px rgba(245,166,35,0.4)',
          }}
        >
          <span
            style={{
              fontWeight: 800,
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
