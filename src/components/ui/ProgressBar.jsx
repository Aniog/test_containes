export function ProgressBar({ value = 0, max = 100, color = 'gold', label, showValue = true }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  const colors = {
    gold: 'bg-[#c9a84c]',
    purple: 'bg-[#7c5cbf]',
    green: 'bg-[#4caf7d]',
    red: 'bg-[#c94c4c]',
    amber: 'bg-[#c9844c]',
    blue: 'bg-blue-500',
  }

  return (
    <div className="flex flex-col gap-1">
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && <span className="text-xs text-[#9a95a8]">{label}</span>}
          {showValue && (
            <span className="text-xs text-[#e8e4d9] font-medium">
              {value}/{max}
            </span>
          )}
        </div>
      )}
      <div className="h-2 bg-[#0d0f1a] rounded-full overflow-hidden border border-[#2a2f52]">
        <div
          className={`h-full rounded-full transition-all duration-500 ${colors[color] || colors.gold}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
