import { useState } from 'react'
import { Check, Trash2, Pencil, X, Calendar, Tag } from 'lucide-react'

const PRIORITY_STYLES = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-sky-100 text-sky-700',
}

const PRIORITY_LABELS = {
  high: '高',
  medium: '中',
  low: '低',
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const fields = todo.data ?? {}
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(fields.title || '')
  const [toggling, setToggling] = useState(false)

  const handleToggle = async () => {
    setToggling(true)
    await onToggle(todo)
    setToggling(false)
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    if (!editValue.trim()) return
    await onEdit(todo, editValue.trim())
    setEditing(false)
  }

  const handleEditCancel = () => {
    setEditValue(fields.title || '')
    setEditing(false)
  }

  const isOverdue =
    fields.due_date &&
    !fields.completed &&
    new Date(fields.due_date) < new Date(new Date().toDateString())

  return (
    <div
      className={`bg-white rounded-xl border shadow-sm p-4 transition-all ${
        fields.completed ? 'border-slate-100 opacity-70' : 'border-slate-200'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          type="button"
          onClick={handleToggle}
          disabled={toggling}
          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
            fields.completed
              ? 'bg-emerald-500 border-emerald-500'
              : 'border-slate-300 hover:border-indigo-500'
          }`}
          aria-label={fields.completed ? '标记为未完成' : '标记为已完成'}
        >
          {fields.completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {editing ? (
            <form onSubmit={handleEditSubmit} className="flex gap-2">
              <input
                autoFocus
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="flex-1 h-8 px-2 rounded-lg border border-indigo-400 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="h-8 px-3 rounded-lg bg-indigo-600 text-white text-xs hover:bg-indigo-700 transition-colors"
              >
                保存
              </button>
              <button
                type="button"
                onClick={handleEditCancel}
                className="h-8 px-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <p
              className={`text-sm font-medium leading-snug break-words ${
                fields.completed
                  ? 'line-through text-slate-400'
                  : 'text-slate-800'
              }`}
            >
              {fields.title}
            </p>
          )}

          {/* Meta */}
          {!editing && (
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              {fields.priority && (
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    PRIORITY_STYLES[fields.priority] || 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {PRIORITY_LABELS[fields.priority] || fields.priority}优先级
                </span>
              )}
              {fields.category && (
                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                  <Tag className="w-3 h-3" />
                  {fields.category}
                </span>
              )}
              {fields.due_date && (
                <span
                  className={`inline-flex items-center gap-1 text-xs ${
                    isOverdue ? 'text-red-500 font-medium' : 'text-slate-400'
                  }`}
                >
                  <Calendar className="w-3 h-3" />
                  {isOverdue ? '已逾期 · ' : ''}
                  {fields.due_date}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        {!editing && (
          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              aria-label="编辑"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onDelete(todo.id)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              aria-label="删除"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
