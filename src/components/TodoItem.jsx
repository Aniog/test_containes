import { Trash2, Check } from 'lucide-react'
import { cn } from '../lib/utils.js'

export default function TodoItem({ todo, onToggle, onDelete }) {
  const fields = todo.data ?? {}
  const isCompleted = fields.completed ?? false

  return (
    <li
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-xl border transition-all group',
        isCompleted
          ? 'bg-gray-50 border-gray-100'
          : 'bg-white border-gray-100 hover:border-indigo-200 hover:shadow-sm'
      )}
    >
      {/* Checkbox */}
      <button
        type="button"
        onClick={() => onToggle(todo)}
        aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn(
          'flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors',
          isCompleted
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400'
        )}
      >
        {isCompleted && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      {/* Title */}
      <span
        className={cn(
          'flex-1 text-sm leading-relaxed transition-colors',
          isCompleted ? 'line-through text-gray-400' : 'text-gray-800'
        )}
      >
        {fields.title}
      </span>

      {/* Delete */}
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
