import React from 'react'
import { CheckCircle2, Circle, Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete }) => {
  const { title, completed } = item.data

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 group
      ${completed
        ? 'bg-gray-800/40 border-gray-700/40'
        : 'bg-gray-800/70 border-gray-700/60 hover:border-indigo-500/40'
      }`}
    >
      <button
        onClick={() => onToggle(item)}
        className="flex-shrink-0 p-0 bg-transparent border-none focus:outline-none"
        aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {completed
          ? <CheckCircle2 className="w-5 h-5 text-indigo-400" />
          : <Circle className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 transition-colors" />
        }
      </button>

      <span className={`flex-1 text-sm leading-relaxed transition-all duration-200
        ${completed ? 'line-through text-gray-500' : 'text-gray-100'}`}
      >
        {title}
      </span>

      <button
        onClick={() => onDelete(item.id)}
        className="flex-shrink-0 p-1 bg-transparent border-none opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all duration-150 focus:outline-none focus:opacity-100"
        aria-label="Delete todo"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default TodoItem
