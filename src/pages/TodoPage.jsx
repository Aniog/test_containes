import { useState, useEffect, useCallback } from 'react'
import { CheckSquare, Loader2 } from 'lucide-react'
import TodoInput from '@/components/todo/TodoInput'
import TodoList from '@/components/todo/TodoList'
import TodoFooter from '@/components/todo/TodoFooter'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'

const FILTER_ALL = 'all'
const FILTER_ACTIVE = 'active'
const FILTER_COMPLETED = 'completed'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState(FILTER_ALL)
  const [loading, setLoading] = useState(true)
  const [mutating, setMutating] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchTodos()
      console.log('Loaded todos:', rows.length)
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
    setMutating(true)
    setError(null)
    try {
      const created = await createTodo(title)
      console.log('Created todo:', created)
      setTodos((prev) => [created, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError(err.message)
    } finally {
      setMutating(false)
    }
  }

  const handleToggle = async (item) => {
    const isCompleted = item?.data?.completed === true
    setMutating(true)
    setError(null)
    try {
      const updated = await updateTodo(item, { completed: !isCompleted })
      console.log('Toggled todo:', updated)
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setError(err.message)
    } finally {
      setMutating(false)
    }
  }

  const handleDelete = async (id) => {
    setMutating(true)
    setError(null)
    try {
      await deleteTodo(id)
      console.log('Deleted todo:', id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError(err.message)
    } finally {
      setMutating(false)
    }
  }

  const handleClearCompleted = async () => {
    const completedItems = todos.filter((t) => t?.data?.completed === true)
    if (completedItems.length === 0) return
    setMutating(true)
    setError(null)
    try {
      await Promise.all(completedItems.map((t) => deleteTodo(t.id)))
      console.log('Cleared completed todos:', completedItems.length)
      setTodos((prev) => prev.filter((t) => t?.data?.completed !== true))
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError(err.message)
    } finally {
      setMutating(false)
    }
  }

  const filteredTodos = todos.filter((t) => {
    const completed = t?.data?.completed === true
    if (filter === FILTER_ACTIVE) return !completed
    if (filter === FILTER_COMPLETED) return completed
    return true
  })

  const completedCount = todos.filter((t) => t?.data?.completed === true).length
  const isBusy = loading || mutating

  const filterButtons = [
    { key: FILTER_ALL, label: 'All' },
    { key: FILTER_ACTIVE, label: 'Active' },
    { key: FILTER_COMPLETED, label: 'Completed' },
  ]

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-indigo-600 rounded-xl p-2.5">
            <CheckSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">My Tasks</h1>
            <p className="text-sm text-slate-500">Stay organized and get things done</p>
          </div>
          {todos.length > 0 && (
            <span className="ml-auto bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full px-2.5 py-1">
              {todos.length}
            </span>
          )}
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <TodoInput onAdd={handleAdd} loading={isBusy} />

          {/* Filter Tabs */}
          {todos.length > 0 && (
            <div className="flex gap-1 mb-4 bg-slate-100 rounded-lg p-1">
              {filterButtons.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-colors ${
                    filter === key
                      ? 'bg-white text-indigo-700 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              <span className="text-sm">Loading tasks…</span>
            </div>
          ) : (
            <TodoList
              items={filteredTodos}
              onToggle={handleToggle}
              onDelete={handleDelete}
              disabled={isBusy}
            />
          )}

          <TodoFooter
            total={todos.length}
            completed={completedCount}
            onClearCompleted={handleClearCompleted}
            disabled={isBusy}
          />
        </div>
      </div>
    </div>
  )
}

export default TodoPage
