const TodoItem = ({ todo, onToggle, onDelete }) => {
  const { id, text, completed } = todo

  return (
    <li
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
        completed
          ? 'bg-slate-800 border-slate-700 opacity-60'
          : 'bg-slate-700 border-slate-600'
      }`}
    >
      <button
        onClick={() => onToggle(id)}
        aria-label={completed ? 'Mark as active' : 'Mark as completed'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          completed
            ? 'bg-emerald-500 border-emerald-500'
            : 'border-slate-500 hover:border-violet-400'
        }`}
      >
        {completed && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed break-words ${
          completed ? 'line-through text-slate-400' : 'text-slate-100'
        }`}
      >
        {text}
      </span>

      <button
        onClick={() => onDelete(id)}
        aria-label="Delete todo"
        className="flex-shrink-0 p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-600 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  )
}

export default TodoItem
