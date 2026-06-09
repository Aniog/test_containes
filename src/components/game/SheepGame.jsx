import React, { useState, useCallback, useEffect, useRef } from 'react';
import Tile from './Tile';
import Tray from './Tray';
import { TRAY_SIZE, isTileBlocked, generateLevel, TILE_TYPES } from './gameData';

const LEVELS = [
  {
    name: '第一关',
    tileSize: 76,
    gridCols: 4,
    gridRows: 4,
  },
  {
    name: '第二关',
    tileSize: 64,
    gridCols: 6,
    gridRows: 6,
  },
];

// Grass decoration positions
const GRASS_DECORATIONS = [
  { x: 5, y: 8 }, { x: 15, y: 3 }, { x: 80, y: 6 }, { x: 90, y: 12 },
  { x: 3, y: 35 }, { x: 92, y: 40 }, { x: 8, y: 65 }, { x: 88, y: 70 },
  { x: 20, y: 80 }, { x: 75, y: 82 }, { x: 45, y: 5 }, { x: 55, y: 88 },
];

const GrassDecor = ({ x, y }) => (
  <div
    style={{
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      fontSize: 14,
      opacity: 0.7,
      pointerEvents: 'none',
      userSelect: 'none',
    }}
  >
    🌱
  </div>
);

const SheepGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [tiles, setTiles] = useState([]);
  const [trayTiles, setTrayTiles] = useState([]);
  const [gameState, setGameState] = useState('playing'); // 'playing' | 'won' | 'lost'
  const [matchFlash, setMatchFlash] = useState(null);
  const [score, setScore] = useState(0);
  const [removingIds, setRemovingIds] = useState(new Set());
  const containerRef = useRef(null);

  const initLevel = useCallback((levelIdx) => {
    const levelTiles = generateLevel(levelIdx + 1);
    setTiles(levelTiles);
    setTrayTiles([]);
    setGameState('playing');
    setMatchFlash(null);
    setRemovingIds(new Set());
  }, []);

  useEffect(() => {
    initLevel(currentLevel);
  }, [currentLevel, initLevel]);

  const handleTileClick = useCallback((tile) => {
    if (gameState !== 'playing') return;
    if (isTileBlocked(tile, tiles)) return;
    if (trayTiles.length >= TRAY_SIZE) return;

    // Remove tile from board
    const newTiles = tiles.filter(t => t.id !== tile.id);

    // Add to tray - insert next to same type for visual grouping
    let newTray = [...trayTiles];
    let sameTypeIdx = -1;
    for (let i = newTray.length - 1; i >= 0; i--) {
      if (newTray[i].type === tile.type) { sameTypeIdx = i; break; }
    }
    if (sameTypeIdx >= 0) {
      newTray.splice(sameTypeIdx + 1, 0, tile);
    } else {
      newTray.push(tile);
    }

    // Check for 3-match
    const typeCounts = {};
    newTray.forEach(t => {
      typeCounts[t.type] = (typeCounts[t.type] || 0) + 1;
    });

    let finalTray = newTray;
    let matchedType = null;

    for (const [type, count] of Object.entries(typeCounts)) {
      if (count >= 3) {
        matchedType = type;
        break;
      }
    }

    if (matchedType) {
      // Flash match animation
      setMatchFlash(matchedType);
      setTimeout(() => setMatchFlash(null), 500);

      // Remove 3 matched tiles from tray
      let removed = 0;
      finalTray = newTray.filter(t => {
        if (t.type === matchedType && removed < 3) {
          removed++;
          return false;
        }
        return true;
      });

      setScore(s => s + 30);
    } else {
      setScore(s => s + 5);
    }

    setTiles(newTiles);
    setTrayTiles(finalTray);

    // Check win/lose
    if (newTiles.length === 0 && finalTray.length === 0) {
      setTimeout(() => setGameState('won'), 300);
    } else if (finalTray.length >= TRAY_SIZE && newTiles.length > 0) {
      // Check if any more matches possible in tray
      const counts = {};
      finalTray.forEach(t => { counts[t.type] = (counts[t.type] || 0) + 1; });
      const hasMatch = Object.values(counts).some(c => c >= 3);
      if (!hasMatch) {
        setTimeout(() => setGameState('lost'), 300);
      }
    }
  }, [tiles, trayTiles, gameState]);

  const handleNextLevel = () => {
    if (currentLevel < LEVELS.length - 1) {
      setCurrentLevel(l => l + 1);
    } else {
      // Restart from level 1
      setCurrentLevel(0);
      setScore(0);
    }
  };

  const handleRestart = () => {
    initLevel(currentLevel);
  };

  const levelConfig = LEVELS[currentLevel];
  const tileSize = levelConfig.tileSize;

  // Calculate board dimensions
  const boardWidth = (levelConfig.gridCols + 1) * tileSize;
  const boardHeight = (levelConfig.gridRows + 1) * tileSize;

  // Find actual bounds of tiles
  const maxCol = tiles.length > 0 ? Math.max(...tiles.map(t => t.col)) + 1 : levelConfig.gridCols;
  const maxRow = tiles.length > 0 ? Math.max(...tiles.map(t => t.row)) + 1 : levelConfig.gridRows;
  const actualWidth = Math.max(maxCol * tileSize + tileSize, 200);
  const actualHeight = Math.max(maxRow * tileSize + tileSize, 200);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #a8d878 0%, #8cc858 40%, #78b848 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '16px 16px 0',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif',
      }}
    >
      {/* Grass decorations */}
      {GRASS_DECORATIONS.map((g, i) => (
        <GrassDecor key={i} x={g.x} y={g.y} />
      ))}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12, zIndex: 10 }}>
        {/* Logo */}
        <img
          src="/sheep-logo.jpeg"
          alt="羊了个羊"
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: '3px solid rgba(255,255,255,0.7)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
        <div
          style={{
            background: 'rgba(255,255,255,0.3)',
            borderRadius: 20,
            padding: '4px 16px',
            fontSize: 18,
            fontWeight: 700,
            color: '#2a5a10',
            border: '2px solid rgba(255,255,255,0.5)',
          }}
        >
          {LEVELS[currentLevel].name}
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.3)',
            borderRadius: 20,
            padding: '4px 16px',
            fontSize: 16,
            fontWeight: 600,
            color: '#2a5a10',
            border: '2px solid rgba(255,255,255,0.5)',
          }}
        >
          🌟 {score}
        </div>
        <button
          onClick={handleRestart}
          style={{
            background: 'rgba(255,255,255,0.4)',
            border: '2px solid rgba(255,255,255,0.6)',
            borderRadius: 20,
            padding: '4px 14px',
            fontSize: 14,
            fontWeight: 600,
            color: '#2a5a10',
            cursor: 'pointer',
          }}
        >
          重来
        </button>
      </div>

      {/* Tiles remaining */}
      <div style={{ fontSize: 13, color: '#2a5a10', marginBottom: 8, fontWeight: 500, opacity: 0.8 }}>
        剩余 {tiles.length} 块
      </div>

      {/* Game board area */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: actualWidth,
            height: actualHeight,
          }}
        >
          {tiles.map(tile => {
            const blocked = isTileBlocked(tile, tiles);
            return (
              <Tile
                key={tile.id}
                tile={tile}
                isBlocked={blocked}
                tileSize={tileSize}
                onClick={() => handleTileClick(tile)}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom tray area */}
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(180deg, #d4a060 0%, #b07840 100%)',
          borderTop: '4px solid #8a5820',
          padding: '12px 16px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Fence decoration */}
        <div style={{ display: 'flex', gap: 0, width: '100%', justifyContent: 'center', marginBottom: 4 }}>
          {Array(14).fill(null).map((_, i) => (
            <div
              key={i}
              style={{
                width: 18,
                height: 12,
                background: '#8a5820',
                borderRadius: '3px 3px 0 0',
                margin: '0 2px',
                opacity: 0.6,
              }}
            />
          ))}
        </div>
        <Tray trayTiles={trayTiles} />
        {/* Level buttons */}
        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
          {LEVELS.map((lv, i) => (
            <button
              key={i}
              onClick={() => { setCurrentLevel(i); setScore(0); }}
              style={{
                background: i === currentLevel ? '#5a8a20' : 'rgba(255,255,255,0.3)',
                border: '2px solid rgba(255,255,255,0.5)',
                borderRadius: 16,
                padding: '3px 14px',
                fontSize: 13,
                fontWeight: 600,
                color: i === currentLevel ? '#fff' : '#5a3010',
                cursor: 'pointer',
              }}
            >
              {lv.name}
            </button>
          ))}
        </div>
      </div>

      {/* Win overlay */}
      {gameState === 'won' && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #a8e878 0%, #78c848 100%)',
              borderRadius: 24,
              padding: '40px 48px',
              textAlign: 'center',
              border: '4px solid #5a9820',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ fontSize: 64, marginBottom: 8 }}>🎉</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: '#2a5a10', marginBottom: 8 }}>
              恭喜通关！
            </div>
            <div style={{ fontSize: 18, color: '#3a7a20', marginBottom: 24 }}>
              得分: {score}
            </div>
            <button
              onClick={handleNextLevel}
              style={{
                background: '#5a9820',
                color: '#fff',
                border: 'none',
                borderRadius: 16,
                padding: '12px 32px',
                fontSize: 18,
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }}
            >
              {currentLevel < LEVELS.length - 1 ? '下一关 →' : '再来一局 🔄'}
            </button>
          </div>
        </div>
      )}

      {/* Lose overlay */}
      {gameState === 'lost' && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #f8d8a8 0%, #e8b878 100%)',
              borderRadius: 24,
              padding: '40px 48px',
              textAlign: 'center',
              border: '4px solid #c87820',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ fontSize: 64, marginBottom: 8 }}>😢</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: '#8a3010', marginBottom: 8 }}>
              游戏结束
            </div>
            <div style={{ fontSize: 16, color: '#a05020', marginBottom: 24 }}>
              格子满了！再试一次吧
            </div>
            <button
              onClick={handleRestart}
              style={{
                background: '#c87820',
                color: '#fff',
                border: 'none',
                borderRadius: 16,
                padding: '12px 32px',
                fontSize: 18,
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }}
            >
              重新开始 🔄
            </button>
          </div>
        </div>
      )}

      {/* Match flash effect */}
      {matchFlash && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(255,255,100,0.15)',
            pointerEvents: 'none',
            zIndex: 50,
            animation: 'flash 0.5s ease-out',
          }}
        />
      )}
    </div>
  );
};

export default SheepGame;
