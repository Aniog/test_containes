import { Trash2, Check } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
      todo.completed
        ? 'bg-gray-900/50 border-gray-700/30'
        : 'bg-gray-900 border-gray-700/50 hover:border-gray-600'
    }`}>
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          todo.completed
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-gray-500 hover:border-indigo-400'
        }`}
      >
        {todo.completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span className={`flex-1 text-base transition-all duration-200 ${
        todo.completed
          ? 'line-through text-gray-500'
          : 'text-gray-100'
      }`}>
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-200 p-1 rounded"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
};

export default TodoItem;
