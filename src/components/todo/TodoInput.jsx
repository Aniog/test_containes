import { useState } from 'react'
import { Plus } from 'lucide-react'

const TodoInput = ({ onAdd, disabled }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
        disabled={disabled}
        className="flex-1 bg-zinc-800 rounded-xl border border-zinc-700 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-900 text-sm font-bold px-4 py-3 rounded-xl transition"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  )
}

export default TodoInput
