import { useState } from 'react'

const TodoInput = ({ onAdd, loading }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        disabled={loading}
        className="flex-1 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-shadow disabled:opacity-60 text-sm"
      />
      <button
        type="submit"
        disabled={loading || !value.trim()}
        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-medium rounded-lg px-5 py-2.5 transition-colors text-sm whitespace-nowrap"
      >
        Add Task
      </button>
    </form>
  )
}

export default TodoInput
