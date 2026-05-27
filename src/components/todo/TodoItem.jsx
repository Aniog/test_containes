import { Trash2, Flag } from 'lucide-react';

const PRIORITY_STYLES = {
  high: { badge: 'text-red-600 bg-red-50 border border-red-200', label: '高' },
  medium: { badge: 'text-amber-600 bg-amber-50 border border-amber-200', label: '中' },
  low: { badge: 'text-green-600 bg-green-50 border border-green-200', label: '低' },
};

const TodoItem = ({ item, onToggle, onDelete }) => {
  const fields = item?.data ?? {};
  const priority = fields.priority || 'medium';
  const priorityStyle = PRIORITY_STYLES[priority];

  return (
    <div
      className={`flex items-center gap-3 p-4 bg-white rounded-xl border transition-all duration-200 group
        ${fields.completed ? 'border-slate-100 opacity-60' : 'border-slate-200 hover:border-indigo-200 hover:shadow-sm'}`}
    >
      <button
        onClick={() => onToggle(item)}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
          ${fields.completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-slate-300 hover:border-indigo-400'}`}
        aria-label={fields.completed ? '标记为未完成' : '标记为完成'}
      >
        {fields.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${fields.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
          {fields.title}
        </p>
      </div>

      <span className={`flex-shrink-0 flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${priorityStyle.badge}`}>
        <Flag className="w-3 h-3" />
        {priorityStyle.label}
      </span>

      <button
        onClick={() => onDelete(item.id)}
        className="flex-shrink-0 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
        aria-label="删除"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoItem;
