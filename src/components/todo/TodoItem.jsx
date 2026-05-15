import { Trash2, Check } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 group ${
        todo.completed
          ? 'bg-gray-800/50 border-gray-700/50'
          : 'bg-gray-800 border-gray-700 hover:border-gray-600'
      }`}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          todo.completed
            ? 'bg-emerald-500 border-emerald-500'
            : 'border-gray-500 hover:border-indigo-400 bg-transparent'
        }`}
      >
        {todo.completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      {/* Text */}
      <span
        className={`flex-1 text-sm leading-relaxed transition-all duration-200 ${
          todo.completed ? 'line-through text-gray-500' : 'text-gray-200'
        }`}
      >
        {todo.text}
      </span>

      {/* Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all duration-200 p-1 rounded-md hover:bg-red-400/10"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoItem;
