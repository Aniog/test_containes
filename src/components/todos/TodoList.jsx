import React from 'react'
import { ClipboardList } from 'lucide-react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, filter, onToggle, onDelete }) => {
  const filtered = todos.filter((item) => {
    const completed = item.data?.completed
    if (filter === 'active') return !completed
    if (filter === 'completed') return completed
    return true
  })

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-slate-400 gap-3">
        <ClipboardList size={40} strokeWidth={1.2} />
        <p className="text-sm">
          {filter === 'completed' ? 'No completed tasks yet.' : filter === 'active' ? 'No active tasks.' : 'No tasks yet. Add one above!'}
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {filtered.map((item) => (
        <TodoItem key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TodoList
