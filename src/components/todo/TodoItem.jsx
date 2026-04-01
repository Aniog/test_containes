import React from 'react'
import { Trash2, Check } from 'lucide-react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const { id, data } = todo
  const completed = data?.completed ?? false
  const title = data?.title ?? ''

  return (
    <li className="flex items-center gap-3 px-5 py-3.5 group hover:bg-gray-50 transition-colors">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(id, completed)}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          completed
            ? 'bg-violet-600 border-violet-600'
            : 'border-gray-300 hover:border-violet-400'
        }`}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {completed && <Check size={11} className="text-white" strokeWidth={3} />}
      </button>

      {/* Title */}
      <span
        className={`flex-1 text-sm transition-colors ${
          completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {title}
      </span>

      {/* Delete */}
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all p-1 rounded"
        aria-label="Delete task"
      >
        <Trash2 size={15} />
      </button>
    </li>
  )
}

export default TodoItem
