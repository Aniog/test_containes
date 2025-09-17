import TodoItem from './TodoItem'

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  if (todos.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDeleteTodo}
          onToggle={onToggleTodo}
        />
      ))}
    </div>
  )
}

export default TodoList