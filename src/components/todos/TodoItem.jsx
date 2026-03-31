import React from 'react'
import { Check, Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete }) => {
  const { title, completed } = item.data || {}

  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
      <button
        onClick={() => onToggle(item)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          completed
            ? 'bg-emerald-500 border-emerald-500'
            : 'border-slate-300 hover:border-emerald-400'
        }`}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {completed && <Check size={13} className="text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm font-medium transition-colors ${
          completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {title}
      </span>

      <button
        onClick={() => onDelete(item.id)}
        className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
        aria-label="Delete todo"
      >
        <Trash2 size={15} />
      </button>
    </div>
  )
}

export default TodoItem
