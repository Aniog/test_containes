import React from 'react'
import TodoItem from './TodoItem'
import { ClipboardList } from 'lucide-react'

const TodoList = ({ items, onToggle, onDelete }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-400">
        <ClipboardList className="w-12 h-12 mb-3" />
        <p className="text-lg font-medium">No tasks yet</p>
        <p className="text-sm">Add a task above to get started</p>
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {items.map((item) => (
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
