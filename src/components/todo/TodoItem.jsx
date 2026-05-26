import { Trash2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm group transition-all hover:shadow-md">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn(
          'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors',
          todo.completed
            ? 'bg-emerald-500 border-emerald-500 text-white'
            : 'border-slate-300 hover:border-violet-400'
        )}
      >
        {todo.completed && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
      </button>

      <span
        className={cn(
          'flex-1 text-sm transition-colors',
          todo.completed ? 'line-through text-slate-400' : 'text-slate-700'
        )}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
};

export default TodoItem;
