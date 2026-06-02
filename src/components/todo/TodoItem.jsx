import { Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete, disabled }) => {
  const fields = item?.data ?? {}

  return (
    <li className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-0 group">
      <button
        type="button"
        onClick={() => onToggle(item)}
        disabled={disabled}
        aria-label={fields.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition
          ${fields.completed
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-slate-300 hover:border-indigo-400'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {fields.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm transition ${
          fields.completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(item.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition disabled:opacity-50 disabled:cursor-not-allowed p-1 rounded-lg hover:bg-red-50"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
