import { ClipboardList } from 'lucide-react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-900">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-500 shadow-sm shadow-slate-200">
          <ClipboardList className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">No tasks yet</h3>
        <p className="mt-2 text-sm text-slate-500">
          Add your first task above to start building momentum.
        </p>
      </div>
    )
  }

  return (
    <ul className="space-y-3">
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

export default TodoList
