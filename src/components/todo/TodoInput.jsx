import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const TodoInput = ({ onAdd }) => {
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
        onChange={e => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent shadow-sm transition"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="flex items-center gap-1.5 px-4 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors duration-150"
      >
        <Plus size={18} />
        Add
      </button>
    </form>
  )
}

export default TodoInput
