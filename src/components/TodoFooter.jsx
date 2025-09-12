import React from 'react'

const TodoFooter = ({ activeCount, completedCount, onClearCompleted }) => {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
      <div className="text-sm text-gray-600">
        <span className="font-medium">{activeCount}</span> 
        {activeCount === 1 ? ' item' : ' items'} left
      </div>
      
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  )
}

export default TodoFooter