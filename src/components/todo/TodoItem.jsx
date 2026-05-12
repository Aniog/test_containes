import { Trash2, Check } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center gap-3 px-4 py-3 bg-slate-800 rounded-xl border border-slate-700 group transition hover:border-slate-500">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition
          ${todo.completed
            ? 'bg-emerald-600 border-emerald-600 text-white'
            : 'border-slate-500 hover:border-emerald-400 bg-transparent'
          }`}
      >
        {todo.completed && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-base transition ${
          todo.completed ? 'line-through text-slate-500' : 'text-slate-100'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-400/10 opacity-0 group-hover:opacity-100 transition"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
};

export default TodoItem;
