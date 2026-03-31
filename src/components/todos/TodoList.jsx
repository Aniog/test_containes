import React, { useState, useEffect } from 'react'
import { Loader2, AlertCircle, ClipboardList, Trash2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import TodoItem from './TodoItem'

const FILTERS = ['All', 'Active', 'Completed']

const TodoList = () => {
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
    const completed = list.filter((t) => t.data.completed)
    await Promise.all(completed.map((t) => deleteTodo(t.id)))
    setList((prev) => prev.filter((t) => !t.data.completed))
  }

  const filteredList = list.filter((t) => {
    if (filter === 'Active') return !t.data.completed
    if (filter === 'Completed') return t.data.completed
    return true
  })

  const activeCount = list.filter((t) => !t.data.completed).length
  const completedCount = list.filter((t) => t.data.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50 flex flex-col items-center px-4 py-12">
      {/* Header */}
      <div className="w-full max-w-lg mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <ClipboardList className="text-indigo-500" size={28} />
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Todos</h1>
        </div>
        <p className="text-slate-400 text-sm">Stay organized, stay productive.</p>
      </div>

      {/* Input */}
      <form onSubmit={handleAdd} className="w-full max-w-lg mb-6 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
          disabled={adding}
        />
        <button
          type="submit"
          disabled={adding || !inputValue.trim()}
          className="px-5 py-3 rounded-xl bg-indigo-500 text-white text-sm font-semibold shadow-sm hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
        >
          {adding ? <Loader2 size={16} className="animate-spin" /> : 'Add'}
        </button>
      </form>

      {/* Filter Tabs */}
      <div className="w-full max-w-lg flex gap-1 mb-4 bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
              filter === f
                ? 'bg-indigo-500 text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="w-full max-w-lg flex flex-col gap-2">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-indigo-400" size={28} />
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-100 rounded-xl text-red-500 text-sm">
            <AlertCircle size={18} />
            <span>Error: {error}</span>
          </div>
        ) : filteredList.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-sm">
            {filter === 'Completed' ? 'No completed tasks yet.' : filter === 'Active' ? 'No active tasks. Great job!' : 'No tasks yet. Add one above!'}
          </div>
        ) : (
          filteredList.map((item) => (
            <TodoItem key={item.id} item={item} onToggle={handleToggle} onDelete={handleDelete} />
          ))
        )}
      </div>

      {/* Footer */}
      {list.length > 0 && (
        <div className="w-full max-w-lg mt-5 flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            {activeCount} {activeCount === 1 ? 'item' : 'items'} left
          </span>
          {completedCount > 0 && (
            <button
              onClick={handleClearCompleted}
              className="flex items-center gap-1 text-slate-400 hover:text-red-500 transition-colors duration-150"
            >
              <Trash2 size={13} />
              Clear completed ({completedCount})
            </button>
          )}
        </div>
      )}

      {/* Footer year */}
      <p className="mt-12 text-xs text-slate-300">© {new Date().getFullYear()} My Todos</p>
    </div>
  )
}

export default TodoList
