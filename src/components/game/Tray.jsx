import React from 'react';
import { TILE_TYPES, TRAY_SIZE } from './gameData';

const TILE_EMOJIS = Object.fromEntries(
  Object.values(TILE_TYPES).map(t => [t.id, t.emoji])
);

const Tray = ({ trayTiles }) => {
  const slots = Array(TRAY_SIZE).fill(null);
  trayTiles.forEach((tile, i) => {
    if (i < TRAY_SIZE) slots[i] = tile;
  });

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #c8a060 0%, #a07840 50%, #8a6030 100%)',
        borderRadius: 12,
        padding: '8px 10px',
        border: '3px solid #6a4820',
        boxShadow: '0 4px 12px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.2)',
        display: 'flex',
        gap: 6,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 64,
      }}
    >
      {slots.map((tile, i) => (
        <div
          key={i}
          style={{
            width: 52,
            height: 52,
            borderRadius: 8,
            background: tile
              ? 'linear-gradient(135deg, #fffef8 0%, #f5edd8 100%)'
              : 'rgba(0,0,0,0.25)',
            border: tile ? '2px solid #c8b89a' : '2px solid rgba(0,0,0,0.3)',
            boxShadow: tile
              ? '1px 2px 0px #a09070, inset 0 1px 0 rgba(255,255,255,0.6)'
              : 'inset 0 2px 4px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
            transition: 'all 0.2s ease',
            transform: tile ? 'scale(1)' : 'scale(0.95)',
          }}
        >
          {tile ? TILE_EMOJIS[tile.type] || '❓' : ''}
        </div>
      ))}
    </div>
  );
};

export default Tray;
