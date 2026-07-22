import { useState } from 'react'
import { Plus } from 'lucide-react'

const PRIORITIES = [
  { value: 'high', label: '高', color: 'text-red-600' },
  { value: 'medium', label: '中', color: 'text-amber-600' },
  { value: 'low', label: '低', color: 'text-sky-600' },
]

export default function TodoInput({ onCreate }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    setSubmitting(true)
    setError(null)
    try {
      await onCreate({
        title: title.trim(),
        priority,
        due_date: dueDate || undefined,
        category: category.trim() || undefined,
      })
      setTitle('')
      setDueDate('')
      setCategory('')
      setPriority('medium')
      setExpanded(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-4"
    >
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setExpanded(true)}
          placeholder="添加新的待办事项..."
          className="flex-1 h-10 px-3 rounded-lg border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={!title.trim() || submitting}
          className="h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
        >
          <Plus className="w-4 h-4" />
          添加
        </button>
      </div>

      {expanded && (
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* Priority */}
          <div>
            <label className="block text-xs text-slate-500 mb-1">优先级</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full h-9 px-2 rounded-lg border border-slate-300 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {PRIORITIES.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}优先级
                </option>
              ))}
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-xs text-slate-500 mb-1">截止日期</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full h-9 px-2 rounded-lg border border-slate-300 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs text-slate-500 mb-1">分类标签</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="如：工作、学习..."
              className="w-full h-9 px-2 rounded-lg border border-slate-300 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}

      {error && (
        <p className="mt-2 text-xs text-red-600">{error}</p>
      )}
    </form>
  )
}
