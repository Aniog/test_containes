import { useState, useEffect, useCallback } from 'react'
import { CheckCircle2, ClipboardList, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoFilter from './TodoFilter'
import { cn } from '@/lib/utils'

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
      console.log('Loaded todos:', rows.length)
      setTodos(rows)
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError('Failed to load todos. Please try again.')
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
      setError('Failed to add todo. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const handleToggle = async (todo) => {
    const isCompleted = todo?.data?.completed === true
    setBusy(true)
    setError(null)
    try {
      const updated = await updateTodo(todo, { completed: !isCompleted })
      console.log('Updated todo:', updated)
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to update todo:', err)
      setError('Failed to update todo. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const handleDelete = async (id) => {
    setBusy(true)
    setError(null)
    try {
      await deleteTodo(id)
      console.log('Deleted todo:', id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError('Failed to delete todo. Please try again.')
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
      console.log('Cleared completed todos:', completed.length)
      setTodos((prev) => prev.filter((t) => t?.data?.completed !== true))
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError('Failed to clear completed todos. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const allCount = todos.length
  const activeCount = todos.filter((t) => t?.data?.completed !== true).length
  const completedCount = todos.filter((t) => t?.data?.completed === true).length

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return t?.data?.completed !== true
    if (filter === 'completed') return t?.data?.completed === true
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center pt-12 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-600 shadow-lg mb-4">
            <ClipboardList className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Todos</h1>
          <p className="text-slate-500 text-sm mt-1">Stay organized, get things done</p>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Input section */}
          <div className="p-5 border-b border-slate-100">
            <TodoInput onAdd={handleAdd} disabled={busy || loading} />
          </div>

          {/* Error banner */}
          {error && (
            <div className="mx-5 mt-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
              {error}
            </div>
          )}

          {/* Filter + stats */}
          <div className="px-5 pt-4 pb-3">
            <TodoFilter
              current={filter}
              onChange={setFilter}
              counts={{ all: allCount, active: activeCount, completed: completedCount }}
            />
          </div>

          {/* Todo list */}
          <div className="px-5 pb-5">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                <Loader2 className="w-8 h-8 animate-spin mb-3" />
                <p className="text-sm font-medium">Loading todos...</p>
              </div>
            ) : filteredTodos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                <CheckCircle2 className="w-10 h-10 mb-3 opacity-40" />
                <p className="text-sm font-semibold">
                  {filter === 'completed'
                    ? 'No completed tasks yet'
                    : filter === 'active'
                    ? 'No active tasks — all done!'
                    : 'No todos yet. Add one above!'}
                </p>
              </div>
            ) : (
              <ul className="flex flex-col gap-2 mt-1">
                {filteredTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                    disabled={busy}
                  />
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {!loading && todos.length > 0 && (
            <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between bg-slate-50">
              <span className="text-xs text-slate-500 font-medium">
                {activeCount} {activeCount === 1 ? 'item' : 'items'} left
              </span>
              {completedCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearCompleted}
                  disabled={busy}
                  className={cn(
                    'text-xs font-semibold text-slate-500 hover:text-red-600 transition-colors duration-150',
                    'focus:outline-none focus:underline',
                    busy && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  Clear completed ({completedCount})
                </button>
              )}
            </div>
          )}
        </div>

        {/* Progress bar */}
        {!loading && allCount > 0 && (
          <div className="mt-4 px-1">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-slate-500 font-medium">Progress</span>
              <span className="text-xs text-slate-500 font-medium">
                {completedCount}/{allCount} completed
              </span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${allCount > 0 ? (completedCount / allCount) * 100 : 0}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp
