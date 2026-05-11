import React, { useState } from 'react'

export default function TodoItem({ todo, onToggle, onDelete }) {
  const [hovered, setHovered] = useState(false)
  const fields = todo.data ?? {}
  const completed = fields.completed ?? false

  return (
    <li
      className="flex items-center px-5 py-4 group hover:bg-gray-50 transition-colors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={() => onToggle(todo)}
        aria-label={completed ? 'Mark as active' : 'Mark as completed'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors mr-4 ${
          completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
      >
        {completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-base transition-colors ${
          completed ? 'line-through text-gray-300' : 'text-gray-700'
        }`}
      >
        {fields.title}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
        className={`flex-shrink-0 ml-3 text-gray-300 hover:text-red-400 transition-colors text-xl leading-none font-light ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ×
      </button>
    </li>
  )
}
