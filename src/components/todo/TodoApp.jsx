import { useState, useEffect, useCallback } from 'react'
import { CheckCheck, Loader2 } from 'lucide-react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoFilter from './TodoFilter'
import TodoEmpty from './TodoEmpty'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../api/todos'

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
    } catch (err) {
      console.error('Failed to add todo:', err)
      setError('Failed to add task. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const handleToggle = async (item) => {
    const fields = item?.data ?? {}
    setBusy(true)
    setError(null)
    const optimistic = todos.map((t) =>
      t.id === item.id
        ? { ...t, data: { ...fields, completed: !fields.completed } }
        : t
    )
    setTodos(optimistic)
    try {
      const updated = await updateTodo(item, { completed: !fields.completed })
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setError('Failed to update task. Please try again.')
      setTodos(todos)
    } finally {
      setBusy(false)
    }
  }

  const handleDelete = async (id) => {
    setBusy(true)
    setError(null)
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError('Failed to delete task. Please try again.')
      await loadTodos()
    } finally {
      setBusy(false)
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t?.data?.completed)
    if (!completed.length) return
    setBusy(true)
    setError(null)
    setTodos((prev) => prev.filter((t) => !t?.data?.completed))
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError('Failed to clear completed tasks. Please try again.')
      await loadTodos()
    } finally {
      setBusy(false)
    }
  }

  const filtered = todos.filter((t) => {
    const completed = t?.data?.completed ?? false
    if (filter === 'active') return !completed
    if (filter === 'completed') return completed
    return true
  })

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t?.data?.completed).length,
    completed: todos.filter((t) => t?.data?.completed).length,
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
            My Tasks
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {counts.active === 0
              ? 'All caught up!'
              : `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          {/* Input */}
          <TodoInput onAdd={handleAdd} disabled={busy || loading} />

          {/* Error */}
          {error && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {/* Filter tabs */}
          <TodoFilter filter={filter} onChange={setFilter} counts={counts} />

          {/* List */}
          {loading ? (
            <div className="flex items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              <span className="text-sm">Loading tasks...</span>
            </div>
          ) : filtered.length === 0 ? (
            <TodoEmpty filter={filter} />
          ) : (
            <ul className="space-y-2">
              {filtered.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                  disabled={busy}
                />
              ))}
            </ul>
          )}

          {/* Footer */}
          {counts.completed > 0 && (
            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                onClick={handleClearCompleted}
                disabled={busy}
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-red-500 transition-colors duration-200 disabled:opacity-40"
              >
                <CheckCheck className="w-4 h-4" />
                Clear {counts.completed} completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp
