import React from 'react'

const TodoFilter = ({ currentFilter, onFilterChange, onClearCompleted, hasCompletedTodos }) => {
  const filters = [
    { key: 'all', label: 'All', icon: '📋' },
    { key: 'active', label: 'Active', icon: '⏳' },
    { key: 'completed', label: 'Completed', icon: '✅' }
  ]

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Filter Buttons */}
      <div className="flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
              currentFilter === filter.key
                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                : 'text-gray-600 hover:bg-gray-100 border border-transparent'
            }`}
          >
            <span>{filter.icon}</span>
            {filter.label}
          </button>
        ))}
      </div>

      {/* Clear Completed Button */}
      {hasCompletedTodos && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 border border-red-200 hover:border-red-300"
        >
          Clear Completed
        </button>
      )}
    </div>
  )
}

export default TodoFilter