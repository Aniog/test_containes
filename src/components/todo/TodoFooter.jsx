import React from 'react'

export default function TodoFooter({
  activeCount,
  completedCount,
  filter,
  filters,
  onFilterChange,
  onClearCompleted,
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 flex-wrap gap-2">
      <span className="font-medium">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex items-center gap-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1 rounded-md capitalize transition-colors ${
              filter === f
                ? 'bg-indigo-100 text-indigo-700 font-semibold'
                : 'hover:bg-gray-200 text-gray-500'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="text-gray-400 hover:text-red-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Clear completed ({completedCount})
      </button>
    </div>
  )
}
