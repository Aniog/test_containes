import TodoItem from './TodoItem.jsx'
import { ClipboardList } from 'lucide-react'

const TodoList = ({ todos, filter, onToggle, onDelete, disabled }) => {
  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-slate-400">
        <ClipboardList className="w-10 h-10 mb-3 opacity-40" />
        <p className="text-sm">
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
    <ul className="flex flex-col gap-2">
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          disabled={disabled}
        />
      ))}
    </ul>
  )
}

export default TodoList
