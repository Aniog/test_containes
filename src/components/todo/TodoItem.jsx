import { Trash2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={cn(
      "flex items-center gap-3 p-4 rounded-xl border transition-all duration-200",
      todo.completed
        ? "bg-gray-800/50 border-gray-700/50"
        : "bg-gray-800 border-gray-700 hover:border-indigo-500/50"
    )}>
      <button
        onClick={() => onToggle(todo)}
        className={cn(
          "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
          todo.completed
            ? "bg-indigo-500 border-indigo-500"
            : "border-gray-500 hover:border-indigo-400 bg-transparent"
        )}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span className={cn(
        "flex-1 text-sm md:text-base transition-all duration-200",
        todo.completed
          ? "line-through text-gray-500"
          : "text-gray-100"
      )}>
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo)}
        className="flex-shrink-0 p-1.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
        aria-label="Delete todo"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoItem;
