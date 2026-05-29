import { Check, Trash2 } from 'lucide-react';

const TodoItem = ({ item, onToggle, onDelete }) => {
  const fields = item?.data ?? {};
  const isCompleted = fields.completed === true;

  return (
    <li className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-0 group">
      <button
        type="button"
        onClick={() => onToggle(item)}
        aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          isCompleted
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-slate-300 hover:border-indigo-400'
        }`}
      >
        {isCompleted && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed break-words ${
          isCompleted ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(item.id)}
        aria-label="Delete todo"
        className="flex-shrink-0 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
};

export default TodoItem;
