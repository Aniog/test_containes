import { useState } from 'react'
import { Plus, Calendar, Flag } from 'lucide-react'
import { cn } from '@/lib/utils'

const PRIORITIES = ['low', 'medium', 'high']

export default function AddTodoForm({ onAdd, loading }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')
  const [expanded, setExpanded] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    await onAdd({ title: trimmed, priority, due_date: dueDate || undefined, completed: false })
    setTitle('')
    setPriority('medium')
    setDueDate('')
    setExpanded(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl shadow-sm p-4">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full border-2 border-dashed border-slate-300 flex-shrink-0" />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setExpanded(true)}
          placeholder="Add a new task…"
          className="flex-1 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={!title.trim() || loading}
          className="flex-shrink-0 bg-violet-600 hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-4 flex-wrap">
          {/* Priority */}
          <div className="flex items-center gap-2">
            <Flag className="w-3.5 h-3.5 text-slate-400" />
            <div className="flex gap-1">
              {PRIORITIES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={cn(
                    'text-xs px-2.5 py-1 rounded-full font-medium capitalize transition-colors',
                    priority === p
                      ? p === 'high' ? 'bg-red-100 text-red-700'
                        : p === 'medium' ? 'bg-amber-100 text-amber-700'
                        : 'bg-slate-200 text-slate-700'
                      : 'text-slate-400 hover:bg-slate-100'
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Due date */}
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="text-xs text-slate-600 border border-slate-200 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>
        </div>
      )}
    </form>
  )
}
