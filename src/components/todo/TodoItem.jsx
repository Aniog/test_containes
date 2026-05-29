import { Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete, disabled }) => {
  const fields = item?.data ?? {}
  const isCompleted = fields.completed === true

  return (
    <li className="flex items-center gap-3 px-4 py-3 group">
      <button
        type="button"
        onClick={() => onToggle(item)}
        disabled={disabled}
        aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition
          ${isCompleted
            ? 'bg-violet-600 border-violet-600'
            : 'border-slate-300 hover:border-violet-400'
          } disabled:opacity-50`}
      >
        {isCompleted && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm transition ${
          isCompleted ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(item.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition disabled:opacity-50"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
