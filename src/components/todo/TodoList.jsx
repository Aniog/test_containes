import TodoItem from './TodoItem.jsx'
import { ClipboardList } from 'lucide-react'

const TodoList = ({ todos, filter, onToggle, onDelete }) => {
  const filtered = todos.filter((todo) => {
    const completed = todo.data?.completed ?? false
    if (filter === 'active') return !completed
    if (filter === 'completed') return completed
    return true
  })

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-slate-400">
        <ClipboardList className="w-12 h-12 mb-3 opacity-40" />
        <p className="text-sm font-medium">
          {filter === 'completed'
            ? 'No completed tasks yet'
            : filter === 'active'
            ? 'No active tasks'
            : 'No tasks yet — add one above!'}
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
