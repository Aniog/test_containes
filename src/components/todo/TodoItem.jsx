import React from 'react'
import { Trash2, Check } from 'lucide-react'

export default function TodoItem({ id, title, completed, onToggle, onDelete }) {
  return (
    <li
      className={`group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${
        completed
          ? 'bg-slate-50 dark:bg-slate-700/50 border-slate-100 dark:border-slate-700'
          : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 shadow-sm'
      }`}
    >
      <button
        onClick={onToggle}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          completed
            ? 'bg-emerald-500 border-emerald-500'
            : 'border-slate-300 dark:border-slate-500 hover:border-indigo-400 dark:hover:border-indigo-400'
        }`}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm sm:text-base transition-all duration-200 ${
          completed
            ? 'text-slate-400 dark:text-slate-500 line-through'
            : 'text-slate-800 dark:text-slate-100'
        }`}
      >
        {title}
      </span>

      <button
        onClick={onDelete}
        className="flex-shrink-0 p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-200"
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
