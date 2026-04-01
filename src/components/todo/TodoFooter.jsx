import React from 'react'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

const TodoFooter = ({ activeCount, completedCount, filter, onFilterChange, onClearCompleted }) => {
  const total = activeCount + completedCount

  if (total === 0) return null

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-gray-100 bg-gray-50/60">
      {/* Item count */}
      <span className="text-xs text-gray-500 order-2 sm:order-1">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      {/* Filter tabs */}
      <div className="flex items-center gap-1 order-1 sm:order-2">
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => onFilterChange(f.key)}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              filter === f.key
                ? 'bg-violet-600 text-white'
                : 'text-gray-500 hover:text-violet-600 hover:bg-violet-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Clear completed */}
      <div className="order-3">
        {completedCount > 0 ? (
          <button
            onClick={onClearCompleted}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors"
          >
            Clear completed ({completedCount})
          </button>
        ) : (
          <span className="text-xs text-transparent select-none">placeholder</span>
        )}
      </div>
    </div>
  )
}

export default TodoFooter
