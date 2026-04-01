import React from 'react'

const FILTERS = ['All', 'Active', 'Completed']

const TodoFooter = ({ total, completedCount, filter, onFilterChange, onClearCompleted }) => {
  const activeCount = total - completedCount

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
      <span className="text-xs text-slate-400 order-2 sm:order-1">
        {activeCount} item{activeCount !== 1 ? 's' : ''} left
      </span>

      <div className="flex gap-1 order-1 sm:order-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
              filter === f
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="text-xs text-slate-400 hover:text-red-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors order-3"
      >
        Clear completed
      </button>
    </div>
  )
}

export default TodoFooter
