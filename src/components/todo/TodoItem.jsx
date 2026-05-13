import React from 'react'
import { Trash2, Check } from 'lucide-react'
import { cn } from '../../lib/utils.js'

export default function TodoItem({ todo, onToggle, onDelete }) {
  const fields = todo.data ?? {}
  const completed = fields.completed ?? false

  return (
    <li className="flex items-center gap-3 px-5 py-3.5 group hover:bg-gray-50 transition-colors duration-100">
      <button
        type="button"
        onClick={() => onToggle(todo)}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn(
          'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-150',
          completed
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-gray-300 hover:border-indigo-400'
        )}
      >
        {completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        className={cn(
          'flex-1 text-base transition-colors duration-150',
          completed ? 'line-through text-gray-400' : 'text-gray-700'
        )}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all duration-150 p-1 rounded"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
