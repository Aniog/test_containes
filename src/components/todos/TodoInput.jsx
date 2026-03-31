import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const TodoInput = ({ onAdd, loading }) => {
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
        disabled={loading}
        className="flex-1 px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 placeholder-gray-400 transition-all duration-200 disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={loading || !value.trim()}
        className="flex items-center gap-2 px-4 py-3 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <Plus size={16} strokeWidth={2.5} />
        <span>Add</span>
      </button>
    </form>
  )
}

export default TodoInput
