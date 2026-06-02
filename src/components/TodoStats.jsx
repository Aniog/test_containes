export default function TodoStats({ activeCount, completedCount, total }) {
  const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0

  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs text-slate-400 mb-1.5">
        <span>{completedCount} of {total} completed</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-1.5">
        <div
          className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
