import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const TodoInput = ({ onAdd, disabled }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
        disabled={disabled}
        className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all duration-150
          disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold
          transition-all duration-150 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Plus size={16} strokeWidth={2.5} />
        Add
      </button>
    </form>
  )
}

export default TodoInput
