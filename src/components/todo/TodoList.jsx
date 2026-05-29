import TodoItem from './TodoItem.jsx'
import { ClipboardList } from 'lucide-react'

const TodoList = ({ items, onToggle, onDelete, disabled }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-400">
        <ClipboardList className="w-10 h-10 mb-3 opacity-40" />
        <p className="text-sm font-medium">No tasks here</p>
        <p className="text-xs mt-1">Add a task above to get started</p>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-slate-100">
      {items.map((item) => (
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
