const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`flex items-center gap-3 p-4 border rounded-lg transition-all duration-200 ${
      todo.completed 
        ? 'bg-gray-50 border-gray-200' 
        : 'bg-white border-gray-300 hover:border-blue-300 hover:shadow-sm'
    }`}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 transition-all duration-200 ${
          todo.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-green-400'
        }`}
      >
        {todo.completed && (
          <svg className="w-3 h-3 mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      
      <span className={`flex-1 text-left ${
        todo.completed 
          ? 'text-gray-500 line-through' 
          : 'text-gray-800'
      }`}>
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
        title="Delete todo"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v1H4V5zM3 8a1 1 0 011-1h12a1 1 0 110 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a1 1 0 01-1-1zm3 3a1 1 0 112 0v4a1 1 0 11-2 0v-4zm4 0a1 1 0 112 0v4a1 1 0 11-2 0v-4z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem