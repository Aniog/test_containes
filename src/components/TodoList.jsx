import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <div className="text-4xl mb-3">🔍</div>
        <p>No todos match the current filter</p>
      </div>
    )
  }

  return (
    <div className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
        />
      ))}
    </div>
  )
}

export default TodoList