import React from 'react'
import { Trash2, Check } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete }) => {
  const { title, completed } = item.data

  return (
    <div
      className={`group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${
        completed
          ? 'bg-slate-50 border-slate-100'
          : 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
      }`}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(item)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          completed
            ? 'bg-emerald-500 border-emerald-500'
            : 'border-slate-300 hover:border-emerald-400'
        }`}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {completed && <Check size={13} className="text-white" strokeWidth={3} />}
      </button>

      {/* Title */}
      <span
        className={`flex-1 text-sm font-medium transition-all duration-200 ${
          completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {title}
      </span>

      {/* Delete */}
      <button
        onClick={() => onDelete(item.id)}
        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all duration-150"
        aria-label="Delete todo"
      >
        <Trash2 size={15} />
      </button>
    </div>
  )
}

export default TodoItem
