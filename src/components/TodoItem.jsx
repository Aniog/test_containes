import { Trash2 } from 'lucide-react'

const TodoItem = ({ todo, onToggle, onDelete, disabled }) => {
  return (
    <li className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm group transition hover:shadow-md">
      <button
        onClick={() => onToggle(todo.id, !todo.completed)}
        disabled={disabled}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition
          ${todo.completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed break-words ${
          todo.completed
            ? 'line-through text-gray-400 dark:text-gray-500'
            : 'text-gray-700 dark:text-gray-200'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        disabled={disabled}
        aria-label="Delete todo"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
