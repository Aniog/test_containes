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
        className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !text.trim()}
        className="flex items-center gap-2 px-5 py-3 bg-violet-500 hover:bg-violet-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
      >
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  )
}

export default TodoInput
