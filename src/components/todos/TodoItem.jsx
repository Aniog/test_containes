import React from 'react'
import { Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete }) => {
  const { id, data } = item
  const { title, completed } = data || {}

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition group ${completed ? 'bg-slate-50 border-slate-100' : 'bg-white border-slate-200 shadow-sm'}`}>
      <button
        onClick={() => onToggle(id, !completed)}
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition ${
          completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-slate-300 hover:border-indigo-400'
        }`}
        aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span className={`flex-1 text-sm ${completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
        {title}
      </span>

      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 rounded transition"
        aria-label="Delete todo"
      >
        <Trash2 size={15} />
      </button>
    </div>
  )
}

export default TodoItem
