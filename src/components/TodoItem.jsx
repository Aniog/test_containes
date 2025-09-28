import { useState } from 'react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false)

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
    <div
      className={`flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-200 ${
        todo.completed ? 'bg-gray-50' : 'bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Checkbox */}
      <button
        onClick={onToggle}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          todo.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-green-400'
        }`}
      >
        {todo.completed && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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
          className={`text-lg transition-all duration-200 ${
            todo.completed
              ? 'text-gray-500 line-through'
              : 'text-gray-900'
          }`}
        >
          {todo.text}
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Created {formatDate(todo.createdAt)}
        </p>
      </div>

      {/* Delete Button */}
      <button
        onClick={onDelete}
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-red-500 hover:bg-red-50 transition-all duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        title="Delete todo"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem