import { Check, Trash2 } from 'lucide-react';

const TodoItem = ({ item, onToggle, onDelete, disabled }) => {
  const fields = item?.data ?? {};

  return (
    <li className="flex items-center gap-3 py-3 px-4 hover:bg-slate-50 transition-colors group border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={() => onToggle(item)}
        disabled={disabled}
        aria-label={fields.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors disabled:opacity-50 ${
          fields.completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-slate-300 hover:border-indigo-400 bg-white'
        }`}
      >
        {fields.completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-base transition-colors ${
          fields.completed ? 'text-slate-400 line-through' : 'text-slate-800'
        }`}
      >
        {fields.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(item)}
        disabled={disabled}
        aria-label="Delete task"
        className="flex-shrink-0 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
};

export default TodoItem;
