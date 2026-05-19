import { Trash2, Check } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 group transition-all hover:shadow-md">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          todo.completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-base transition-all ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
        aria-label="Delete todo"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoItem;
