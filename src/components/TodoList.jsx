import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="py-10 text-center text-gray-400 text-sm">
        No tasks in this view
      </div>
    )
  }

  return (
    <ul className="divide-y divide-gray-100">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
