const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
      />
      
      <span
        className={`flex-1 ${
          todo.completed
            ? 'text-gray-500 line-through'
            : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  )
}

export default TodoItem