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
        className="flex-1 px-4 py-2.5 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 disabled:opacity-50"
        aria-label="New todo title"
      />
      <button
        type="submit"
        disabled={isLoading || !value.trim()}
        className="flex items-center gap-1.5 px-4 py-2.5 bg-indigo-500 text-white text-sm font-medium rounded-xl hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <Plus className="w-4 h-4" />
        <span>Add</span>
      </button>
    </form>
  )
}

export default TodoInput
