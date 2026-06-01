import { Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const TodoItem = ({ item, onToggle, onDelete, isLoading }) => {
  const fields = item?.data ?? {}

  return (
    <div
      className={cn(
        'flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-200',
        isLoading && 'opacity-50 pointer-events-none'
      )}
    >
      <button
        type="button"
        onClick={() => onToggle(item)}
        aria-label={fields.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn(
          'flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1',
          fields.completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400 bg-white'
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
          'flex-1 text-sm leading-relaxed break-words',
          fields.completed
            ? 'line-through text-gray-400'
            : 'text-gray-800'
        )}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(item.id)}
        aria-label="Delete todo"
        className="flex-shrink-0 p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default TodoItem
