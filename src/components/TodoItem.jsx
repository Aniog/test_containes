import { useState } from 'react'

const STATUS_LABELS = { todo: 'To Do', in_progress: 'In Progress', done: 'Done' }
const STATUS_STYLES = {
  todo: 'bg-slate-100 text-slate-600',
  in_progress: 'bg-blue-100 text-blue-700',
  done: 'bg-green-100 text-green-700',
}
const PRIORITY_STYLES = {
  low: 'bg-slate-100 text-slate-500',
  medium: 'bg-amber-100 text-amber-700',
  high: 'bg-red-100 text-red-600',
}
const NEXT_STATUS = { todo: 'in_progress', in_progress: 'done', done: 'todo' }
const NEXT_STATUS_LABEL = { todo: 'Start', in_progress: 'Complete', done: 'Reopen' }

function formatDate(dateStr) {
  if (!dateStr) return null
  const [year, month, day] = dateStr.split('-')
  return `${month}/${day}/${year}`
}

function isOverdue(dateStr, status) {
  if (!dateStr || status === 'done') return false
  const today = new Date().toISOString().split('T')[0]
  return dateStr < today
}

export default function TodoItem({ todo, onEdit, onDelete, onStatusChange }) {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const fields = todo.data ?? {}

  const handleStatusAdvance = async () => {
    setTransitioning(true)
    await onStatusChange(todo, NEXT_STATUS[fields.status])
    setTransitioning(false)
  }

  const handleDelete = () => {
    if (confirmDelete) {
      onDelete(todo.id)
    } else {
      setConfirmDelete(true)
      setTimeout(() => setConfirmDelete(false), 3000)
    }
  }

  const overdue = isOverdue(fields.due_date, fields.status)

  return (
    <div className={`bg-white rounded-xl border shadow-sm p-4 transition-opacity ${fields.status === 'done' ? 'opacity-70' : ''} ${confirmDelete ? 'border-red-300' : 'border-slate-200'}`}>
      <div className="flex items-start gap-3">
        {/* Checkbox-style status toggle */}
        <button
          onClick={handleStatusAdvance}
          disabled={transitioning}
          title={`Mark as ${NEXT_STATUS_LABEL[fields.status]}`}
          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
            fields.status === 'done'
              ? 'bg-green-500 border-green-500'
              : fields.status === 'in_progress'
              ? 'border-blue-500 bg-blue-50'
              : 'border-slate-300 hover:border-indigo-400'
          }`}
        >
          {fields.status === 'done' && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
          {fields.status === 'in_progress' && (
            <div className="w-2 h-2 rounded-full bg-blue-500" />
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium text-slate-900 leading-snug ${fields.status === 'done' ? 'line-through text-slate-400' : ''}`}>
            {fields.title}
          </p>
          {fields.description && (
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{fields.description}</p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_STYLES[fields.status] || STATUS_STYLES.todo}`}>
              {STATUS_LABELS[fields.status] || fields.status}
            </span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${PRIORITY_STYLES[fields.priority] || PRIORITY_STYLES.medium}`}>
              {fields.priority ? fields.priority.charAt(0).toUpperCase() + fields.priority.slice(1) : 'Medium'}
            </span>
            {fields.due_date && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${overdue ? 'bg-red-100 text-red-600 font-medium' : 'bg-slate-100 text-slate-500'}`}>
                {overdue ? '⚠ ' : ''}Due {formatDate(fields.due_date)}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={() => onEdit(todo)}
            title="Edit"
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={handleDelete}
            title={confirmDelete ? 'Click again to confirm' : 'Delete'}
            className={`p-1.5 rounded-lg transition-colors ${confirmDelete ? 'bg-red-100 text-red-600' : 'hover:bg-slate-100 text-slate-400 hover:text-red-500'}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
