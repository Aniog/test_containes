import { Trash2, Check } from 'lucide-react'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={`flex items-center gap-3 px-5 py-4 group transition ${
        todo.completed ? 'opacity-60' : ''
      }`}
    >
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
          todo.completed
            ? 'bg-emerald-500 border-emerald-500'
            : 'border-gray-600 hover:border-indigo-400'
        }`}
      >
        {todo.completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-base transition ${
          todo.completed ? 'line-through text-gray-500' : 'text-gray-100'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition p-1 rounded-lg hover:bg-red-400/10"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
