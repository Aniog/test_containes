import React, { useState, useRef, useEffect } from 'react'
import { Trash2, Check } from 'lucide-react'

export default function TodoItem({ item, onToggle, onDelete }) {
  const { title, completed } = item.data ?? {}
  const [hovered, setHovered] = useState(false)

  return (
    <li
      className="flex items-center gap-3 px-4 py-3 group hover:bg-gray-50 transition-colors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={() => onToggle(item)}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
      >
        {completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed break-words ${
          completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {title}
      </span>

      <button
        onClick={() => onDelete(item.id)}
        aria-label="Delete todo"
        className={`w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all flex-shrink-0 ${
          hovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
