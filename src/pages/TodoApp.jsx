import React, { useState, useEffect } from 'react'
import { Plus, Trash2, CheckCircle2, Circle, ClipboardList, Loader2, AlertCircle } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'

const FILTERS = ['All', 'Active', 'Completed']

const TodoApp = () => {
  const [todos, setTodos] = useState([])
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
    setTodos(data)
    setLoading(false)
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    setAdding(true)
    const newItem = await createTodo(trimmed)
    setTodos(prev => [newItem, ...prev])
    setInput('')
    setAdding(false)
  }

  const handleToggle = async (item) => {
    const updated = await updateTodo(item.id, {
      title: item.data.title,
      completed: !item.data.completed,
    })
    setTodos(prev => prev.map(t => t.id === item.id ? updated : t))
  }

  const handleDelete = async (id) => {
    const deletedId = await deleteTodo(id)
    setTodos(prev => prev.filter(t => t.id !== deletedId))
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter(t => t.data.completed)
    await Promise.all(completed.map(t => deleteTodo(t.id)))
    setTodos(prev => prev.filter(t => !t.data.completed))
  }

  const filtered = todos.filter(t => {
    if (filter === 'Active') return !t.data.completed
    if (filter === 'Completed') return t.data.completed
    return true
  })

  const activeCount = todos.filter(t => !t.data.completed).length
  const completedCount = todos.filter(t => t.data.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-violet-600 text-white p-2.5 rounded-xl shadow-md">
          <ClipboardList className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">My Todo List</h1>
      </div>

      <div className="w-full max-w-lg">
        {/* Add Todo Form */}
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
            className="flex items-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white font-semibold rounded-xl shadow-sm transition"
          >
            {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Add
          </button>
        </form>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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

          {/* Content */}
          <div className="min-h-[200px]">
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <Loader2 className="w-6 h-6 animate-spin text-violet-500" />
              </div>
            ) : error ? (
              <div className="flex items-center gap-2 text-red-500 p-6 bg-red-50 m-4 rounded-xl border border-red-100">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <ClipboardList className="w-10 h-10 mb-3 opacity-30" />
                <p className="text-sm">
                  {filter === 'All' ? 'No tasks yet. Add one above!' : `No ${filter.toLowerCase()} tasks.`}
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-50">
                {filtered.map(item => (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 px-5 py-4 group hover:bg-gray-50 transition"
                  >
                    <button
                      onClick={() => handleToggle(item)}
                      className="shrink-0 text-gray-300 hover:text-violet-500 transition p-0 border-0 bg-transparent"
                    >
                      {item.data.completed
                        ? <CheckCircle2 className="w-5 h-5 text-violet-500" />
                        : <Circle className="w-5 h-5" />}
                    </button>
                    <span className={`flex-1 text-sm leading-relaxed ${item.data.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                      {item.data.title}
                    </span>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="shrink-0 opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition p-0 border-0 bg-transparent"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {!loading && !error && todos.length > 0 && (
            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50">
              <span className="text-xs text-gray-400">
                {activeCount} {activeCount === 1 ? 'item' : 'items'} left
              </span>
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="text-xs text-gray-400 hover:text-red-500 transition px-0 py-0 border-0 bg-transparent"
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

export default TodoApp
