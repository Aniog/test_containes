import React from 'react'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

export default function TodoFooter({
  activeCount,
  completedCount,
  filter,
  onFilterChange,
  onClearCompleted,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-5 py-3 bg-gray-50 border-t border-gray-100 text-sm text-gray-400">
      <span className="text-gray-500">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex gap-1">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onFilterChange(key)}
            className={`px-3 py-1 rounded-lg transition-colors font-medium ${
              filter === key
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-400 hover:text-indigo-500 hover:bg-indigo-50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="text-gray-400 hover:text-red-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        Clear completed
      </button>
    </div>
  )
}
