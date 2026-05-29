import { useState, useEffect, useCallback } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import TodoInput from '../components/todo/TodoInput.jsx'
import TodoList from '../components/todo/TodoList.jsx'
import TodoFilters from '../components/todo/TodoFilters.jsx'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todos.js'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchTodos()
      console.log('Loaded todos:', rows)
      setTodos(rows)
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (title) => {
    setBusy(true)
    setError(null)
    try {
      const created = await createTodo(title)
      console.log('Created todo:', created)
      setTodos((prev) => [created, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const handleToggle = async (item) => {
    const isCompleted = item?.data?.completed === true
    setBusy(true)
    setError(null)
    try {
      const updated = await updateTodo(item, { completed: !isCompleted })
      console.log('Updated todo:', updated)
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const handleDelete = async (id) => {
    setBusy(true)
    setError(null)
    try {
      await deleteTodo(id)
      console.log('Deleted todo id:', id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t?.data?.completed === true)
    if (completed.length === 0) return
    setBusy(true)
    setError(null)
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
      console.log('Cleared completed todos:', completed.map((t) => t.id))
      setTodos((prev) => prev.filter((t) => t?.data?.completed !== true))
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const completedCount = todos.filter((t) => t?.data?.completed === true).length
  const activeCount = todos.filter((t) => t?.data?.completed !== true).length

  const filteredTodos = todos.filter((t) => {
    if (filter === 'Active') return t?.data?.completed !== true
    if (filter === 'Completed') return t?.data?.completed === true
    return true
  })

  const counts = {
    All: todos.length,
    Active: activeCount,
    Completed: completedCount,
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-600 mb-4 shadow-md">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">My Tasks</h1>
          <p className="text-sm text-slate-500 mt-1">
            {activeCount === 0 && todos.length > 0
              ? 'All tasks completed!'
              : `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <TodoInput onAdd={handleAdd} disabled={busy || loading} />
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Filters */}
          <div className="px-4 pt-4 pb-2">
            <TodoFilters activeFilter={filter} onChange={setFilter} counts={counts} />
          </div>

          {/* List */}
          {loading ? (
            <div className="flex items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              <span className="text-sm">Loading tasks...</span>
            </div>
          ) : (
            <TodoList
              items={filteredTodos}
              onToggle={handleToggle}
              onDelete={handleDelete}
              disabled={busy}
            />
          )}

          {/* Footer */}
          {!loading && todos.length > 0 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
              <span className="text-xs text-slate-400">
                {completedCount} of {todos.length} completed
              </span>
              {completedCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearCompleted}
                  disabled={busy}
                  className="text-xs text-slate-400 hover:text-red-500 font-medium transition disabled:opacity-50"
                >
                  Clear completed ({completedCount})
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoPage
