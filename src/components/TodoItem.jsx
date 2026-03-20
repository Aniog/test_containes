import React from 'react'
import { Check, X, Circle } from 'lucide-react'

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  const priorityColors = {
    low: 'text-green-600 bg-green-50 border-green-200',
    medium: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    high: 'text-red-600 bg-red-50 border-red-200'
  }

  return (
    <div className={`flex items-center gap-3 p-4 border rounded-lg transition-all duration-200 ${
      todo.completed 
        ? 'bg-gray-50 border-gray-200 opacity-75' 
        : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
    }`}>
      {/* Toggle Complete Button */}
      <button
        onClick={() => onToggleComplete(todo.id, !todo.completed)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          todo.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
        }`}
      >
        {todo.completed ? <Check size={14} /> : <Circle size={14} className="opacity-0" />}
      </button>

      {/* Todo Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium transition-all duration-200 ${
          todo.completed 
            ? 'line-through text-gray-500' 
            : 'text-gray-900'
        }`}>
          {todo.title}
        </p>
        
        {/* Priority Badge */}
        <span className={`inline-block mt-1 px-2 py-1 text-xs font-medium rounded-full border ${
          priorityColors[todo.priority] || priorityColors.medium
        }`}>
          {todo.priority}
        </span>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
        title="Delete todo"
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default TodoItem