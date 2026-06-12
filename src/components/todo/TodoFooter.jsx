export default function TodoFooter({ activeCount, completedCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between pt-1">
      <span className="text-xs text-slate-400">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      {completedCount > 0 && (
        <button
          type="button"
          onClick={onClearCompleted}
          className="text-xs text-slate-400 hover:text-red-500 transition-colors font-medium"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}
