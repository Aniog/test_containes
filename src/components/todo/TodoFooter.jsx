export default function TodoFooter({ activeCount, completedCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-t border-gray-700/60">
      <span className="text-sm text-gray-400">
        {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
      </span>
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-gray-400 hover:text-red-400 transition px-2 py-1 rounded-lg hover:bg-red-400/10"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}
