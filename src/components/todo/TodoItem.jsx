import { Check, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const fields = todo?.data ?? {}
  const isCompleted = fields.completed === true

  return (
    <li className="flex items-center gap-3 py-3 px-4 group border-b border-slate-100 last:border-b-0">
      {/* Checkbox */}
      <button
        type="button"
        onClick={() => onToggle(todo)}
        aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn(
          'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200',
          isCompleted
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-slate-300 hover:border-indigo-400 bg-white'
        )}
      >
        {isCompleted && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      {/* Title */}
      <span
        className={cn(
          'flex-1 text-base transition-all duration-200',
          isCompleted
            ? 'text-slate-400 line-through'
            : 'text-slate-700 font-medium'
        )}
      >
        {fields.title}
      </span>

      {/* Delete button */}
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
        className="flex-shrink-0 p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all duration-150"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
