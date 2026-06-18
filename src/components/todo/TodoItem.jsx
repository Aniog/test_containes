import { Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const fields = todo?.data ?? {}

  return (
    <li className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors group">
      <button
        type="button"
        onClick={() => onToggle(todo)}
        aria-label={fields.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn(
          'flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors',
          fields.completed
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-slate-300 hover:border-indigo-400 bg-white'
        )}
      >
        {fields.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <span
        className={cn(
          'flex-1 text-sm',
          fields.completed ? 'line-through text-slate-400' : 'text-slate-700'
        )}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1 rounded text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
