import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 p-4 border-b border-gray-100">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  )
}
