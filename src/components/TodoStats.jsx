const TodoStats = ({ totalCount, activeCount, completedCount, onClearCompleted }) => {
  return (
    <div className="flex items-center justify-between">
      {/* Stats */}
      <div className="flex items-center space-x-6 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <span className="font-medium">{totalCount}</span>
          <span>total</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-medium text-blue-600">{activeCount}</span>
          <span>active</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-medium text-green-600">{completedCount}</span>
          <span>completed</span>
        </div>
      </div>

      {/* Clear Completed Button */}
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
        >
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  )
}

export default TodoStats