import { Trash2, Check } from 'lucide-react'

export default function TodoItem({ todo, onToggle, onDelete }) {
  const fields = todo.data ?? {}
  const { title, completed } = fields

  return (
    <li className="flex items-center gap-3 py-3 group">
      {/* Custom Checkbox */}
      <button
        onClick={() => onToggle(todo)}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
          completed
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
      >
        {completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      {/* Title */}
      <span
        className={`flex-1 text-sm leading-relaxed transition-colors ${
          completed
            ? 'line-through text-gray-400'
            : 'text-gray-800'
        }`}
      >
        {title}
      </span>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
