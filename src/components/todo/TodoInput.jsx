import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const TodoInput = ({ onAdd }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white rounded-lg px-4 py-2.5 flex items-center gap-1.5 text-sm font-medium transition-colors"
      >
        <Plus size={16} />
        Add
      </button>
    </form>
  )
}

export default TodoInput
