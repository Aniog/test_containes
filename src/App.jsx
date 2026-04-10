import { useState, useEffect, useCallback } from 'react'
import { CheckCircle2, ClipboardList, Trash2 } from 'lucide-react'
import TodoInput from './components/TodoInput.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoFilter from './components/TodoFilter.jsx'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from './api/todos.js'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchTodos()
      setTodos(data)
    } catch (err) {
      console.error('[App] Load error:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (text) => {
    setActionLoading(true)
    setError(null)
    try {
      const newTodo = await createTodo(text)
      setTodos((prev) => [...prev, newTodo])
    } catch (err) {
      console.error('[App] Add error:', err)
      setError(err.message)
    } finally {
      setActionLoading(false)
    }
  }

  const handleToggle = async (id, completed) => {
    setActionLoading(true)
    setError(null)
    try {
      const updated = await updateTodo(id, { completed })
      setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)))
    } catch (err) {
      console.error('[App] Toggle error:', err)
      setError(err.message)
    } finally {
      setActionLoading(false)
    }
  }

  const handleDelete = async (id) => {
    setActionLoading(true)
    setError(null)
    try {
      await deleteTodo(id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      console.error('[App] Delete error:', err)
      setError(err.message)
    } finally {
      setActionLoading(false)
    }
  }

  const handleClearCompleted = async () => {
    const completedIds = todos.filter((t) => t.completed).map((t) => t.id)
    if (!completedIds.length) return
    setActionLoading(true)
    setError(null)
    try {
      await deleteCompletedTodos(completedIds)
      setTodos((prev) => prev.filter((t) => !t.completed))
    } catch (err) {
      console.error('[App] Clear completed error:', err)
      setError(err.message)
    } finally {
      setActionLoading(false)
    }
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  }

  const isDisabled = loading || actionLoading

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-start justify-center pt-12 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-500 rounded-2xl shadow-lg mb-4">
            <ClipboardList className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">My Todo List</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Stay organized, get things done</p>
        </div>

        {/* Card */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6">
          <TodoInput onAdd={handleAdd} disabled={isDisabled} />

          {/* Filter */}
          {todos.length > 0 && (
            <div className="mb-4">
              <TodoFilter filter={filter} onChange={setFilter} counts={counts} />
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Loading skeleton */}
          {loading && (
            <ul className="space-y-2">
              {[1, 2, 3].map((i) => (
                <li key={i} className="h-12 bg-gray-100 dark:bg-gray-700 rounded-xl animate-pulse" />
              ))}
            </ul>
          )}

          {/* Empty state */}
          {!loading && filteredTodos.length === 0 && (
            <div className="text-center py-12">
              <CheckCircle2 className="w-12 h-12 text-gray-200 dark:text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                {filter === 'completed' ? 'No completed tasks yet' :
                 filter === 'active' ? 'No active tasks — all done!' :
                 'Add your first task above'}
              </p>
            </div>
          )}

          {/* Todo list */}
          {!loading && filteredTodos.length > 0 && (
            <ul className="space-y-2">
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                  disabled={isDisabled}
                />
              ))}
            </ul>
          )}

          {/* Footer */}
          {!loading && todos.length > 0 && (
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {counts.active} item{counts.active !== 1 ? 's' : ''} left
              </span>
              {counts.completed > 0 && (
                <button
                  onClick={handleClearCompleted}
                  disabled={isDisabled}
                  className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-600 dark:hover:text-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear completed ({counts.completed})
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
