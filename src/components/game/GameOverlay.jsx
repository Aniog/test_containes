export default function GameOverlay({ gameState, score, highScore, onStart, onPause }) {
  if (gameState === 'playing') return null;

  if (gameState === 'paused') {
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center rounded-xl z-10"
        style={{ backgroundColor: 'rgba(240,253,244,0.92)', backdropFilter: 'blur(4px)' }}
      >
        <div className="text-5xl mb-4">⏸</div>
        <h2 className="text-2xl font-bold tracking-widest uppercase mb-6" style={{ color: '#0284c7' }}>
          已暂停
        </h2>
        <NeonButton onClick={onPause} color="#0284c7" bg="#f0f9ff" border="#bae6fd">
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
        style={{ backgroundColor: 'rgba(240,253,244,0.94)', backdropFilter: 'blur(4px)' }}
      >
        <div className="text-5xl mb-3">😵</div>
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-2" style={{ color: '#dc2626' }}>
          游戏结束
        </h2>
        {isNewRecord && (
          <p className="text-sm font-bold tracking-widest uppercase mb-2 animate-pulse" style={{ color: '#d97706' }}>
            🏆 新纪录！
          </p>
        )}
        <div className="flex gap-6 mb-6 mt-2">
          <div className="text-center">
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#9ca3af' }}>本局得分</p>
            <p className="font-mono text-3xl font-bold" style={{ color: '#16a34a' }}>{score}</p>
          </div>
          <div className="text-center">
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#9ca3af' }}>最高分</p>
            <p className="font-mono text-3xl font-bold" style={{ color: '#d97706' }}>{highScore}</p>
          </div>
        </div>
        <NeonButton onClick={onStart} color="#16a34a" bg="#f0fdf4" border="#bbf7d0">
          再来一局
        </NeonButton>
      </div>
    );
  }

  // idle
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center rounded-xl z-10"
      style={{ backgroundColor: 'rgba(240,253,244,0.95)', backdropFilter: 'blur(4px)' }}
    >
      <div className="text-6xl mb-4">🐍</div>
      <h1 className="text-4xl font-bold tracking-widest uppercase mb-2" style={{ color: '#16a34a' }}>
        贪吃蛇
      </h1>
      <p className="text-sm mb-1" style={{ color: '#6b7280' }}>吃食物得分，避免撞墙和自身</p>
      <p className="text-xs mb-6" style={{ color: '#6b7280' }}>⭐ 特殊食物 = +30分</p>
      <NeonButton onClick={onStart} color="#16a34a" bg="#f0fdf4" border="#bbf7d0">
        开始游戏
      </NeonButton>
      <p className="text-xs mt-4" style={{ color: '#9ca3af' }}>
        键盘 WASD / 方向键 · 空格键暂停
      </p>
    </div>
  );
}

function NeonButton({ children, onClick, color, bg, border }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 rounded-xl font-bold tracking-widest uppercase text-sm transition-all active:scale-95"
      style={{
        backgroundColor: bg,
        border: `2px solid ${border}`,
        color,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 16px rgba(0,0,0,0.12)`;
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </button>
  );
}
