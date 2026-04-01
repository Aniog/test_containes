import React from 'react'
import { Trash2, Check } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete, disabled }) => {
  const { id, data } = item
  const { title, completed } = data || {}

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
        completed
          ? 'bg-slate-50 border-slate-100'
          : 'bg-white border-slate-200 shadow-sm'
      }`}
    >
      <button
        onClick={() => onToggle(id, { title, completed: !completed })}
        disabled={disabled}
        aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          completed
            ? 'bg-indigo-500 border-indigo-500 text-white'
            : 'border-slate-300 hover:border-indigo-400'
        } disabled:opacity-50`}
      >
        {completed && <Check size={13} strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed ${
          completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {title}
      </span>

      <button
        onClick={() => onDelete(id)}
        disabled={disabled}
        aria-label="Delete todo"
        className="flex-shrink-0 p-1.5 text-slate-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
      >
        <Trash2 size={15} />
      </button>
    </div>
  )
}

export default TodoItem
