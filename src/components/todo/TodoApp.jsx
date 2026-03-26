import React, { useState, useEffect } from 'react'
import { Plus, CheckCheck, Loader2, AlertCircle } from 'lucide-react'
import TodoItem from './TodoItem'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todoApi'

const FILTERS = ['All', 'Active', 'Completed']

const TodoApp = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [adding, setAdding] = useState(false)

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    setLoading(true)
    setError(null)
    const data = await fetchTodos()
    setList(data)
    setLoading(false)
  }

  const handleAdd = async () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setAdding(true)
    const newItem = await createTodo(trimmed)
    setList(prev => [newItem, ...prev])
    setInput('')
    setAdding(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  const handleToggle = async (item) => {
    const updated = await updateTodo(item.id, {
      title: item.data.title,
      completed: !item.data.completed,
    })
    setList(prev => prev.map(t => t.id === item.id ? updated : t))
  }

  const handleDelete = async (id) => {
    const deletedId = await deleteTodo(id)
    setList(prev => prev.filter(t => t.id !== deletedId))
  }

  const handleClearCompleted = async () => {
    const completed = list.filter(t => t.data?.completed)
    await Promise.all(completed.map(t => deleteTodo(t.id)))
    setList(prev => prev.filter(t => !t.data?.completed))
  }

  const filtered = list.filter(t => {
    if (filter === 'Active') return !t.data?.completed
    if (filter === 'Completed') return t.data?.completed
    return true
  })

  const completedCount = list.filter(t => t.data?.completed).length
  const activeCount = list.length - completedCount

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-indigo-50 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-violet-600 drop-shadow-sm">TODO</h1>
        <p className="mt-2 text-slate-400 text-sm">Stay organised, stay productive.</p>
      </div>

      {/* Input */}
      <div className="w-full max-w-lg flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
        />
        <button
          onClick={handleAdd}
          disabled={adding || !input.trim()}
          className="flex items-center gap-1.5 px-5 py-3 bg-violet-500 hover:bg-violet-600 disabled:opacity-50 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors duration-150"
        >
          {adding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
          Add
        </button>
      </div>

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
        {/* Filter Tabs */}
        <div className="flex border-b border-slate-100">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-3 text-xs font-semibold tracking-wide transition-colors duration-150 ${
                filter === f
                  ? 'text-violet-600 border-b-2 border-violet-500 bg-violet-50'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="p-4 flex flex-col gap-2 min-h-[200px]">
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <Loader2 className="animate-spin text-violet-400" size={28} />
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 text-red-500 bg-red-50 border border-red-100 rounded-lg p-4 text-sm">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-slate-300 gap-2">
              <CheckCheck size={32} />
              <span className="text-sm">No tasks here!</span>
            </div>
          ) : (
            filtered.map(item => (
              <TodoItem
                key={item.id}
                item={item}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {!loading && list.length > 0 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 bg-slate-50 text-xs text-slate-400">
            <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="text-slate-400 hover:text-red-500 transition-colors duration-150 font-medium"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        )}
      </div>

      <p className="mt-8 text-xs text-slate-300">© {new Date().getFullYear()} Todo App</p>
    </div>
  )
}

export default TodoApp
