import TodoItem from './TodoItem'
import { ClipboardList } from 'lucide-react'

const TodoList = ({ todos, onToggle, onDelete, disabled }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <ClipboardList className="w-12 h-12 text-gray-200 mb-3" />
        <p className="text-gray-400 text-sm font-medium">No tasks yet</p>
        <p className="text-gray-300 text-xs mt-1">Add a task above to get started</p>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
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
