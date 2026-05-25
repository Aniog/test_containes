import React from 'react'
import { Trash2 } from 'lucide-react'

export default function TodoStats({ total, active, completed, onClearCompleted }) {
  return (
    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span>
          <strong className="text-slate-700 dark:text-slate-200">{total}</strong>{' '}
          {total === 1 ? 'task' : 'tasks'}
        </span>
        <span className="w-px h-4 bg-slate-300 dark:bg-slate-600" />
        <span>
          <strong className="text-emerald-600 dark:text-emerald-400">{active}</strong>{' '}
          active
        </span>
        <span className="w-px h-4 bg-slate-300 dark:bg-slate-600" />
        <span>
          <strong className="text-indigo-600 dark:text-indigo-400">{completed}</strong>{' '}
          completed
        </span>
      </div>

      {completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Clear completed
        </button>
      )}
    </div>
  )
}
