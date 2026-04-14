import { Trash2 } from 'lucide-react'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 px-4 py-3 group hover:bg-gray-50 transition-colors">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
          todo.completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm transition-colors ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all p-1 rounded"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
