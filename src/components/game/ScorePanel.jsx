export default function ScorePanel({ score, highScore, level }) {
  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <StatBox label="分数" value={score} color="#16a34a" bg="#f0fdf4" border="#bbf7d0" />
      <StatBox label="等级" value={level} color="#0284c7" bg="#f0f9ff" border="#bae6fd" />
      <StatBox label="最高分" value={highScore} color="#d97706" bg="#fffbeb" border="#fde68a" />
    </div>
  );
}

function StatBox({ label, value, color, bg, border }) {
  return (
    <div
      className="flex-1 flex flex-col items-center py-3 px-2 rounded-xl"
      style={{
        backgroundColor: bg,
        border: `1px solid ${border}`,
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      <span
        className="text-xs font-bold tracking-widest uppercase mb-1"
        style={{ color: '#9ca3af' }}
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
