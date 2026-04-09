import { Trash2 } from 'lucide-react'

const TodoItem = ({ todo, onToggle, onDelete, disabled }) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition group ${
        todo.completed
          ? 'bg-slate-50 border-slate-100'
          : 'bg-white border-slate-200 hover:border-violet-200 hover:shadow-sm'
      }`}
    >
      <button
        onClick={() => onToggle(todo)}
        disabled={disabled}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition cursor-pointer disabled:cursor-not-allowed ${
          todo.completed
            ? 'bg-violet-500 border-violet-500'
            : 'border-slate-300 hover:border-violet-400'
        }`}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed ${
          todo.completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {todo.title}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="flex-shrink-0 p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition cursor-pointer disabled:cursor-not-allowed"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default TodoItem
