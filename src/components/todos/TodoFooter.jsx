import React from 'react'

const FILTERS = ['all', 'active', 'completed']

const TodoFooter = ({ todos, filter, onFilterChange, onClearCompleted }) => {
  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
      <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>

      <div className="flex gap-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1 rounded-md capitalize transition ${
              filter === f
                ? 'bg-indigo-100 text-indigo-700 font-medium'
                : 'hover:bg-slate-100 text-slate-500'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
      >
        Clear completed ({completedCount})
      </button>
    </div>
  )
}

export default TodoFooter
