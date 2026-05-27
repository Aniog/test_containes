import React, { useState } from 'react'

const PRIORITIES = [
  { value: 'high', label: '高' },
  { value: 'medium', label: '中' },
  { value: 'low', label: '低' },
]

export default function TodoInput({ onAdd }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd({ title: trimmed, priority })
    setTitle('')
    setPriority('medium')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex gap-2 items-center"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="添加新任务..."
        className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-slate-200 rounded-lg px-2 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white"
      >
        {PRIORITIES.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
      >
        添加
      </button>
    </form>
  )
}
