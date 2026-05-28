import React from 'react'
import { Trash } from 'lucide-react'

const TodoFooter = ({ totalCount, completedCount, onClearCompleted }) => {
  const activeCount = totalCount - completedCount

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
      <span className="text-sm text-slate-500">
        {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
      </span>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"
        >
          <Trash className="w-3.5 h-3.5" />
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}

export default TodoFooter
