import React, { useState } from 'react'
import { CheckCircle2, Circle, Trash2, Pencil, X, Check, Calendar } from 'lucide-react'

const PRIORITY_STYLES = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-emerald-100 text-emerald-700',
}

const PRIORITY_BORDER = {
  high: 'border-l-red-400',
  medium: 'border-l-amber-400',
  low: 'border-l-emerald-400',
}

const PRIORITIES = ['low', 'medium', 'high']

function formatDate(dateStr) {
  if (!dateStr) return null
  const [year, month, day] = dateStr.split('-')
  return `${month}/${day}/${year}`
}

function isOverdue(dateStr) {
  if (!dateStr) return false
  const today = new Date().toISOString().split('T')[0]
  return dateStr < today
}

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const fields = todo.data ?? {}
  const [editing, setEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(fields.title || '')
  const [editPriority, setEditPriority] = useState(fields.priority || 'medium')
  const [editDueDate, setEditDueDate] = useState(fields.due_date || '')
  const [saving, setSaving] = useState(false)
  const [toggling, setToggling] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState(null)

  const handleToggle = async () => {
    setToggling(true)
    try {
      await onToggle(todo)
    } catch (err) {
      setError(err.message)
    } finally {
      setToggling(false)
    }
  }

  const handleDelete = async () => {
    setDeleting(true)
    try {
      await onDelete(todo.id)
    } catch (err) {
      setError(err.message)
      setDeleting(false)
    }
  }

  const handleSave = async () => {
    if (!editTitle.trim()) return
    setSaving(true)
    setError(null)
    try {
      await onUpdate(todo, editTitle.trim(), editPriority, editDueDate)
      setEditing(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleCancelEdit = () => {
    setEditTitle(fields.title || '')
    setEditPriority(fields.priority || 'medium')
    setEditDueDate(fields.due_date || '')
    setEditing(false)
    setError(null)
  }

  const overdue = !fields.completed && isOverdue(fields.due_date)

  return (
    <div
      className={`bg-white rounded-xl border-l-4 border border-slate-200 transition-all ${
        deleting ? 'opacity-50 scale-95' : ''
      } ${fields.completed ? 'border-l-slate-200 opacity-75' : PRIORITY_BORDER[fields.priority] || 'border-l-slate-300'} shadow-sm hover:shadow-md`}
    >
      {editing ? (
        <div className="p-4 space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave()
              if (e.key === 'Escape') handleCancelEdit()
            }}
          />
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Priority:</span>
              <div className="flex gap-1">
                {PRIORITIES.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setEditPriority(p)}
                    className={`px-2 py-0.5 rounded text-xs font-medium capitalize border transition-all ${
                      editPriority === p
                        ? PRIORITY_STYLES[p] + ' ring-1 ring-offset-1 ring-emerald-400'
                        : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {p}
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
                className="px-2 py-0.5 rounded border border-slate-300 text-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          {error && <p className="text-xs text-red-600">{error}</p>}
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleCancelEdit}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 text-xs hover:bg-slate-50 transition-colors"
            >
              <X className="w-3 h-3" /> Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving || !editTitle.trim()}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white text-xs font-medium transition-colors"
            >
              <Check className="w-3 h-3" /> {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-3 p-4">
          <button
            onClick={handleToggle}
            disabled={toggling}
            className="mt-0.5 flex-shrink-0 text-slate-400 hover:text-emerald-600 transition-colors disabled:opacity-50"
          >
            {fields.completed
              ? <CheckCircle2 className="w-5 h-5 text-teal-500" />
              : <Circle className="w-5 h-5" />
            }
          </button>

          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium leading-snug ${
              fields.completed ? 'line-through text-slate-400' : 'text-slate-800'
            }`}>
              {fields.title}
            </p>
            {fields.due_date && (
              <div className={`flex items-center gap-1 mt-1 text-xs ${
                overdue ? 'text-red-500' : 'text-slate-400'
              }`}>
                <Calendar className="w-3 h-3" />
                <span>{overdue ? 'Overdue · ' : ''}{formatDate(fields.due_date)}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {fields.priority && (
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${PRIORITY_STYLES[fields.priority] || PRIORITY_STYLES.medium}`}>
                {fields.priority}
              </span>
            )}
            <button
              onClick={() => setEditing(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              title="Edit"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
              title="Delete"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
