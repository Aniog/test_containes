
import { Check, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={cn(
        'group flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200',
        todo.completed
          ? 'bg-gray-50 border-gray-200'
          : 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-sm'
      )}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={cn(
          'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors',
          todo.completed
            ? 'bg-indigo-600 border-indigo-600 text-white'
            : 'border-gray-300 text-transparent hover:border-indigo-400'
        )}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        <Check className="w-4 h-4" />
      </button>

      <span
        className={cn(
          'flex-1 text-base transition-all duration-200',
          todo.completed
            ? 'line-through text-gray-400'
            : 'text-gray-800'
        )}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 p-1.5 rounded-md text-gray-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all"
        aria-label="Delete todo"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
