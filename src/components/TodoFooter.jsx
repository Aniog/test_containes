export default function TodoFooter({ activeCount, completedCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
      <span className="text-xs text-gray-400">
        {activeCount} item{activeCount !== 1 ? 's' : ''} left
      </span>

      {completedCount > 0 && (
        <button
          type="button"
          onClick={onClearCompleted}
          className="text-xs text-gray-400 hover:text-red-500 transition-colors underline underline-offset-2"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}
