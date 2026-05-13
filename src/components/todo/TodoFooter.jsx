import React from 'react'
import { cn } from '../../lib/utils.js'

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
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3 bg-gray-50 border-t border-gray-100 text-sm text-gray-500">
      <span className="font-medium text-gray-600">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex items-center gap-1">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onFilterChange(key)}
            className={cn(
              'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-150',
              filter === key
                ? 'bg-indigo-600 text-white'
                : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="text-sm text-gray-400 hover:text-red-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
      >
        Clear completed ({completedCount})
      </button>
    </div>
  )
}
