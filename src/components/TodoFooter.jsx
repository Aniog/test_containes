export default function TodoFooter({ activeCount, completedCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 text-xs text-gray-500">
      <span>
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-gray-500 hover:text-red-500 transition-colors font-medium"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}
