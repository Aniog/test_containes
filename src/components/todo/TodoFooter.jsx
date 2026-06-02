const FILTERS = ['All', 'Active', 'Completed']

const TodoFooter = ({ total, completedCount, filter, onFilterChange, onClearCompleted, disabled }) => {
  const activeCount = total - completedCount

  return (
    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span className="text-xs text-slate-400 order-2 sm:order-1">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex gap-1 order-1 sm:order-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1 text-xs font-medium rounded-md transition ${
              filter === f
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onClearCompleted}
        disabled={disabled || completedCount === 0}
        className="text-xs text-slate-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition order-3"
      >
        Clear completed ({completedCount})
      </button>
    </div>
  )
}

export default TodoFooter
