export default function TodoFooter({ activeCount, completedCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100 bg-gray-50/50">
      <span className="text-xs text-gray-400">
        {activeCount} item{activeCount !== 1 ? 's' : ''} left
      </span>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-xs text-gray-400 hover:text-red-500 font-medium transition-colors"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}
