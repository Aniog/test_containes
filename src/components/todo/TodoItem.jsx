import { Trash2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const TodoItem = ({ todo, onToggle, onDelete, disabled }) => {
  return (
    <div
      className={cn(
        'group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all',
        todo.completed
          ? 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50'
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm'
      )}
    >
      <button
        onClick={() => onToggle(todo)}
        disabled={disabled}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn(
          'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-1',
          todo.completed
            ? 'bg-violet-600 border-violet-600'
            : 'border-slate-300 dark:border-slate-600 hover:border-violet-400'
        )}
      >
        {todo.completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        className={cn(
          'flex-1 text-sm leading-relaxed break-words',
          todo.completed
            ? 'line-through text-slate-400 dark:text-slate-500'
            : 'text-slate-700 dark:text-slate-200'
        )}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all focus:outline-none focus:opacity-100 focus:ring-2 focus:ring-red-400"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default TodoItem
