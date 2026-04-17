import { Trash2, CheckCircle2, Circle } from 'lucide-react'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 px-5 py-3.5 group hover:bg-gray-50 transition">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
        className="flex-shrink-0 text-gray-300 hover:text-indigo-500 transition"
      >
        {todo.completed
          ? <CheckCircle2 className="w-5 h-5 text-indigo-500" />
          : <Circle className="w-5 h-5" />
        }
      </button>

      <span
        className={`flex-1 text-sm leading-snug select-none ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
