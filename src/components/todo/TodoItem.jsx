import { Trash2, Check } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 shadow-sm group hover:shadow-md transition-shadow">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-1 ${
          todo.completed
            ? 'bg-emerald-500 border-emerald-500 text-white'
            : 'border-slate-300 hover:border-violet-400'
        }`}
      >
        {todo.completed && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed break-words ${
          todo.completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 p-1.5 text-slate-300 hover:text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-red-400 focus:opacity-100"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
};

export default TodoItem;
