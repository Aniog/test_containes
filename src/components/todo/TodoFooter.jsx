const TodoFooter = ({ totalCount, completedCount, onClearCompleted }) => {
  const remainingCount = totalCount - completedCount

  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 border-t border-slate-100">
      <span className="text-sm text-slate-500">
        {remainingCount} item{remainingCount !== 1 ? 's' : ''} left
      </span>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-red-500 hover:text-red-700 focus:outline-none focus:underline transition-colors"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}

export default TodoFooter