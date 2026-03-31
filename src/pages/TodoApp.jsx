import React, { useState, useEffect, useRef } from 'react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import { Loader2, AlertCircle, Plus, Trash2, CheckCircle2, Circle, ClipboardList } from 'lucide-react'

const FILTERS = ['All', 'Active', 'Completed']

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All')
  const [adding, setAdding] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchTodos()
      setList(data)
      console.log('Todos loaded:', data.length)
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    try {
      setAdding(true)
      const newItem = await createTodo(trimmed)
      setList(prev => [newItem, ...prev])
      setInput('')
      console.log('Todo added:', newItem.id)
    } catch (err) {
      console.error('Failed to add todo:', err)
      setError(err.message || 'Failed to add todo')
    } finally {
      setAdding(false)
      inputRef.current?.focus()
    }
  }

  const handleToggle = async (item) => {
    const optimistic = list.map(t =>
      t.id === item.id ? { ...t, data: { ...t.data, completed: !t.data.completed } } : t
    )
    setList(optimistic)
    try {
      const updated = await updateTodo(item.id, {
        title: item.data.title,
        completed: !item.data.completed,
      })
      setList(prev => prev.map(t => t.id === item.id ? updated : t))
      console.log('Todo toggled:', item.id)
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setList(list)
      setError(err.message || 'Failed to update todo')
    }
  }

  const handleDelete = async (id) => {
    const prev = list
    setList(list.filter(t => t.id !== id))
    try {
      await deleteTodo(id)
      console.log('Todo deleted:', id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setList(prev)
      setError(err.message || 'Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    const completed = list.filter(t => t.data?.completed)
    if (completed.length === 0) return
    const prev = list
    setList(list.filter(t => !t.data?.completed))
    try {
      await Promise.all(completed.map(t => deleteTodo(t.id)))
      console.log('Cleared completed todos:', completed.length)
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setList(prev)
      setError(err.message || 'Failed to clear completed todos')
    }
  }

  const filtered = list.filter(t => {
    if (filter === 'Active') return !t.data?.completed
    if (filter === 'Completed') return t.data?.completed
    return true
  })

  const activeCount = list.filter(t => !t.data?.completed).length
  const completedCount = list.filter(t => t.data?.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <div className="w-full max-w-lg mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <ClipboardList className="w-8 h-8 text-indigo-500" />
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">My Todos</h1>
        </div>
        <p className="text-slate-500 text-sm">Stay organized, stay productive.</p>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="w-full max-w-lg mb-4 flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
          <button onClick={() => setError(null)} className="ml-auto text-red-400 hover:text-red-600 font-bold">✕</button>
        </div>
      )}

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Add Input */}
        <form onSubmit={handleAdd} className="flex items-center gap-2 px-5 py-4 border-b border-slate-100">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
            disabled={adding}
          />
          <button
            type="submit"
            disabled={adding || !input.trim()}
            className="flex items-center gap-1.5 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
          >
            {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Add
          </button>
        </form>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 px-5 py-3 border-b border-slate-100 bg-slate-50">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                filter === f
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'text-slate-500 hover:bg-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-3 text-xs text-slate-400">
            <span>{activeCount} left</span>
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="text-red-400 hover:text-red-600 font-medium transition-colors"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-slate-100">
          {loading ? (
            <div className="flex justify-center items-center py-16 text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              <span className="text-sm">Loading todos…</span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-slate-400 gap-2">
              <ClipboardList className="w-10 h-10 opacity-30" />
              <p className="text-sm">
                {filter === 'All' ? 'No todos yet. Add one above!' : `No ${filter.toLowerCase()} todos.`}
              </p>
            </div>
          ) : (
            filtered.map(item => (
              <TodoRow
                key={item.id}
                item={item}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} My Todos App
        </div>
      </div>
    </div>
  )
}

const TodoRow = ({ item, onToggle, onDelete }) => {
  const completed = item.data?.completed
  return (
    <div className={`flex items-center gap-3 px-5 py-3.5 group transition-colors hover:bg-slate-50 ${completed ? 'opacity-60' : ''}`}>
      <button
        onClick={() => onToggle(item)}
        className="shrink-0 text-slate-400 hover:text-indigo-500 transition-colors"
        aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {completed
          ? <CheckCircle2 className="w-5 h-5 text-indigo-400" />
          : <Circle className="w-5 h-5" />}
      </button>
      <span className={`flex-1 text-sm text-slate-700 ${completed ? 'line-through text-slate-400' : ''}`}>
        {item.data?.title}
      </span>
      <button
        onClick={() => onDelete(item.id)}
        className="shrink-0 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
        aria-label="Delete todo"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default TodoApp
