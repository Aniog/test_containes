import { useState, useEffect, useCallback } from 'react'
import { Loader2 } from 'lucide-react'
import TodoInput from '../components/todo/TodoInput.jsx'
import TodoList from '../components/todo/TodoList.jsx'
import TodoFilter from '../components/todo/TodoFilter.jsx'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todos.js'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchTodos()
      setTodos(rows)
      console.log('Loaded todos:', rows.length)
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError('Failed to load tasks. Please try again.')
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
      setTodos((prev) => [created, ...prev])
      console.log('Created todo:', created.id)
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError('Failed to add task. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const handleToggle = async (item) => {
    const fields = item?.data ?? {}
    setBusy(true)
    setError(null)
    try {
      const updated = await updateTodo(item, { completed: !fields.completed })
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
      console.log('Toggled todo:', updated.id, 'completed:', updated.data?.completed)
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setError('Failed to update task. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const handleDelete = async (id) => {
    setBusy(true)
    setError(null)
    try {
      await deleteTodo(id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
      console.log('Deleted todo:', id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError('Failed to delete task. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t?.data?.completed)
    if (completed.length === 0) return
    setBusy(true)
    setError(null)
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
      setTodos((prev) => prev.filter((t) => !t?.data?.completed))
      console.log('Cleared', completed.length, 'completed todos')
    } catch (err) {
      console.error('Failed to clear completed todos:', err)
      setError('Failed to clear completed tasks. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t?.data?.completed
    if (filter === 'completed') return t?.data?.completed
    return true
  })

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t?.data?.completed).length,
    completed: todos.filter((t) => t?.data?.completed).length,
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12">
      <div className="max-w-lg mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            My Workspace
          </p>
          <h1 className="text-4xl font-black text-white tracking-tight leading-none">
            Task List
          </h1>
          <p className="text-sm text-zinc-500 mt-2">
            {counts.active === 0 && counts.all > 0
              ? '✓ All tasks completed'
              : counts.active === 1
              ? '1 task remaining'
              : `${counts.active} tasks remaining`}
          </p>
        </div>

        {/* Progress bar */}
        {counts.all > 0 && (
          <div className="mb-6">
            <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.round((counts.completed / counts.all) * 100)}%` }}
              />
            </div>
            <p className="text-xs text-zinc-600 mt-1.5 text-right">
              {Math.round((counts.completed / counts.all) * 100)}% complete
            </p>
          </div>
        )}

        {/* Main Card */}
        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 space-y-5">

          {/* Input */}
          <TodoInput onAdd={handleAdd} disabled={busy || loading} />

          {/* Error */}
          {error && (
            <div className="text-sm text-rose-400 bg-rose-950 border border-rose-800 rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          {/* Filter */}
          {todos.length > 0 && (
            <TodoFilter filter={filter} onChange={setFilter} counts={counts} />
          )}

          {/* List */}
          {loading ? (
            <div className="flex items-center justify-center py-12 text-zinc-600">
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              <span className="text-sm">Loading tasks...</span>
            </div>
          ) : (
            <TodoList
              todos={filteredTodos}
              onToggle={handleToggle}
              onDelete={handleDelete}
              disabled={busy}
            />
          )}

          {/* Footer */}
          {counts.completed > 0 && (
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-600">
                {counts.completed} completed
              </span>
              <button
                type="button"
                onClick={handleClearCompleted}
                disabled={busy}
                className="text-xs text-rose-400 hover:text-rose-300 font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Clear completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp
