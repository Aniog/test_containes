import { Trash2, Check } from 'lucide-react'

const TodoItem = ({ todo, onToggle, onDelete, disabled }) => {
  const { title, completed } = todo.data

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all group
        ${completed
          ? 'bg-white/5 border-white/10 opacity-60'
          : 'bg-white/10 border-white/20 hover:bg-white/15'
        }`}
    >
      <button
        onClick={() => onToggle(todo)}
        disabled={disabled}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
          ${completed
            ? 'bg-violet-500 border-violet-500'
            : 'border-white/40 hover:border-violet-400'
          } disabled:cursor-not-allowed`}
      >
        {completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-base leading-snug break-words
          ${completed ? 'line-through text-white/40' : 'text-white'}`}
      >
        {title}
      </span>

      <button
        onClick={() => onDelete(todo)}
        disabled={disabled}
        aria-label="Delete task"
        className="flex-shrink-0 p-1.5 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-400/10 opacity-0 group-hover:opacity-100 transition-all disabled:cursor-not-allowed"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default TodoItem
