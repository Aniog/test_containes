import { Trash2, CheckCircle2, Circle } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 group transition-all hover:border-gray-600">
      <button
        onClick={() => onToggle(todo.id)}
        className="flex-shrink-0 text-gray-400 hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed
          ? <CheckCircle2 className="w-5 h-5 text-indigo-400" />
          : <Circle className="w-5 h-5" />}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed break-words ${
          todo.completed ? 'line-through text-gray-500' : 'text-gray-100'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
        aria-label="Delete todo"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoItem;
