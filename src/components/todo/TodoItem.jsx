import { Trash2 } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center gap-3 bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 group transition-all hover:border-slate-500">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
          todo.completed
            ? 'bg-violet-600 border-violet-600'
            : 'border-slate-500 hover:border-violet-400'
        }`}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm transition-all ${
          todo.completed ? 'line-through text-slate-500' : 'text-slate-100'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
};

export default TodoItem;
