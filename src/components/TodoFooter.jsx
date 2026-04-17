export default function TodoFooter({ activeCount, completedCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500">
      <span>
        <span className="font-semibold text-gray-700">{activeCount}</span>{' '}
        {activeCount === 1 ? 'item' : 'items'} left
      </span>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-xs text-red-400 hover:text-red-600 font-medium transition"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}
