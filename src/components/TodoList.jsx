import TodoItem from './TodoItem'

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Tasks ({todos.length})
      </h2>
      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggleTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList