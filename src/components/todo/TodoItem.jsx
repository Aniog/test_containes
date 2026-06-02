import { Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete, disabled }) => {
  const fields = item?.data ?? {}

  return (
    <li className="flex items-center gap-3 py-3.5 border-b border-zinc-800 last:border-0 group">
      <button
        type="button"
        onClick={() => onToggle(item)}
        disabled={disabled}
        aria-label={fields.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition
          ${fields.completed
            ? 'bg-amber-400 border-amber-400'
            : 'border-zinc-600 hover:border-amber-400'
          } disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        {fields.completed && (
          <svg className="w-3 h-3 text-zinc-900" fill="none" viewBox="0 0 12 12">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm transition ${
          fields.completed ? 'line-through text-zinc-600' : 'text-zinc-300'
        }`}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(item.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="opacity-0 group-hover:opacity-100 text-zinc-600 hover:text-rose-400 transition disabled:opacity-40 disabled:cursor-not-allowed p-1 rounded-lg hover:bg-zinc-800"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
