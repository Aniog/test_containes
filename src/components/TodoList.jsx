import TodoItem from './TodoItem'
import { ClipboardList } from 'lucide-react'

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <ClipboardList className="w-12 h-12 mb-3 opacity-40" />
        <p className="text-sm font-medium">Nothing here yet!</p>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
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
