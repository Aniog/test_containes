const TodoStats = ({
  totalCount,
  activeCount,
  completedCount,
  filter,
  onFilterChange,
  onClearCompleted
}) => {
  const filters = [
    { key: 'all', label: 'All', count: totalCount },
    { key: 'active', label: 'Active', count: activeCount },
    { key: 'completed', label: 'Completed', count: completedCount }
  ]

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Stats */}
      <div className="flex items-center gap-6 text-sm text-gray-600">
        <span className="font-medium">
          {totalCount} {totalCount === 1 ? 'item' : 'items'} total
        </span>
        <span>
          {activeCount} active
        </span>
        <span>
          {completedCount} completed
        </span>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {filters.map((filterOption) => (
          <button
            key={filterOption.key}
            onClick={() => onFilterChange(filterOption.key)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === filterOption.key
                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                : 'text-gray-600 hover:bg-gray-100 border border-transparent'
            }`}
          >
            {filterOption.label}
            <span className="ml-1 text-xs opacity-75">
              ({filterOption.count})
            </span>
          </button>
        ))}
      </div>

      {/* Clear Completed Button */}
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 border border-red-200 hover:border-red-300"
        >
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  )
}

export default TodoStats