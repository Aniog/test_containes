import React from 'react'
import { Trash2, Check } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete }) => {
  const { title, completed } = item.data

  return (
    <li className="flex items-center gap-3 px-4 py-3.5 group hover:bg-gray-50 transition-colors duration-100">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(item)}
        aria-label={completed ? 'Mark as active' : 'Mark as completed'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
          completed
            ? 'bg-violet-500 border-violet-500 text-white'
            : 'border-gray-300 hover:border-violet-400'
        }`}
      >
        {completed && <Check size={13} strokeWidth={3} />}
      </button>

      {/* Title */}
      <span
        className={`flex-1 text-sm leading-relaxed transition-all duration-150 ${
          completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {title}
      </span>

      {/* Delete */}
      <button
        onClick={() => onDelete(item.id)}
        aria-label="Delete todo"
        className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-150"
      >
        <Trash2 size={15} />
      </button>
    </li>
  )
}

export default TodoItem
