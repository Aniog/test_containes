export default function ScorePanel({ score, highScore, level }) {
  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <StatBox label="分数" value={score} color="#39ff14" />
      <StatBox label="等级" value={level} color="#00f5ff" />
      <StatBox label="最高分" value={highScore} color="#ffd60a" />
    </div>
  );
}

function StatBox({ label, value, color }) {
  return (
    <div
      className="flex-1 flex flex-col items-center py-3 px-2 rounded-xl"
      style={{
        backgroundColor: '#12121a',
        border: `1px solid ${color}22`,
        boxShadow: `0 0 12px ${color}15`,
      }}
    >
      <span
        className="text-xs font-bold tracking-widest uppercase mb-1"
        style={{ color: '#6b6b8a' }}
      >
        {label}
      </span>
      <span
        className="font-mono text-2xl font-bold tabular-nums"
        style={{ color }}
      >
        {value}
      </span>
    </div>
  );
}
