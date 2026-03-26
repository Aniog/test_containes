import React from 'react'
import { Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete }) => {
  const { id, data: fields } = item

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 group">
      <input
        type="checkbox"
        checked={fields?.completed || false}
        onChange={() => onToggle(item)}
        className="w-5 h-5 rounded accent-violet-500 cursor-pointer flex-shrink-0"
      />
      <span
        className={`flex-1 text-sm font-medium break-words ${
          fields?.completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {fields?.title}
      </span>
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-150"
        aria-label="Delete todo"
      >
        <Trash2 size={15} />
      </button>
    </div>
  )
}

export default TodoItem
