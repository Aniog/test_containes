import { Trash2, Check } from 'lucide-react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const fields = todo.data ?? {}
  const { title, completed } = fields

  return (
    <div
      className={`group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
        completed
          ? 'bg-slate-50 border-slate-100'
          : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
      }`}
    >
      <button
        onClick={() => onToggle(todo)}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          completed
            ? 'bg-emerald-500 border-emerald-500'
            : 'border-slate-300 hover:border-indigo-400'
        }`}
      >
        {completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed transition-all ${
          completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {title}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default TodoItem
