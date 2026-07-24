import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const PRIORITIES = ['low', 'medium', 'high']
const PRIORITY_COLORS = {
  low: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  high: 'bg-red-100 text-red-700',
}

export default function TodoInput({ onAdd, loading }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    await onAdd({ title: title.trim(), priority, due_date: dueDate || undefined, category: category.trim() || undefined, completed: false })
    setTitle('')
    setDueDate('')
    setCategory('')
    setPriority('medium')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-violet-100 p-5 space-y-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="添加新任务..."
          className="flex-1 rounded-xl border border-violet-200 px-4 py-2.5 text-sm text-indigo-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
        />
        <button
          type="submit"
          disabled={loading || !title.trim()}
          className="flex items-center gap-1.5 rounded-xl bg-violet-500 hover:bg-violet-600 disabled:opacity-50 text-white px-4 py-2.5 text-sm font-medium transition"
        >
          <Plus className="w-4 h-4" />
          添加
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-500">优先级:</span>
          {PRIORITIES.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPriority(p)}
              className={cn(
                'text-xs px-2.5 py-1 rounded-full font-medium transition border',
                priority === p
                  ? PRIORITY_COLORS[p] + ' border-transparent ring-2 ring-offset-1 ring-violet-400'
                  : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'
              )}
            >
              {p === 'low' ? '低' : p === 'medium' ? '中' : '高'}
            </button>
          ))}
        </div>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="text-xs rounded-lg border border-violet-200 px-2.5 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
        />

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="分类 (可选)"
          className="text-xs rounded-lg border border-violet-200 px-2.5 py-1 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-300 transition w-28"
        />
      </div>
    </form>
  )
}
