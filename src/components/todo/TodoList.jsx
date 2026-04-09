import TodoItem from './TodoItem'
import { ClipboardList } from 'lucide-react'

const TodoList = ({ todos, filter, onToggle, onDelete, loading }) => {
  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  if (loading) {
    return (
      <div className="flex flex-col gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-14 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-500">
        <ClipboardList className="w-12 h-12 mb-3 opacity-40" />
        <p className="text-sm font-medium">
          {filter === 'completed'
            ? 'No completed tasks yet'
            : filter === 'active'
            ? 'No active tasks — great job!'
            : 'No tasks yet. Add one above!'}
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
          disabled={loading}
        />
      ))}
    </div>
  )
}

export default TodoList
