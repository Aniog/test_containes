import { useState } from 'react'
import { PlusCircle } from 'lucide-react'

export default function TodoInput({ onAdd }) {
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
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="flex items-center gap-1.5 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium px-4 py-2.5 rounded-lg transition"
      >
        <PlusCircle className="w-4 h-4" />
        Add
      </button>
    </form>
  )
}
