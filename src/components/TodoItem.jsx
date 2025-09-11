import React from 'react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-150">
      {/* Checkbox */}
      <button
        onClick={onToggle}
        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
          todo.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-green-400'
        }`}
      >
        {todo.completed && (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Todo Content */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-gray-900 transition-all duration-200 ${
            todo.completed
              ? 'line-through text-gray-500'
              : ''
          }`}
        >
          {todo.text}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Created {formatDate(todo.createdAt)}
        </p>
      </div>

      {/* Status Badge */}
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          todo.completed
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}
      >
        {todo.completed ? 'Done' : 'Pending'}
      </span>

      {/* Delete Button */}
      <button
        onClick={onDelete}
        className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
        title="Delete todo"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 102 0v3a1 1 0 11-2 0V9zm4 0a1 1 0 10-2 0v3a1 1 0 102 0V9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem