import { useRef, useEffect, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { useSnakeGame } from '../hooks/useSnakeGame';
import GameBoard from '../components/game/GameBoard';
import ScorePanel from '../components/game/ScorePanel';
import TouchControls from '../components/game/TouchControls';
import GameOverlay from '../components/game/GameOverlay';

export default function SnakeGame() {
  const {
    snake, food, specialFood, gameState, score, highScore, level, gridSize,
    startGame, pauseGame, changeDirection,
  } = useSnakeGame();

  const touchStartRef = useRef(null);
  const [boardSize, setBoardSize] = useState(0);
  const boardContainerRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      if (boardContainerRef.current) {
        const rect = boardContainerRef.current.getBoundingClientRect();
        setBoardSize(Math.min(rect.width, rect.height));
      }
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    if (boardContainerRef.current) ro.observe(boardContainerRef.current);
    return () => ro.disconnect();
  }, []);

  // Swipe gesture support
  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartRef.current.x;
    const dy = t.clientY - touchStartRef.current.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (Math.max(absDx, absDy) < 20) return;
    if (absDx > absDy) {
      changeDirection(dx > 0 ? 'RIGHT' : 'LEFT');
    } else {
      changeDirection(dy > 0 ? 'DOWN' : 'UP');
    }
    touchStartRef.current = null;
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{ backgroundColor: '#0a0a0f', fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <div className="w-full max-w-sm flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1
            className="text-xl font-bold tracking-widest uppercase"
            style={{ color: '#39ff14', textShadow: '0 0 12px rgba(57,255,20,0.5)' }}
          >
            🐍 贪吃蛇
          </h1>
          <div className="flex gap-2">
            {(gameState === 'playing' || gameState === 'paused') && (
              <>
                <IconButton onClick={pauseGame} title={gameState === 'paused' ? '继续' : '暂停'}>
                  {gameState === 'paused' ? <Play size={18} /> : <Pause size={18} />}
                </IconButton>
                <IconButton onClick={startGame} title="重新开始">
                  <RotateCcw size={18} />
                </IconButton>
              </>
            )}
          </div>
        </div>

        {/* Score Panel */}
        <ScorePanel score={score} highScore={highScore} level={level} />

        {/* Game Board */}
        <div
          ref={boardContainerRef}
          className="relative w-full rounded-xl overflow-hidden"
          style={{
            border: '2px solid rgba(57,255,20,0.25)',
            boxShadow: '0 0 30px rgba(57,255,20,0.15), inset 0 0 30px rgba(0,0,0,0.5)',
            aspectRatio: '1 / 1',
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <GameBoard
            snake={snake}
            food={food}
            specialFood={specialFood}
            gridSize={gridSize}
            gameState={gameState}
          />
          <GameOverlay
            gameState={gameState}
            score={score}
            highScore={highScore}
            onStart={startGame}
            onPause={pauseGame}
          />
        </div>

        {/* Touch D-Pad */}
        <div className="flex justify-center mt-2">
          <TouchControls onDirection={changeDirection} gameState={gameState} />
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 text-xs" style={{ color: '#6b6b8a' }}>
          <span className="flex items-center gap-1">
            <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff2d55', boxShadow: '0 0 6px #ff2d55' }} />
            食物 +10
          </span>
          <span className="flex items-center gap-1">
            <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffd60a', boxShadow: '0 0 6px #ffd60a' }} />
            特殊 +30
          </span>
        </div>
      </div>
    </div>
  );
}

function IconButton({ children, onClick, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="w-9 h-9 flex items-center justify-center rounded-lg transition-all active:scale-95"
      style={{
        backgroundColor: '#12121a',
        border: '1px solid #1e1e2e',
        color: '#e0e0ff',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#39ff14';
        e.currentTarget.style.color = '#39ff14';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#1e1e2e';
        e.currentTarget.style.color = '#e0e0ff';
      }}
    >
      {children}
    </button>
  );
}
