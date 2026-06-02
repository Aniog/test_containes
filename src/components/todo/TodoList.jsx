import TodoItem from './TodoItem.jsx'
import { ClipboardList } from 'lucide-react'

const TodoList = ({ todos, onToggle, onDelete, disabled }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-400">
        <ClipboardList className="w-10 h-10 mb-3 opacity-40" />
        <p className="text-sm">No tasks yet. Add one above!</p>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-slate-100">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
          disabled={disabled}
        />
      ))}
    </ul>
  )
}

export default TodoList
