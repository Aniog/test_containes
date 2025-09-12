import React from 'react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500 focus:ring-2"
      />
      <span 
        className={`flex-1 ${
          todo.completed 
            ? 'text-gray-500 line-through' 
            : 'text-gray-900'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={onDelete}
        className="px-3 py-1 text-red-600 hover:bg-red-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  )
}

export default TodoItem