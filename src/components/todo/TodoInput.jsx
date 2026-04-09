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
        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition disabled:opacity-50 text-sm shadow-sm"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="flex items-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white rounded-xl font-medium text-sm transition shadow-sm cursor-pointer disabled:cursor-not-allowed"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  )
}

export default TodoInput
