import React, { useState } from 'react'
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
    <form onSubmit={handleSubmit} className="flex items-center gap-3 p-4 border-b border-gray-100">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 text-gray-800 placeholder-gray-400 text-base outline-none bg-transparent py-2"
        autoFocus
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
        aria-label="Add todo"
      >
        <Plus className="w-5 h-5" />
      </button>
    </form>
  )
}
