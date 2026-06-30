const STATUS_LABELS = { all: 'All', todo: 'To Do', in_progress: 'In Progress', done: 'Done' }
const PRIORITY_LABELS = { all: 'All', high: 'High', medium: 'Medium', low: 'Low' }

export default function FilterBar({
  statusFilter, priorityFilter,
  onStatusChange, onPriorityChange,
  statusFilters, priorityFilters,
  counts,
}) {
  return (
    <div className="mb-4 flex flex-col gap-3">
      {/* Status tabs */}
      <div className="flex gap-1 bg-white border border-slate-200 rounded-xl p-1">
        {statusFilters.map((s) => (
          <button
            key={s}
            onClick={() => onStatusChange(s)}
            className={`flex-1 text-xs font-medium py-1.5 px-2 rounded-lg transition-colors ${
              statusFilter === s
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {STATUS_LABELS[s]}
            {s !== 'all' && counts[s] > 0 && (
              <span className={`ml-1 text-xs ${statusFilter === s ? 'text-indigo-200' : 'text-slate-400'}`}>
                {counts[s]}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Priority filter */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Priority:</span>
        <div className="flex gap-1">
          {priorityFilters.map((p) => (
            <button
              key={p}
              onClick={() => onPriorityChange(p)}
              className={`text-xs font-medium py-1 px-3 rounded-full border transition-colors ${
                priorityFilter === p
                  ? 'bg-slate-800 text-white border-slate-800'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
              }`}
            >
              {PRIORITY_LABELS[p]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
