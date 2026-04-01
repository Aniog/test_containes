import React from 'react'
import TodoItem from './TodoItem'
import { ClipboardList } from 'lucide-react'

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400 gap-3">
        <ClipboardList size={40} className="text-gray-300" />
        <p className="text-sm">No tasks here. Add one above!</p>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-gray-50">
      {todos.map(todo => (
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

export default TodoList
