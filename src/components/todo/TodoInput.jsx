
import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
        aria-label="New todo text"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        aria-label="Add todo"
      >
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  )
}
