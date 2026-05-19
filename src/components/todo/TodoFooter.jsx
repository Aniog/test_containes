const TodoFooter = ({ activeCount, completedCount, onClearCompleted }) => (
  <div className="flex items-center justify-between pt-2 border-t border-slate-700">
    <span className="text-xs text-slate-400">
      {activeCount} {activeCount === 1 ? 'item' : 'items'} left
    </span>
    {completedCount > 0 && (
      <button
        onClick={onClearCompleted}
        className="text-xs text-slate-400 hover:text-red-400 transition-colors"
      >
        Clear completed ({completedCount})
      </button>
    )}
  </div>
)

export default TodoFooter
