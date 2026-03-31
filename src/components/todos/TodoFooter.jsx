import React from 'react'
import { Trash2 } from 'lucide-react'

const FILTERS = ['All', 'Active', 'Completed']

const TodoFooter = ({ total, activeCount, completedCount, filter, onFilterChange, onClearCompleted }) => {
  if (total === 0) return null

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">
      <span className="text-xs text-gray-400 font-medium">
        {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
      </span>

      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 ${
              filter === f
                ? 'bg-white text-emerald-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <Trash2 size={13} />
        Clear completed
      </button>
    </div>
  )
}

export default TodoFooter
