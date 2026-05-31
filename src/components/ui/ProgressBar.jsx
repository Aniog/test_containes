export function ProgressBar({ value = 0, max = 100, color = 'gold', label, showValue = true }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  const colors = {
    gold: 'bg-[#f0b830]',
    purple: 'bg-[#8b5cf6]',
    green: 'bg-[#34d399]',
    red: 'bg-[#f04040]',
    amber: 'bg-[#f09030]',
    blue: 'bg-blue-500',
  }

  return (
    <div className="flex flex-col gap-1">
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && <span className="text-xs text-[#9890b8]">{label}</span>}
          {showValue && (
            <span className="text-xs text-[#f0ecff] font-medium">
              {value}/{max}
            </span>
          )}
        </div>
      )}
      <div className="h-2 bg-[#09080e] rounded-full overflow-hidden border border-[#2e2650]">
        <div
          className={`h-full rounded-full transition-all duration-500 ${colors[color] || colors.gold}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
