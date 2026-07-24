import React, { useState } from 'react';
import { Trash2, Pencil, Check, X, Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const priorityConfig = {
  high: { label: 'High', classes: 'bg-red-50 text-red-600 border-red-200' },
  medium: { label: 'Medium', classes: 'bg-amber-50 text-amber-600 border-amber-200' },
  low: { label: 'Low', classes: 'bg-sky-50 text-sky-600 border-sky-200' },
};

export default function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  const fields = todo.data ?? {};
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(fields.title || '');
  const [editPriority, setEditPriority] = useState(fields.priority || 'medium');
  const [editDueDate, setEditDueDate] = useState(fields.due_date || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!editTitle.trim()) return;
    setSaving(true);
    try {
      await onUpdate(todo, {
        title: editTitle.trim(),
        priority: editPriority,
        due_date: editDueDate || undefined,
      });
      setEditing(false);
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setEditTitle(fields.title || '');
    setEditPriority(fields.priority || 'medium');
    setEditDueDate(fields.due_date || '');
    setEditing(false);
  };

  const priority = priorityConfig[fields.priority] || priorityConfig.medium;

  const isOverdue =
    fields.due_date && !fields.completed && new Date(fields.due_date) < new Date();

  return (
    <div
      className={`bg-white rounded-xl border transition-all ${
        fields.completed ? 'border-slate-100 opacity-70' : 'border-slate-200 hover:border-slate-300'
      } shadow-sm`}
    >
      {editing ? (
        <div className="p-4 space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') handleCancelEdit();
            }}
          />
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Priority:</span>
              <div className="flex gap-1">
                {Object.entries(priorityConfig).map(([key, cfg]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setEditPriority(key)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border capitalize transition-colors ${
                      editPriority === key
                        ? cfg.classes
                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {cfg.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Due:</span>
              <input
                type="date"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                className="px-2.5 py-1 rounded-lg border border-slate-300 text-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={handleCancelEdit}
              className="flex items-center gap-1 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800 border border-slate-200 hover:border-slate-300 rounded-lg transition-colors"
            >
              <X className="w-3.5 h-3.5" /> Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving || !editTitle.trim()}
              className="flex items-center gap-1 px-3 py-1.5 text-xs bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white rounded-lg transition-colors font-medium"
            >
              <Check className="w-3.5 h-3.5" /> Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-3 p-4">
          {/* Checkbox */}
          <button
            type="button"
            onClick={() => onToggle(todo)}
            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
              fields.completed
                ? 'bg-emerald-500 border-emerald-500 text-white'
                : 'border-slate-300 hover:border-indigo-400'
            }`}
            aria-label={fields.completed ? 'Mark incomplete' : 'Mark complete'}
          >
            {fields.completed && <Check className="w-3 h-3" strokeWidth={3} />}
          </button>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p
              className={`text-sm font-medium leading-snug ${
                fields.completed ? 'line-through text-slate-400' : 'text-slate-800'
              }`}
            >
              {fields.title}
            </p>
            {fields.due_date && (
              <div
                className={`flex items-center gap-1 mt-1 text-xs ${
                  isOverdue ? 'text-red-500' : 'text-slate-400'
                }`}
              >
                <Calendar className="w-3 h-3" />
                {isOverdue ? 'Overdue · ' : ''}
                {format(parseISO(fields.due_date), 'MMM d, yyyy')}
              </div>
            )}
          </div>

          {/* Priority badge */}
          <span
            className={`flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium border capitalize ${priority.classes}`}
          >
            {priority.label}
          </span>

          {/* Actions */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              aria-label="Edit task"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onDelete(todo.id)}
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Delete task"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
