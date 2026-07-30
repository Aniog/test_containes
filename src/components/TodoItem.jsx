import { useState } from 'react'
import { Check, Trash2, Calendar, Flag, Pencil, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const PRIORITY_CONFIG = {
  high: { label: 'High', classes: 'bg-red-100 text-red-700' },
  medium: { label: 'Medium', classes: 'bg-amber-100 text-amber-700' },
  low: { label: 'Low', classes: 'bg-slate-100 text-slate-600' },
}

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const fields = todo.data ?? {}
  const [editing, setEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(fields.title)
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    const trimmed = editTitle.trim()
    if (!trimmed || trimmed === fields.title) {
      setEditing(false)
      setEditTitle(fields.title)
      return
    }
    setSaving(true)
    await onUpdate(todo.id, { ...fields, title: trimmed })
    setSaving(false)
    setEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') {
      setEditing(false)
      setEditTitle(fields.title)
    }
  }

  const priority = PRIORITY_CONFIG[fields.priority] ?? PRIORITY_CONFIG.medium

  return (
    <div className={cn(
      'bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-start gap-3 group transition-all duration-200',
      fields.completed && 'opacity-60'
    )}>
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id, fields)}
        className={cn(
          'mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200',
          fields.completed
            ? 'bg-violet-600 border-violet-600'
            : 'border-slate-300 hover:border-violet-400'
        )}
        aria-label={fields.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {fields.completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {editing ? (
          <input
            autoFocus
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            disabled={saving}
            className="w-full text-sm text-slate-800 border border-violet-400 rounded-md px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        ) : (
          <p className={cn(
            'text-sm font-medium text-slate-800 break-words',
            fields.completed && 'line-through text-slate-400'
          )}>
            {fields.title}
          </p>
        )}

        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          <span className={cn('text-xs font-medium px-2 py-0.5 rounded-full', priority.classes)}>
            <Flag className="w-2.5 h-2.5 inline mr-1" />
            {priority.label}
          </span>
          {fields.due_date && (
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {fields.due_date}
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0">
        {!editing && (
          <button
            onClick={() => { setEditing(true); setEditTitle(fields.title) }}
            className="p-1.5 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
            aria-label="Edit todo"
          >
            <Pencil className="w-3.5 h-3.5" />
          </button>
        )}
        {editing && (
          <button
            onClick={() => { setEditing(false); setEditTitle(fields.title) }}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Cancel edit"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          aria-label="Delete todo"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
