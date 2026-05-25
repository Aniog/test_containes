
import { Trash2, Check, Circle } from 'lucide-react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors group">
      <button
        onClick={() => onToggle(todo.id)}
        className="flex-shrink-0 focus:outline-none"
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed ? (
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        ) : (
          <Circle className="w-6 h-6 text-slate-300 hover:text-slate-400 transition-colors" />
        )}
      </button>

      <span
        className={`flex-1 text-slate-700 ${
          todo.completed ? 'line-through text-slate-400' : ''
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-1 rounded hover:bg-red-50 focus:outline-none"
        aria-label="Delete todo"
      >
        <Trash2 className="w-5 h-5 text-red-400 hover:text-red-600" />
      </button>
    </div>
  )
}

export default TodoItem

