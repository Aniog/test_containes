import { Trash2, CheckCircle2, Circle } from 'lucide-react'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      className={`flex items-center gap-3 px-5 py-3.5 group transition-colors hover:bg-gray-50 ${
        todo.completed ? 'bg-gray-50/50' : ''
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
        className="flex-shrink-0 text-gray-300 hover:text-violet-500 transition-colors focus:outline-none"
      >
        {todo.completed ? (
          <CheckCircle2 className="w-5 h-5 text-violet-500" />
        ) : (
          <Circle className="w-5 h-5" />
        )}
      </button>

      {/* Text */}
      <span
        onClick={() => onToggle(todo.id)}
        className={`flex-1 text-sm cursor-pointer select-none transition-all ${
          todo.completed
            ? 'line-through text-gray-400'
            : 'text-gray-700 hover:text-gray-900'
        }`}
      >
        {todo.text}
      </span>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 text-gray-200 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all focus:outline-none focus:opacity-100"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}
