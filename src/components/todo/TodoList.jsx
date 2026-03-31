import React from 'react'
import TodoItem from './TodoItem'
import { ClipboardList } from 'lucide-react'

const TodoList = ({ items, onToggle, onDelete }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-300 gap-3">
        <ClipboardList size={40} />
        <p className="text-sm text-gray-400">No tasks here yet!</p>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-gray-50">
      {items.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList
