const TodoStats = ({ activeCount, completedCount, onClearCompleted }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6 text-sm text-gray-600">
        <span className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="font-medium">{activeCount}</span>
          <span>active</span>
        </span>
        <span className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="font-medium">{completedCount}</span>
          <span>completed</span>
        </span>
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium"
        >
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  )
}

export default TodoStats