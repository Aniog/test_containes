import React from 'react'
import TodoItem from './TodoItem.jsx'
import { ClipboardList } from 'lucide-react'

export default function TodoList({ todos, loading, onToggle, onDelete, onEdit }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <div className="w-8 h-8 border-2 border-indigo-300 border-t-indigo-600 rounded-full animate-spin mb-3" />
        <p className="text-sm">Loading todos…</p>
      </div>
    )
  }

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <ClipboardList className="w-12 h-12 mb-3 text-gray-300" />
        <p className="text-sm font-medium">No tasks here</p>
        <p className="text-xs mt-1">Add a new task above to get started</p>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-gray-100 max-h-[420px] overflow-y-auto">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )
}
