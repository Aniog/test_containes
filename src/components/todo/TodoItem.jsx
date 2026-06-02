import { Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete, disabled }) => {
  const fields = item?.data ?? {}
  const isCompleted = fields.completed === true

  return (
    <li className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-b-0 group">
      <button
        type="button"
        onClick={() => onToggle(item)}
        disabled={disabled}
        aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition
          ${isCompleted
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-slate-300 hover:border-indigo-400 bg-white'
          } disabled:opacity-50`}
      >
        {isCompleted && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed break-words ${
          isCompleted ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(item.id)}
        disabled={disabled}
        aria-label="Delete todo"
        className="flex-shrink-0 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-30"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
