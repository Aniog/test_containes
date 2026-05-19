import { Check, Trash2 } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 group transition-all hover:border-slate-600">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          todo.completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-slate-500 bg-transparent hover:border-indigo-400'
        }`}
      >
        {todo.completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm transition-colors ${
          todo.completed
            ? 'line-through text-slate-500'
            : 'text-slate-100'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-rose-400 transition-all"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
};

export default TodoItem;
