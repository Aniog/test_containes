import { useState, useRef } from 'react'
import { Plus } from 'lucide-react'

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onAdd(value)
    setValue('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
        autoFocus
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="flex items-center gap-1.5 px-4 py-2.5 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  )
}
