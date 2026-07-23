import { useState } from 'react'
import { Trash2, Pencil, Check, X, Calendar } from 'lucide-react'
import PriorityBadge from './PriorityBadge'
import { cn } from '@/lib/utils'

const PRIORITIES = ['low', 'medium', 'high']

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const fields = todo.data ?? {}
  const [editing, setEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(fields.title)
  const [editPriority, setEditPriority] = useState(fields.priority ?? 'medium')
  const [editDueDate, setEditDueDate] = useState(fields.due_date ?? '')
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!editTitle.trim()) return
    setSaving(true)
    await onUpdate(todo.id, {
      ...fields,
      title: editTitle.trim(),
      priority: editPriority,
      due_date: editDueDate || undefined,
    })
    setSaving(false)
    setEditing(false)
  }

  const handleCancel = () => {
    setEditTitle(fields.title)
    setEditPriority(fields.priority ?? 'medium')
    setEditDueDate(fields.due_date ?? '')
    setEditing(false)
  }

  return (
    <div
      className={cn(
        'bg-white rounded-xl border transition-all',
        fields.completed
          ? 'border-slate-100 opacity-60'
          : 'border-slate-200 shadow-sm'
      )}
    >
      {editing ? (
        <div className="p-4 space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            autoFocus
          />
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Priority:</span>
              <div className="flex gap-1">
                {PRIORITIES.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setEditPriority(p)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
                      editPriority === p
                        ? p === 'high'
                          ? 'bg-red-50 text-red-600 border-red-300'
                          : p === 'medium'
                          ? 'bg-amber-50 text-amber-600 border-amber-300'
                          : 'bg-emerald-50 text-emerald-600 border-emerald-300'
                        : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <input
                type="date"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                className="border border-slate-300 rounded-lg px-2 py-1 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-1 px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700 border border-slate-200 rounded-lg transition-colors"
            >
              <X className="w-3.5 h-3.5" /> Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving || !editTitle.trim()}
              className="flex items-center gap-1 px-3 py-1.5 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              <Check className="w-3.5 h-3.5" /> Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-3 p-4">
          <button
            type="button"
            onClick={() => onToggle(todo)}
            className={cn(
              'mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors',
              fields.completed
                ? 'bg-indigo-600 border-indigo-600'
                : 'border-slate-300 hover:border-indigo-400'
            )}
            aria-label={fields.completed ? 'Mark incomplete' : 'Mark complete'}
          >
            {fields.completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
          </button>

          <div className="flex-1 min-w-0">
            <p
              className={cn(
                'text-sm font-medium leading-snug',
                fields.completed ? 'line-through text-slate-400' : 'text-slate-800'
              )}
            >
              {fields.title}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <PriorityBadge priority={fields.priority ?? 'medium'} />
              {fields.due_date && (
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" />
                  {fields.due_date}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              aria-label="Edit task"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onDelete(todo.id)}
              className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
              aria-label="Delete task"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
