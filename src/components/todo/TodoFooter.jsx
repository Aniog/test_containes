const TodoFooter = ({ total, completed, onClearCompleted, disabled }) => {
  const remaining = total - completed

  if (total === 0) return null

  return (
    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
      <span className="text-xs text-gray-400">
        {remaining === 0
          ? 'All tasks complete!'
          : `${remaining} task${remaining !== 1 ? 's' : ''} remaining`}
      </span>

      {completed > 0 && (
        <button
          type="button"
          onClick={onClearCompleted}
          disabled={disabled}
          className="text-xs text-gray-400 hover:text-red-500 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear completed ({completed})
        </button>
      )}
    </div>
  )
}

export default TodoFooter
