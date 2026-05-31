export default function TodoFooter({ activeCount, completedCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between text-xs text-gray-500">
      <span>
        <span className="font-semibold text-gray-700">{activeCount}</span>{' '}
        {activeCount === 1 ? 'item' : 'items'} left
      </span>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-xs text-gray-500 hover:text-red-500 transition-colors font-medium"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}
