import { Trash2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const TodoItem = ({ todo, onToggle, onDelete, disabled }) => {
  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl border transition-all group",
      todo.completed
        ? "bg-white/5 border-white/10"
        : "bg-white/10 border-white/20 hover:bg-white/15"
    )}>
      <button
        onClick={() => onToggle(todo)}
        disabled={disabled}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        className={cn(
          "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
          todo.completed
            ? "bg-violet-500 border-violet-500"
            : "border-white/40 hover:border-violet-400"
        )}
      >
        {todo.completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span className={cn(
        "flex-1 text-sm sm:text-base break-words",
        todo.completed ? "line-through text-white/40" : "text-white"
      )}>
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="flex-shrink-0 p-1.5 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-400/10 opacity-0 group-hover:opacity-100 transition-all disabled:opacity-30"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default TodoItem
