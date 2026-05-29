import { useState } from 'react'
import { PlusCircle } from 'lucide-react'

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
        className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 transition disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="flex items-center gap-1.5 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <PlusCircle className="w-4 h-4" />
        Add
      </button>
    </form>
  )
}

export default TodoInput
