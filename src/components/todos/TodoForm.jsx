import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react'

const TodoForm = ({ onAdd, loading }) => {
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
        placeholder="What needs to be done?"
        disabled={loading}
        className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-sm shadow-sm"
      />
      <button
        type="submit"
        disabled={loading || !value.trim()}
        className="flex items-center gap-1.5 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white rounded-lg text-sm font-medium transition shadow-sm"
      >
        <PlusCircle size={16} />
        Add
      </button>
    </form>
  )
}

export default TodoForm
