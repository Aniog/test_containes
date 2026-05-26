import { Trash2, Check } from 'lucide-react'
import { cn } from '../../lib/utils.js'

const TodoItem = ({ todo, onToggle, onDelete, disabled }) => {
  const fields = todo?.data ?? {}
  const isCompleted = fields.completed === true

  return (
    <li className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-sm group transition-all">
      <button
        onClick={() => onToggle(todo)}
        disabled={disabled}
        aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn(
          'flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors',
          isCompleted
            ? 'bg-violet-600 border-violet-600'
            : 'border-slate-300 hover:border-violet-400'
        )}
      >
        {isCompleted && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      <span
        className={cn(
          'flex-1 text-sm transition-colors',
          isCompleted ? 'text-slate-400 line-through' : 'text-slate-700'
        )}
      >
        {fields.title}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="flex-shrink-0 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
