import { useState } from 'react'
import { Plus } from 'lucide-react'

const TodoInput = ({ onAdd, isLoading }) => {
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
        disabled={isLoading}
        className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={isLoading || !value.trim()}
        aria-label="Add todo"
        className="flex-shrink-0 flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white rounded-xl px-5 py-3 font-semibold text-sm transition-colors duration-200"
      >
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  )
}

export default TodoInput
