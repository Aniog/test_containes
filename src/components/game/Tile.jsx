import React from 'react';
import { TILE_TYPES } from './gameData';

const TILE_EMOJIS = Object.fromEntries(
  Object.values(TILE_TYPES).map(t => [t.id, t.emoji])
);

const Tile = ({ tile, isBlocked, tileSize, onClick }) => {
  const emoji = TILE_EMOJIS[tile.type] || '❓';

  return (
    <div
      onClick={!isBlocked ? onClick : undefined}
      style={{
        position: 'absolute',
        left: tile.col * tileSize,
        top: tile.row * tileSize,
        width: tileSize,
        height: tileSize,
        zIndex: tile.layer * 10 + 1,
        cursor: isBlocked ? 'default' : 'pointer',
        userSelect: 'none',
      }}
      className={`tile-wrapper ${isBlocked ? 'blocked' : 'clickable'}`}
    >
      {/* Shadow/depth effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 8,
          background: isBlocked
            ? 'linear-gradient(135deg, #8a9a7a 0%, #6b7a5c 100%)'
            : 'linear-gradient(135deg, #f5f0e8 0%, #e8dfc8 100%)',
          border: isBlocked ? '2px solid #5a6a4a' : '2px solid #c8b89a',
          boxShadow: isBlocked
            ? '2px 3px 0px #4a5a3a, inset 0 1px 0 rgba(255,255,255,0.2)'
            : '2px 3px 0px #a09070, inset 0 1px 0 rgba(255,255,255,0.6)',
          transition: 'all 0.15s ease',
        }}
      />
      {/* Tile face */}
      <div
        style={{
          position: 'absolute',
          inset: 3,
          borderRadius: 6,
          background: isBlocked
            ? 'linear-gradient(135deg, #9aaa8a 0%, #7a8a6a 100%)'
            : 'linear-gradient(135deg, #fffef8 0%, #f5edd8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: tileSize * 0.42,
          filter: isBlocked ? 'brightness(0.75) saturate(0.6)' : 'none',
          transition: 'all 0.15s ease',
        }}
      >
        {emoji}
      </div>
      {/* Hover highlight */}
      {!isBlocked && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 8,
            background: 'transparent',
            transition: 'background 0.1s',
          }}
          className="tile-hover-overlay"
        />
      )}
    </div>
  );
};

export default Tile;
