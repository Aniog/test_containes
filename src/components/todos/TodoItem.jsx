import { Check, Trash2 } from 'lucide-react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm shadow-slate-100">
      <button
        type="button"
        onClick={() => onToggle(todo.id)}
        aria-pressed={todo.completed}
        aria-label={todo.completed ? `Mark ${todo.text} as active` : `Mark ${todo.text} as completed`}
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
          todo.completed
            ? 'border-emerald-500 bg-emerald-500 text-white'
            : 'border-slate-300 bg-white text-transparent hover:border-indigo-500'
        }`}
      >
        <Check className="h-4 w-4" />
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={`text-base font-medium ${
            todo.completed ? 'text-slate-400 line-through' : 'text-slate-900'
          }`}
        >
          {todo.text}
        </p>
        <p className="mt-1 text-sm text-slate-500">
          {todo.completed ? 'Completed task' : 'Open task'}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-700 transition hover:bg-rose-100 focus:outline-none focus:ring-4 focus:ring-rose-100"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </li>
  )
}

export default TodoItem
