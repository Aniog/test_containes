import React from 'react'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

export default function TodoFooter({ activeCount, completedCount, filter, onFilterChange, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-t border-gray-100 text-sm text-gray-400 flex-wrap gap-2">
      <span className="min-w-[80px]">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex gap-1">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`px-3 py-1 rounded-lg border transition-colors ${
              filter === key
                ? 'border-indigo-400 text-indigo-600 bg-white'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="min-w-[80px] text-right text-gray-400 hover:text-red-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        Clear completed
      </button>
    </div>
  )
}
