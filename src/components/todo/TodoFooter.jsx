export default function TodoFooter({ activeCount, completedCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-500">
      <span className="font-medium">
        {activeCount} item{activeCount !== 1 ? 's' : ''} left
      </span>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-gray-400 hover:text-red-500 font-medium transition-colors focus:outline-none focus:underline"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}
