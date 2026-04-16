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
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 px-5 py-4 border-b border-gray-100"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 text-base outline-none"
        aria-label="New todo text"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Add todo"
      >
        <PlusCircle className="w-4 h-4" />
        Add
      </button>
    </form>
  )
}
