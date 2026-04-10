import TodoItem from './TodoItem'
import { CheckCircle2 } from 'lucide-react'

const TodoList = ({ todos, filter, onToggle, onDelete }) => {
  const filtered = todos.filter((todo) => {
    if (filter === 'active') return !todo.data.completed
    if (filter === 'completed') return todo.data.completed
    return true
  })

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <CheckCircle2 className="w-12 h-12 mb-3 opacity-30" />
        <p className="text-sm">
          {filter === 'completed' ? 'No completed tasks yet.' : filter === 'active' ? 'No active tasks.' : 'No tasks yet. Add one above!'}
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {filtered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TodoList
