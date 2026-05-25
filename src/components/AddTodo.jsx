import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from './ui/button'

export default function AddTodo({ onAdd, disabled }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        disabled={disabled}
        className="flex-1 h-10 px-4 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-sm"
      />
      <Button
        type="submit"
        disabled={disabled || !title.trim()}
        className="h-10 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg flex items-center gap-1.5 disabled:opacity-50"
      >
        <Plus className="w-4 h-4" />
        <span className="hidden sm:inline">Add</span>
      </Button>
    </form>
  )
}
