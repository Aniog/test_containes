import { Trash2 } from 'lucide-react'
import { cn } from '../../lib/utils.js'

const TodoItem = ({ todo, onToggle, onDelete, disabled }) => {
  return (
    <li className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-slate-100 shadow-sm group transition hover:shadow-md">
      <button
        onClick={() => onToggle(todo)}
        disabled={disabled}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn(
          'w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-indigo-400',
          todo.completed
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-slate-300 hover:border-indigo-400'
        )}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <span
        className={cn(
          'flex-1 text-sm leading-relaxed break-words',
          todo.completed ? 'line-through text-slate-400' : 'text-slate-700'
        )}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition focus:outline-none focus:ring-2 focus:ring-red-300 disabled:opacity-30"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
