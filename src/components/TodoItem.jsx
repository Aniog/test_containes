import { useState } from 'react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleToggle = () => {
    onToggle(todo.id)
  }

  const handleDelete = () => {
    onDelete(todo.id)
  }

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
      className={`flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
        todo.completed ? 'bg-gray-50' : 'bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Checkbox */}
      <button
        onClick={handleToggle}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
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
          className={`text-lg transition-all ${
            todo.completed
              ? 'text-gray-500 line-through'
              : 'text-gray-900'
          }`}
        >
          {todo.text}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Created {formatDate(todo.createdAt)}
        </p>
      </div>

      {/* Status Badge */}
      <div className="flex-shrink-0">
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            todo.completed
              ? 'bg-green-100 text-green-800'
              : 'bg-purple-100 text-purple-800'
          }`}
        >
          {todo.completed ? 'Completed' : 'Active'}
        </span>
      </div>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className={`flex-shrink-0 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        title="Delete task"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM8 8a1 1 0 012 0v3a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v3a1 1 0 11-2 0V8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem