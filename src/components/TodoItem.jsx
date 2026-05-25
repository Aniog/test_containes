import React from 'react'
import { Trash2 } from 'lucide-react'
import { Checkbox } from './ui/checkbox'

export default function TodoItem({ todo, onToggle, onDelete, disabled }) {
  const fields = todo?.data ?? todo
  const isCompleted = fields.completed

  return (
    <li className="group flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors">
      <Checkbox
        checked={isCompleted}
        onCheckedChange={() => onToggle(todo)}
        disabled={disabled}
        className="shrink-0"
      />
      <span
        className={`flex-1 text-sm transition-all ${
          isCompleted
            ? 'text-slate-400 line-through'
            : 'text-slate-900'
        }`}
      >
        {fields.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        disabled={disabled}
        className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-1.5 rounded-md text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all disabled:opacity-30"
        aria-label="Delete todo"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
