import React, { useState, useEffect } from 'react'
import { Loader2, AlertCircle, Plus, Trash2, CheckCircle2, Circle, ClipboardList } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'

const FILTERS = ['All', 'Active', 'Completed']

const TodoApp = () => {
  const [todos, setTodos] = useState([])
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
    try {
      const data = await fetchTodos()
      setTodos(data)
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
    setAdding(true)
    try {
      const newItem = await createTodo(trimmed)
      setTodos(prev => [newItem, ...prev])
      setInput('')
    } catch (err) {
      console.error('Failed to add todo:', err)
    } finally {
      setAdding(false)
    }
  }

  const handleToggle = async (item) => {
    try {
      const updated = await updateTodo(item.id, {
        title: item.data.title,
        completed: !item.data.completed,
      })
      setTodos(prev => prev.map(t => t.id === item.id ? updated : t))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
    }
  }

  const handleDelete = async (id) => {
    try {
      const deletedId = await deleteTodo(id)
      setTodos(prev => prev.filter(t => t.id !== deletedId))
    } catch (err) {
      console.error('Failed to delete todo:', err)
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter(t => t.data?.completed)
    try {
      await Promise.all(completed.map(t => deleteTodo(t.id)))
      setTodos(prev => prev.filter(t => !t.data?.completed))
    } catch (err) {
      console.error('Failed to clear completed:', err)
    }
  }

  const filtered = todos.filter(t => {
    if (filter === 'Active') return !t.data?.completed
    if (filter === 'Completed') return t.data?.completed
    return true
  })

  const activeCount = todos.filter(t => !t.data?.completed).length
  const completedCount = todos.filter(t => t.data?.completed).length

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-violet-500 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 rounded-xl px-5 py-4">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-violet-600 text-white p-2.5 rounded-xl shadow-md">
          <ClipboardList className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">My Todos</h1>
      </div>

      <div className="w-full max-w-lg">
        {/* Add Input */}
        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
          />
          <button
            type="submit"
            disabled={adding || !input.trim()}
            className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-3 rounded-xl shadow-sm transition flex items-center gap-1.5 font-medium"
          >
            {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Add
          </button>
        </form>

        {/* Filter Tabs */}
        <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 mb-4 shadow-sm">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
                filter === f
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-gray-400">
              <ClipboardList className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No tasks here yet.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {filtered.map(item => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 px-4 py-3.5 group hover:bg-gray-50 transition"
                >
                  <button
                    onClick={() => handleToggle(item)}
                    className="shrink-0 text-gray-300 hover:text-violet-500 transition"
                    aria-label="Toggle complete"
                  >
                    {item.data?.completed
                      ? <CheckCircle2 className="w-5 h-5 text-violet-500" />
                      : <Circle className="w-5 h-5" />}
                  </button>
                  <span
                    className={`flex-1 text-sm ${
                      item.data?.completed ? 'line-through text-gray-400' : 'text-gray-700'
                    }`}
                  >
                    {item.data?.title}
                  </span>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="shrink-0 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
                    aria-label="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {todos.length > 0 && (
          <div className="flex items-center justify-between mt-4 px-1 text-xs text-gray-400">
            <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="hover:text-red-500 transition font-medium"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        )}
      </div>

      <p className="mt-12 text-xs text-gray-400">© {new Date().getFullYear()} My Todos</p>
    </div>
  )
}

export default TodoApp
