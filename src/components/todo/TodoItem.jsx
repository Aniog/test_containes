import { Trash2 } from 'lucide-react'

const TodoItem = ({ todo, onToggle, onDelete, disabled }) => {
  const fields = todo?.data ?? {}
  const isCompleted = fields.completed === true

  return (
    <li className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 group transition-shadow hover:shadow-sm">
      <button
        type="button"
        onClick={() => onToggle(todo)}
        disabled={disabled}
        aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors disabled:cursor-not-allowed ${
          isCompleted
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
      >
        {isCompleted && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed transition-colors ${
          isCompleted ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="flex-shrink-0 p-1 text-gray-300 hover:text-red-500 rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:cursor-not-allowed"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
