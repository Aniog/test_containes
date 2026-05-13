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
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 px-5 py-4 border-b border-gray-100"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 text-gray-800 placeholder-gray-400 text-base outline-none bg-transparent"
        autoFocus
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  )
}
