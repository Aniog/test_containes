import { useState } from 'react'

const TodoInput = ({ onAdd }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-400 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
      />
      <button
        type="submit"
        className="bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl px-5 py-2.5 text-sm transition-colors shadow-md disabled:opacity-50"
        disabled={!value.trim()}
      >
        Add
      </button>
    </form>
  )
}

export default TodoInput
