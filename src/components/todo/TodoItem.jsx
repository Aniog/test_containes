import { Trash2, Check } from 'lucide-react'

export default function TodoItem({ item, onToggle, onDelete }) {
  const { title, completed } = item.data

  return (
    <li className="flex items-center gap-3 px-6 py-4 group hover:bg-gray-50 transition-colors">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(item)}
        aria-label={completed ? 'Mark as active' : 'Mark as completed'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
          completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
      >
        {completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      {/* Title */}
      <span
        className={`flex-1 text-sm leading-relaxed break-words ${
          completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {title}
      </span>

      {/* Delete button */}
      <button
        onClick={() => onDelete(item.id)}
        aria-label="Delete todo"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all focus:outline-none focus:opacity-100 focus:ring-2 focus:ring-red-300"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
