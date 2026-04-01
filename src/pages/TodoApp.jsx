import React, { useState, useEffect } from 'react'
import { Loader2, AlertCircle, Plus, Trash2, CheckCircle2, Circle, ClipboardList } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'

const FILTERS = ['All', 'Active', 'Completed']

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [input, setInput] = useState('')
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
    const trimmed = input.trim()
    if (!trimmed) return
    setAdding(true)
    const newItem = await createTodo(trimmed)
    setList(prev => [newItem, ...prev])
    setInput('')
    setAdding(false)
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

  const activeCount = list.filter(t => !t.data?.completed).length
  const completedCount = list.filter(t => t.data?.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex flex-col items-center px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-violet-600 text-white p-2.5 rounded-xl shadow-md">
          <ClipboardList className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">My Todo List</h1>
      </div>

      <div className="w-full max-w-lg">
        {/* Add Input */}
        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
          />
          <button
            type="submit"
            disabled={adding || !input.trim()}
            className="flex items-center gap-1.5 px-5 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white font-semibold rounded-xl shadow-sm transition"
          >
            {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Add
          </button>
        </form>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {/* Filter Tabs */}
          <div className="flex border-b border-gray-100">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-3 text-sm font-medium transition ${
                  filter === f
                    ? 'text-violet-600 border-b-2 border-violet-600 bg-violet-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-50">
            {loading ? (
              <div className="flex justify-center items-center py-16 text-violet-400">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className="text-sm text-gray-400">Loading todos...</span>
              </div>
            ) : error ? (
              <div className="flex items-center gap-2 p-6 text-red-500 bg-red-50">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="text-sm">Error: {error}</span>
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-16 text-center text-gray-400 text-sm">
                {filter === 'Completed' ? 'No completed tasks yet.' : filter === 'Active' ? 'No active tasks. Great job!' : 'No tasks yet. Add one above!'}
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
          {!loading && !error && list.length > 0 && (
            <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-400">
                {activeCount} item{activeCount !== 1 ? 's' : ''} left
              </span>
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="text-xs text-red-400 hover:text-red-600 font-medium transition"
                >
                  Clear completed ({completedCount})
                </button>
              )}
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} My Todo App
        </p>
      </div>
    </div>
  )
}

const TodoRow = ({ item, onToggle, onDelete }) => {
  const [toggling, setToggling] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const completed = item.data?.completed

  const handleToggle = async () => {
    setToggling(true)
    await onToggle(item)
    setToggling(false)
  }

  const handleDelete = async () => {
    setDeleting(true)
    await onDelete(item.id)
  }

  return (
    <div className={`flex items-center gap-3 px-5 py-4 group transition ${deleting ? 'opacity-40' : 'hover:bg-gray-50'}`}>
      <button
        onClick={handleToggle}
        disabled={toggling}
        className="shrink-0 text-gray-300 hover:text-violet-500 transition"
        aria-label="Toggle complete"
      >
        {toggling
          ? <Loader2 className="w-5 h-5 animate-spin text-violet-400" />
          : completed
            ? <CheckCircle2 className="w-5 h-5 text-violet-500" />
            : <Circle className="w-5 h-5" />
        }
      </button>

      <span className={`flex-1 text-sm leading-relaxed ${completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
        {item.data?.title}
      </span>

      <button
        onClick={handleDelete}
        disabled={deleting}
        className="shrink-0 text-gray-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition"
        aria-label="Delete todo"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default TodoApp
