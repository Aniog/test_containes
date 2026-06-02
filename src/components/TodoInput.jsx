import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 border border-green-300 rounded-lg px-4 py-2.5 text-green-900 text-sm placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white rounded-lg px-4 py-2.5 font-medium text-sm transition-colors flex items-center gap-1.5"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  )
}
