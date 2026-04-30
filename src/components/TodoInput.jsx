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
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 px-5 py-4 border-b border-gray-100"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 text-gray-700 placeholder-gray-400 text-base outline-none bg-transparent"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500 hover:bg-green-600 disabled:bg-gray-200 disabled:cursor-not-allowed text-white transition-colors flex-shrink-0"
        aria-label="Add todo"
      >
        <Plus className="w-5 h-5" />
      </button>
    </form>
  )
}
