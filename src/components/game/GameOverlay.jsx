export default function GameOverlay({ gameState, score, highScore, onStart, onPause }) {
  if (gameState === 'playing') return null;

  if (gameState === 'paused') {
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center rounded-xl z-10"
        style={{ backgroundColor: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(4px)' }}
      >
        <div className="text-5xl mb-4">⏸</div>
        <h2 className="text-2xl font-bold tracking-widest uppercase mb-6" style={{ color: '#00f5ff' }}>
          已暂停
        </h2>
        <NeonButton onClick={onPause} color="#00f5ff">
          继续游戏
        </NeonButton>
      </div>
    );
  }

  if (gameState === 'over') {
    const isNewRecord = score > 0 && score >= highScore;
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center rounded-xl z-10"
        style={{ backgroundColor: 'rgba(10,10,15,0.9)', backdropFilter: 'blur(4px)' }}
      >
        <div className="text-5xl mb-3">💀</div>
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-2" style={{ color: '#ff2d55' }}>
          游戏结束
        </h2>
        {isNewRecord && (
          <p className="text-sm font-bold tracking-widest uppercase mb-2 animate-pulse" style={{ color: '#ffd60a' }}>
            🏆 新纪录！
          </p>
        )}
        <div className="flex gap-6 mb-6 mt-2">
          <div className="text-center">
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#6b6b8a' }}>本局得分</p>
            <p className="font-mono text-3xl font-bold" style={{ color: '#39ff14' }}>{score}</p>
          </div>
          <div className="text-center">
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#6b6b8a' }}>最高分</p>
            <p className="font-mono text-3xl font-bold" style={{ color: '#ffd60a' }}>{highScore}</p>
          </div>
        </div>
        <NeonButton onClick={onStart} color="#39ff14">
          再来一局
        </NeonButton>
      </div>
    );
  }

  // idle
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center rounded-xl z-10"
      style={{ backgroundColor: 'rgba(10,10,15,0.92)', backdropFilter: 'blur(4px)' }}
    >
      <div className="text-6xl mb-4">🐍</div>
      <h1 className="text-4xl font-bold tracking-widest uppercase mb-2" style={{ color: '#39ff14', textShadow: '0 0 20px rgba(57,255,20,0.6)' }}>
        贪吃蛇
      </h1>
      <p className="text-sm mb-1" style={{ color: '#6b6b8a' }}>吃食物得分，避免撞墙和自身</p>
      <p className="text-xs mb-6" style={{ color: '#6b6b8a' }}>⭐ 特殊食物 = +30分</p>
      <NeonButton onClick={onStart} color="#39ff14">
        开始游戏
      </NeonButton>
      <p className="text-xs mt-4" style={{ color: '#6b6b8a' }}>
        键盘 WASD / 方向键 · 空格键暂停
      </p>
    </div>
  );
}

function NeonButton({ children, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 rounded-xl font-bold tracking-widest uppercase text-sm transition-all active:scale-95"
      style={{
        backgroundColor: `${color}18`,
        border: `2px solid ${color}`,
        color,
        boxShadow: `0 0 15px ${color}40`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 25px ${color}80`;
        e.currentTarget.style.backgroundColor = `${color}28`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 15px ${color}40`;
        e.currentTarget.style.backgroundColor = `${color}18`;
      }}
    >
      {children}
    </button>
  );
}
