export default function TodoFooter({
  activeCount,
  completedCount,
  filter,
  filters,
  onFilterChange,
  onClearCompleted,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 bg-gray-50 border-t border-gray-100 text-sm text-gray-500">
      {/* Item count */}
      <span className="min-w-[80px]">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      {/* Filter tabs */}
      <div className="flex gap-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1 rounded-md font-medium transition-colors ${
              filter === f
                ? 'bg-indigo-100 text-indigo-600'
                : 'hover:bg-gray-200 text-gray-500'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Clear completed */}
      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="min-w-[80px] text-right hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        Clear completed
      </button>
    </div>
  )
}
