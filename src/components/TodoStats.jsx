const TodoStats = ({ totalCount, completedCount, onClearCompleted }) => {
  const remainingCount = totalCount - completedCount

  if (totalCount === 0) {
    return null
  }

  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
      {/* Stats */}
      <div className="flex items-center gap-6 text-sm">
        <span className="text-gray-600">
          <span className="font-semibold text-indigo-600">{totalCount}</span> total
        </span>
        <span className="text-gray-600">
          <span className="font-semibold text-green-600">{completedCount}</span> completed
        </span>
        <span className="text-gray-600">
          <span className="font-semibold text-orange-600">{remainingCount}</span> remaining
        </span>
      </div>

      {/* Clear Completed Button */}
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200 font-medium"
        >
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  )
}

export default TodoStats