import React from 'react'

const TodoFooter = ({ activeCount, completedCount, onClearCompleted }) => {
  return (
    <div className="flex items-center justify-between mt-3 px-1 text-xs text-gray-400">
      <span>
        <span className="font-semibold text-gray-600">{activeCount}</span>{' '}
        {activeCount === 1 ? 'item' : 'items'} left
      </span>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-xs text-gray-400 hover:text-red-500 transition-colors duration-150 underline underline-offset-2"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}

export default TodoFooter
