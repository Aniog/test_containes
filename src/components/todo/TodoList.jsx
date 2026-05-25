

import TodoItem from './TodoItem'

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="divide-y divide-slate-100">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList


