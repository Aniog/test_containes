
import { useState } from 'react'
import { Plus } from 'lucide-react'

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed) {
      onAdd(trimmed)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
        autoFocus
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="flex items-center justify-center gap-1 px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Plus className="w-5 h-5" />
        Add
      </button>
    </form>
  )
}

export default TodoInput

