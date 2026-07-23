import React, { useState } from 'react'
import { Plus, Calendar } from 'lucide-react'

const PRIORITIES = ['low', 'medium', 'high']

export default function TodoInput({ onAdd }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [showOptions, setShowOptions] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return

    setSubmitting(true)
    setError(null)
    try {
      await onAdd(trimmed, priority, dueDate)
      setTitle('')
      setPriority('medium')
      setDueDate('')
      setShowOptions(false)
    } catch (err) {
      setError(err.message || 'Failed to add todo')
    } finally {
      setSubmitting(false)
    }
  }

  const priorityColors = {
    low: 'bg-slate-100 text-slate-600 border-slate-200',
    medium: 'bg-amber-100 text-amber-700 border-amber-200',
    high: 'bg-red-100 text-red-700 border-red-200',
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white transition-colors"
            disabled={submitting}
          />
          <button
            type="button"
            onClick={() => setShowOptions((v) => !v)}
            className={`px-3 py-2.5 rounded-lg border text-sm transition-colors ${
              showOptions
                ? 'border-emerald-300 bg-emerald-50 text-emerald-600'
                : 'border-slate-200 text-slate-500 hover:bg-slate-50'
            }`}
            title="More options"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <button
            type="submit"
            disabled={submitting || !title.trim()}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        {showOptions && (
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Priority:</span>
              <div className="flex gap-1">
                {PRIORITIES.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium border capitalize transition-all ${
                      priority === p
                        ? priorityColors[p] + ' ring-2 ring-offset-1 ring-emerald-400'
                        : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Due date:</span>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        )}
      </form>

      {error && (
        <p className="mt-2 text-xs text-red-600">{error}</p>
      )}
    </div>
  )
}
