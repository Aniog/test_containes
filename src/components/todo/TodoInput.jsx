import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

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
        placeholder="What needs to be done?"
        disabled={disabled}
        className={cn(
          'flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800',
          'placeholder:text-slate-400 text-sm font-medium',
          'focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'shadow-sm transition-all duration-200'
        )}
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className={cn(
          'flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold',
          'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'shadow-sm transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2'
        )}
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  )
}

export default TodoInput
