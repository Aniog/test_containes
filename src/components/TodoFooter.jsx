export default function TodoFooter({ activeCount, completedCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 bg-gray-50 text-xs text-gray-400">
      <span>
        <span className="font-semibold text-gray-600">{activeCount}</span>{' '}
        {activeCount === 1 ? 'item' : 'items'} left
      </span>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-gray-400 hover:text-red-400 transition-colors font-medium"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}
