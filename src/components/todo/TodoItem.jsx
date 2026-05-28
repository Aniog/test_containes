import React from 'react'
import { Trash2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const TodoItem = ({ item, onToggle, onDelete }) => {
  const fields = item.data || {}

  return (
    <li className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-slate-200 group hover:shadow-sm transition-all">
      <button
        onClick={() => onToggle(item)}
        className={cn(
          "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
          fields.completed
            ? "bg-emerald-500 border-emerald-500"
            : "border-slate-300 hover:border-purple-400"
        )}
        aria-label={fields.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {fields.completed && <Check className="w-4 h-4 text-white" />}
      </button>

      <span
        className={cn(
          "flex-1 text-base transition-all",
          fields.completed
            ? "line-through text-slate-400"
            : "text-slate-900"
        )}
      >
        {fields.title}
      </span>

      <button
        onClick={() => onDelete(item.id)}
        className="flex-shrink-0 p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all"
        aria-label="Delete todo"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
