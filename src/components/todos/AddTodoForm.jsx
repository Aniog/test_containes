import { useState } from 'react'
import { Plus, Calendar } from 'lucide-react'

const PRIORITIES = ['low', 'medium', 'high']

export default function AddTodoForm({ onAdd, loading }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')
  const [expanded, setExpanded] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    await onAdd({ title: title.trim(), priority, due_date: dueDate || undefined, completed: false })
    setTitle('')
    setPriority('medium')
    setDueDate('')
    setExpanded(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-4"
    >
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setExpanded(true)}
          placeholder="Add a new task..."
          className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !title.trim()}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {expanded && (
        <div className="mt-3 flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Priority:</span>
            <div className="flex gap-1">
              {PRIORITIES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
                    priority === p
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
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border border-slate-300 rounded-lg px-2 py-1 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      )}
    </form>
  )
}
