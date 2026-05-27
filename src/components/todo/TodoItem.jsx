import { useState } from 'react';
import { Trash2, Check, Pencil, X } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    const trimmed = editText.trim();
    if (trimmed && trimmed !== todo.text) {
      onEdit(todo.id, trimmed);
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`flex items-center gap-3 p-4 rounded-xl border transition-all group ${
      todo.completed
        ? 'bg-slate-50 border-slate-100'
        : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-sm'
    }`}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-slate-300 hover:border-indigo-400'
        }`}
        aria-label={todo.completed ? '标记为未完成' : '标记为完成'}
      >
        {todo.completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      {isEditing ? (
        <input
          autoFocus
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="flex-1 text-sm text-slate-700 bg-transparent border-b border-indigo-400 outline-none py-0.5"
        />
      ) : (
        <span
          className={`flex-1 text-sm transition-colors ${
            todo.completed ? 'line-through text-slate-400' : 'text-slate-700'
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {!todo.completed && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1.5 text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 rounded-lg transition-colors"
            aria-label="编辑"
          >
            <Pencil className="w-3.5 h-3.5" />
          </button>
        )}
        {isEditing && (
          <button
            onClick={() => { setEditText(todo.text); setIsEditing(false); }}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="取消编辑"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          aria-label="删除"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
