import TodoItem from './TodoItem.jsx'
import { ClipboardList } from 'lucide-react'

export default function TodoList({ todos, loading, onToggle, onDelete, filter }) {
  if (loading) {
    return (
      <div className="flex flex-col gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-12 bg-gray-100 rounded-xl animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (todos.length === 0) {
    const emptyMessages = {
      all: { icon: <ClipboardList className="w-10 h-10 text-gray-300" />, text: 'No tasks yet. Add one above!' },
      active: { icon: <ClipboardList className="w-10 h-10 text-green-300" />, text: 'No active tasks. Great job!' },
      completed: { icon: <ClipboardList className="w-10 h-10 text-gray-300" />, text: 'No completed tasks yet.' },
    }
    const msg = emptyMessages[filter] || emptyMessages.all

    return (
      <div className="flex flex-col items-center justify-center py-10 gap-3 text-gray-400">
        {msg.icon}
        <p className="text-sm">{msg.text}</p>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-2">
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
