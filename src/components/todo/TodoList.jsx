import React from 'react'
import TodoItem from './TodoItem.jsx'
import { Loader2 } from 'lucide-react'

export default function TodoList({ todos, loading, error, onToggle, onDelete }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 text-indigo-500">
        <Loader2 className="w-6 h-6 animate-spin mr-2" />
        <span className="text-sm text-gray-500">Loading todos...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8 text-center text-red-500 text-sm px-5">
        Error: {error}
      </div>
    )
  }

  if (todos.length === 0) {
    return (
      <div className="py-12 text-center text-gray-400 text-sm">
        Nothing here yet!
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
