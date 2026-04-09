import { useState } from 'react'
import { Plus } from 'lucide-react'

const TodoInput = ({ onAdd, disabled }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        disabled={disabled}
        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition disabled:opacity-50 text-sm"
      />
      <button
        type="submit"
        disabled={disabled || !text.trim()}
        className="flex items-center gap-2 px-4 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white rounded-xl font-medium text-sm transition focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
      >
        <Plus className="w-4 h-4" />
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  )
}

export default TodoInput
