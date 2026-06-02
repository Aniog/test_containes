import { Trash2, Check } from 'lucide-react'

export default function TodoItem({ todo, onToggle, onDelete }) {
  const fields = todo.data ?? {}
  const completed = !!fields.completed

  return (
    <li className={`flex items-center gap-3 p-3 rounded-lg border transition-all group ${
      completed
        ? 'bg-slate-50 border-slate-100'
        : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50'
    }`}>
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo)}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          completed
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-slate-300 hover:border-indigo-400'
        }`}
      >
        {completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      {/* Title */}
      <span
        className={`flex-1 text-sm leading-relaxed transition-colors ${
          completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {fields.title}
      </span>

      {/* Delete */}
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all p-1 rounded"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
