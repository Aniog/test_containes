import React, { useState } from 'react'

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-b border-gray-100">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-5 py-4 text-gray-700 placeholder-gray-300 text-base outline-none bg-transparent"
        autoFocus
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="px-5 py-4 text-indigo-500 hover:text-indigo-700 disabled:text-gray-300 font-semibold text-sm transition-colors"
      >
        Add
      </button>
    </form>
  )
}
