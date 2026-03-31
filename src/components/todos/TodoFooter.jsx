import React from 'react'
import { Trash2 } from 'lucide-react'

const FILTERS = ['All', 'Active', 'Completed']

const TodoFooter = ({ total, completedCount, filter, onFilterChange, onClearCompleted }) => {
  const activeCount = total - completedCount

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
      <span className="text-xs text-slate-400 font-medium">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all duration-150
              ${filter === f
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
        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-500 transition-colors duration-150
          disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Trash2 size={13} />
        Clear completed
      </button>
    </div>
  )
}

export default TodoFooter
