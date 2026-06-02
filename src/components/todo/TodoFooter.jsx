const FILTERS = ['all', 'active', 'completed']

const TodoFooter = ({ todos, filter, onFilterChange, onClearCompleted }) => {
  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
      <span className="text-xs text-slate-500 font-medium">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md capitalize transition-all ${
              filter === f
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="text-xs text-slate-500 hover:text-red-500 font-medium transition disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Clear completed ({completedCount})
      </button>
    </div>
  )
}

export default TodoFooter
