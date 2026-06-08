const TodoFooter = ({ total, completed, onClearCompleted, disabled }) => {
  const remaining = total - completed

  if (total === 0) return null

  return (
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
      <span className="text-xs text-slate-400">
        {remaining === 0
          ? 'All tasks complete!'
          : `${remaining} task${remaining !== 1 ? 's' : ''} remaining`}
      </span>

      {completed > 0 && (
        <button
          type="button"
          onClick={onClearCompleted}
          disabled={disabled}
          className="text-xs text-slate-400 hover:text-red-500 transition-colors disabled:opacity-50"
        >
          Clear completed ({completed})
        </button>
      )}
    </div>
  )
}

export default TodoFooter
