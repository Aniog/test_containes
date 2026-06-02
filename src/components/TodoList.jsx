import TodoItem from './TodoItem.jsx'
import { ClipboardList } from 'lucide-react'

export default function TodoList({ todos, loading, filter, onToggle, onDelete }) {
  if (loading) {
    return (
      <div className="flex flex-col gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-12 bg-slate-100 rounded-lg animate-pulse" />
        ))}
      </div>
    )
  }

  if (todos.length === 0) {
    const messages = {
      all: { text: 'No todos yet', sub: 'Add your first task above!' },
      active: { text: 'No active tasks', sub: 'All caught up!' },
      completed: { text: 'No completed tasks', sub: 'Start checking things off!' },
    }
    const msg = messages[filter] || messages.all

    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <ClipboardList className="w-10 h-10 text-green-300 mb-3" />
        <p className="text-green-700 font-medium">{msg.text}</p>
        <p className="text-green-400 text-sm mt-1">{msg.sub}</p>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-1.5">
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
