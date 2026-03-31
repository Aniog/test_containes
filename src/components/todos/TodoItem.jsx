import React from 'react'
import { Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
      <button
        onClick={() => onToggle(item)}
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
          item.data.completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
        aria-label={item.data.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {item.data.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm font-medium transition-colors ${
          item.data.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {item.data.title}
      </span>

      <button
        onClick={() => onDelete(item.id)}
        className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-all"
        aria-label="Delete todo"
      >
        <Trash2 size={15} />
      </button>
    </div>
  )
}

export default TodoItem
