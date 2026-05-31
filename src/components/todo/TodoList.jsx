import TodoItem from './TodoItem.jsx'
import { ClipboardList } from 'lucide-react'

export default function TodoList({ todos, loading, filter, onToggle, onDelete }) {
  if (loading) {
    return (
      <div className="py-10 flex flex-col items-center gap-3 text-gray-400">
        <div className="w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm">Loading todos...</p>
      </div>
    )
  }

  if (todos.length === 0) {
    const emptyMessages = {
      all: { title: 'No todos yet', sub: 'Add your first task above to get started.' },
      active: { title: 'No active tasks', sub: 'All your tasks are completed!' },
      completed: { title: 'No completed tasks', sub: 'Complete some tasks to see them here.' },
    }
    const msg = emptyMessages[filter] || emptyMessages.all

    return (
      <div className="py-10 flex flex-col items-center gap-3 text-gray-400">
        <ClipboardList className="w-10 h-10 text-gray-300" />
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500">{msg.title}</p>
          <p className="text-xs text-gray-400 mt-0.5">{msg.sub}</p>
        </div>
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
