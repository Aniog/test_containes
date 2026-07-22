export default function TodoFilter({
  filter,
  setFilter,
  priorityFilter,
  setPriorityFilter,
  completedCount,
  onClearCompleted,
}) {
  const statusTabs = [
    { value: 'all', label: '全部' },
    { value: 'active', label: '待完成' },
    { value: 'completed', label: '已完成' },
  ]

  const priorityTabs = [
    { value: 'all', label: '全部优先级' },
    { value: 'high', label: '高' },
    { value: 'medium', label: '中' },
    { value: 'low', label: '低' },
  ]

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
      {/* Status filter */}
      <div className="flex gap-1 bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
        {statusTabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setFilter(tab.value)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filter === tab.value
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {/* Priority filter */}
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="h-8 px-2 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        >
          {priorityTabs.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>

        {/* Clear completed */}
        {completedCount > 0 && (
          <button
            type="button"
            onClick={onClearCompleted}
            className="h-8 px-3 rounded-lg border border-slate-200 text-xs text-slate-500 bg-white hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors shadow-sm"
          >
            清除已完成 ({completedCount})
          </button>
        )}
      </div>
    </div>
  )
}
