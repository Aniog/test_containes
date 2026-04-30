import { Trash2, Check } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-yellow-200 group transition-all hover:border-yellow-400">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          todo.completed
            ? 'bg-yellow-400 border-yellow-400'
            : 'border-yellow-300 hover:border-yellow-500'
        }`}
      >
        {todo.completed && <Check className="w-3.5 h-3.5 text-yellow-900" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-base transition-colors ${
          todo.completed ? 'line-through text-yellow-300' : 'text-yellow-900'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
        className="flex-shrink-0 p-1.5 text-yellow-300 hover:text-red-500 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
};

export default TodoItem;
