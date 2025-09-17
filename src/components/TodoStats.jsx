const TodoStats = ({ todos, onClearCompleted }) => {
  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.completed).length
  const activeTodos = totalTodos - completedTodos

  if (totalTodos === 0) {
    return null
  }

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
      <div className="flex items-center gap-6 text-sm text-gray-600">
        <span>
          <span className="font-semibold text-blue-600">{activeTodos}</span> active
        </span>
        <span>
          <span className="font-semibold text-green-600">{completedTodos}</span> completed
        </span>
        <span>
          <span className="font-semibold text-gray-700">{totalTodos}</span> total
        </span>
      </div>
      
      {completedTodos > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200"
        >
          Clear completed
        </button>
      )}
    </div>
  )
}

export default TodoStats