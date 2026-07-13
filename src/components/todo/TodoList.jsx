import TodoItem from './TodoItem'
import { ClipboardList } from 'lucide-react'

export default function TodoList({ todos, loading, filter, onToggle, onDelete }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin mb-3" />
        <p className="text-sm">Loading todos…</p>
      </div>
    )
  }

  if (todos.length === 0) {
    const messages = {
      all: 'No todos yet. Add one above!',
      active: 'No active todos. Great job!',
      completed: 'No completed todos yet.',
    }
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <ClipboardList className="w-12 h-12 mb-3 text-gray-200" />
        <p className="text-sm">{messages[filter]}</p>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
      {todos.map((item) => (
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
