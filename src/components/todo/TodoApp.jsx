import { useState, useEffect, useCallback } from 'react'
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoFilter from './TodoFilter'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loadingIds, setLoadingIds] = useState(new Set())
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const rows = await fetchTodos()
      setTodos(rows)
      setStatus('ready')
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError(err.message || 'Failed to load todos')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (title) => {
    setError(null)
    try {
      const created = await createTodo(title)
      if (created) {
        setTodos((prev) => [created, ...prev])
      }
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError(err.message || 'Failed to add task')
    }
  }

  const handleToggle = async (item) => {
    const fields = item?.data ?? {}
    setLoadingIds((prev) => new Set(prev).add(item.id))
    setError(null)
    try {
      const updated = await updateTodo(item, { completed: !fields.completed })
      if (updated) {
        setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
      }
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setError(err.message || 'Failed to update task')
    } finally {
      setLoadingIds((prev) => {
        const next = new Set(prev)
        next.delete(item.id)
        return next
      })
    }
  }

  const handleDelete = async (id) => {
    setLoadingIds((prev) => new Set(prev).add(id))
    setError(null)
    try {
      await deleteTodo(id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError(err.message || 'Failed to delete task')
    } finally {
      setLoadingIds((prev) => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t?.data?.completed)
    if (completed.length === 0) return
    setError(null)
    const ids = completed.map((t) => t.id)
    ids.forEach((id) =>
      setLoadingIds((prev) => new Set(prev).add(id))
    )
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
      setTodos((prev) => prev.filter((t) => !t?.data?.completed))
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError(err.message || 'Failed to clear completed tasks')
      await loadTodos()
    } finally {
      setLoadingIds((prev) => {
        const next = new Set(prev)
        ids.forEach((id) => next.delete(id))
        return next
      })
    }
  }

  const filteredTodos = todos.filter((t) => {
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

  const completedCount = counts.completed

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-500 rounded-2xl shadow-lg mb-4">
            <CheckCircle2 className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">My Tasks</h1>
          <p className="mt-1 text-sm text-gray-500">
            {counts.active === 0 && counts.all > 0
              ? 'All tasks completed!'
              : `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {/* Input Section */}
          <div className="p-5 border-b border-gray-100">
            <TodoInput onAdd={handleAdd} isLoading={status === 'loading'} />
          </div>

          {/* Filter Section */}
          <div className="px-5 pt-4 pb-2">
            <TodoFilter current={filter} onChange={setFilter} counts={counts} />
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mx-5 mt-3 flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Todo List */}
          <div className="px-5 py-4 space-y-2 min-h-[120px]">
            {status === 'loading' ? (
              <div className="flex items-center justify-center py-10 text-gray-400">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className="text-sm">Loading tasks...</span>
              </div>
            ) : filteredTodos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                <CheckCircle2 className="w-10 h-10 mb-3 text-gray-200" />
                <p className="text-sm font-medium">
                  {filter === 'completed'
                    ? 'No completed tasks yet'
                    : filter === 'active'
                    ? 'No active tasks — great job!'
                    : 'No tasks yet. Add one above!'}
                </p>
              </div>
            ) : (
              filteredTodos.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                  isLoading={loadingIds.has(item.id)}
                />
              ))
            )}
          </div>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {counts.all} total task{counts.all !== 1 ? 's' : ''}
              </span>
              {completedCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearCompleted}
                  className="text-xs text-red-400 hover:text-red-600 font-medium transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Clear {completedCount} completed
                </button>
              )}
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Tasks are saved automatically to the database
        </p>
      </div>
    </div>
  )
}

export default TodoApp
