import React, { useState, useEffect } from 'react'
import { Plus, Loader2, AlertCircle, CheckCheck, ClipboardList } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos.js'
import TodoItem from './TodoItem'

const FILTERS = ['All', 'Active', 'Completed']

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [adding, setAdding] = useState(false)
  const [filter, setFilter] = useState('All')

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

  const handleAdd = async (e) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setAdding(true)
    const newItem = await createTodo(trimmed)
    setList((prev) => [newItem, ...prev])
    setInputValue('')
    setAdding(false)
  }

  const handleToggle = async (item) => {
    const updated = await updateTodo(item.id, {
      title: item.data.title,
      completed: !item.data.completed,
    })
    setList((prev) => prev.map((t) => (t.id === item.id ? updated : t)))
  }

  const handleDelete = async (id) => {
    const deletedId = await deleteTodo(id)
    setList((prev) => prev.filter((t) => t.id !== deletedId))
  }

  const handleClearCompleted = async () => {
    const completed = list.filter((t) => t.data?.completed)
    await Promise.all(completed.map((t) => deleteTodo(t.id)))
    setList((prev) => prev.filter((t) => !t.data?.completed))
  }

  const filteredList = list.filter((t) => {
    if (filter === 'Active') return !t.data?.completed
    if (filter === 'Completed') return t.data?.completed
    return true
  })

  const activeCount = list.filter((t) => !t.data?.completed).length
  const completedCount = list.filter((t) => t.data?.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-purple-50 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <div className="w-full max-w-lg mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <ClipboardList className="text-indigo-500" size={28} />
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Todos</h1>
        </div>
        <p className="text-slate-500 text-sm">Stay organized, stay productive.</p>
      </div>

      {/* Input */}
      <form onSubmit={handleAdd} className="w-full max-w-lg mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
          <button
            type="submit"
            disabled={adding || !inputValue.trim()}
            className="flex items-center gap-1.5 px-5 py-3 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors"
          >
            {adding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
            Add
          </button>
        </div>
      </form>

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
        {/* Filter Tabs */}
        <div className="flex border-b border-slate-100">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                filter === f
                  ? 'text-indigo-600 border-b-2 border-indigo-500 bg-indigo-50/50'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="p-4 flex flex-col gap-2 min-h-[200px]">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="animate-spin text-indigo-400" size={28} />
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 text-red-500 bg-red-50 border border-red-100 rounded-lg p-4 text-sm">
              <AlertCircle size={18} />
              <span>Error: {error}</span>
            </div>
          ) : filteredList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400 gap-2">
              <CheckCheck size={32} className="text-slate-300" />
              <p className="text-sm">
                {filter === 'Completed' ? 'No completed tasks yet.' : filter === 'Active' ? 'No active tasks!' : 'No todos yet. Add one above!'}
              </p>
            </div>
          ) : (
            filteredList.map((item) => (
              <TodoItem key={item.id} item={item} onToggle={handleToggle} onDelete={handleDelete} />
            ))
          )}
        </div>

        {/* Footer */}
        {list.length > 0 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 bg-slate-50/60">
            <span className="text-xs text-slate-500">
              {activeCount} item{activeCount !== 1 ? 's' : ''} left
            </span>
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="text-xs text-slate-500 hover:text-red-500 transition-colors font-medium"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        )}
      </div>

      <p className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} My Todos App</p>
    </div>
  )
}

export default TodoApp
