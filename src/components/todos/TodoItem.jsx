import React from 'react'
import { Check, Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete }) => {
  const { title, completed } = item.data

  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm group hover:shadow-md transition-shadow duration-200">
      <button
        onClick={() => onToggle(item)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
          completed
            ? 'bg-emerald-500 border-emerald-500'
            : 'border-gray-300 hover:border-emerald-400'
        }`}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {completed && <Check size={13} className="text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm font-medium transition-colors duration-200 ${
          completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {title}
      </span>

      <button
        onClick={() => onDelete(item.id)}
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all duration-200"
        aria-label="Delete todo"
      >
        <Trash2 size={15} />
      </button>
    </div>
  )
}

export default TodoItem
