import { Trash2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

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
        className={cn(
          'flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors',
          isCompleted
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-slate-300 hover:border-indigo-400 bg-white'
        )}
      >
        {isCompleted && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      <span
        className={cn(
          'flex-1 text-sm leading-relaxed break-words',
          isCompleted ? 'line-through text-slate-400' : 'text-slate-700'
        )}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(item.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="flex-shrink-0 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 p-1 rounded"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
