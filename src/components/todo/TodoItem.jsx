import { Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const TodoItem = ({ todo, onToggle, onDelete, disabled }) => {
  const fields = todo?.data ?? {}
  const isCompleted = fields.completed === true

  return (
    <li
      className={cn(
        'group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200',
        isCompleted
          ? 'bg-slate-50 border-slate-100'
          : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-sm'
      )}
    >
      <button
        type="button"
        onClick={() => onToggle(todo)}
        disabled={disabled}
        aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn(
          'flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center',
          'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1',
          isCompleted
            ? 'bg-emerald-500 border-emerald-500'
            : 'border-slate-300 hover:border-indigo-400',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        {isCompleted && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={cn(
          'flex-1 text-sm font-medium leading-relaxed break-words',
          isCompleted ? 'line-through text-slate-400' : 'text-slate-700'
        )}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        disabled={disabled}
        aria-label="Delete todo"
        className={cn(
          'flex-shrink-0 p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50',
          'opacity-0 group-hover:opacity-100 transition-all duration-150',
          'focus:outline-none focus:ring-2 focus:ring-red-400 focus:opacity-100',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
