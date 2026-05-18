import TodoItem from './TodoItem'
import { ClipboardList } from 'lucide-react'

export default function TodoList({ todos, onToggle, onDelete, filter }) {
  if (todos.length === 0) {
    const messages = {
      all: 'No tasks yet. Add one above!',
      active: 'No active tasks. Great job!',
      completed: 'No completed tasks yet.',
    }
    return (
      <div className="flex flex-col items-center justify-center py-14 gap-3 text-gray-500">
        <ClipboardList className="w-10 h-10 opacity-40" />
        <p className="text-sm">{messages[filter]}</p>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-gray-700/50">
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
