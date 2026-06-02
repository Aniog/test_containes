import { useState, useEffect, useCallback } from 'react'
import { CheckCheck, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todos.js'
import TodoInput from '../components/todo/TodoInput.jsx'
import TodoItem from '../components/todo/TodoItem.jsx'
import TodoFilters from '../components/todo/TodoFilters.jsx'
import TodoEmpty from '../components/todo/TodoEmpty.jsx'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [adding, setAdding] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    console.log('[TodoPage] Loading todos...')
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchTodos()
      console.log('[TodoPage] Loaded', rows.length, 'todos')
      setTodos(rows)
    } catch (err) {
      console.error('[TodoPage] Failed to load todos:', err)
      setError('Failed to load tasks. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (title) => {
    console.log('[TodoPage] Adding todo:', title)
    setAdding(true)
    setError(null)
    try {
      const newItem = await createTodo(title)
      console.log('[TodoPage] Created todo:', newItem)
      setTodos((prev) => [newItem, ...prev])
    } catch (err) {
      console.error('[TodoPage] Failed to add todo:', err)
      setError('Failed to add task. Please try again.')
    } finally {
      setAdding(false)
    }
  }

  const handleToggle = async (item) => {
    const fields = item?.data ?? {}
    const newCompleted = !fields.completed
    console.log('[TodoPage] Toggling todo', item.id, 'to completed:', newCompleted)

    setTodos((prev) =>
      prev.map((t) =>
        t.id === item.id ? { ...t, data: { ...fields, completed: newCompleted } } : t
      )
    )

    try {
      await updateTodo(item.id, { ...fields, completed: newCompleted })
    } catch (err) {
      console.error('[TodoPage] Failed to toggle todo:', err)
      setTodos((prev) =>
        prev.map((t) =>
          t.id === item.id ? { ...t, data: { ...fields, completed: fields.completed } } : t
        )
      )
      setError('Failed to update task.')
    }
  }

  const handleDelete = async (id) => {
    console.log('[TodoPage] Deleting todo:', id)
    const snapshot = todos
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
    } catch (err) {
      console.error('[TodoPage] Failed to delete todo:', err)
      setTodos(snapshot)
      setError('Failed to delete task.')
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t?.data?.completed)
    console.log('[TodoPage] Clearing', completed.length, 'completed todos')
    if (!completed.length) return

    const snapshot = todos
    setTodos((prev) => prev.filter((t) => !t?.data?.completed))

    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
    } catch (err) {
      console.error('[TodoPage] Failed to clear completed:', err)
      setTodos(snapshot)
      setError('Failed to clear completed tasks.')
    }
  }

  const filteredTodos = todos.filter((t) => {
    const completed = t?.data?.completed ?? false
    if (filter === 'Active') return !completed
    if (filter === 'Completed') return completed
    return true
  })

  const counts = {
    All: todos.length,
    Active: todos.filter((t) => !t?.data?.completed).length,
    Completed: todos.filter((t) => t?.data?.completed).length,
  }

  const completedCount = counts.Completed

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center pt-12 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          <p className="text-slate-500 text-sm mt-1">
            {counts.Active === 0 && todos.length > 0
              ? 'All tasks completed!'
              : `${counts.Active} task${counts.Active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Input */}
          <TodoInput onAdd={handleAdd} disabled={adding || loading} />

          {/* Filters */}
          <TodoFilters activeFilter={filter} onChange={setFilter} counts={counts} />

          {/* Error */}
          {error && (
            <div className="mx-4 mt-3 px-4 py-2.5 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs">
              {error}
            </div>
          )}

          {/* List */}
          {loading ? (
            <div className="flex items-center justify-center py-14">
              <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
            </div>
          ) : filteredTodos.length === 0 ? (
            <TodoEmpty filter={filter} />
          ) : (
            <ul className="divide-y divide-slate-100">
              {filteredTodos.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))}
            </ul>
          )}

          {/* Footer */}
          {completedCount > 0 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 bg-slate-50">
              <span className="text-xs text-slate-400">
                {completedCount} completed task{completedCount !== 1 ? 's' : ''}
              </span>
              <button
                onClick={handleClearCompleted}
                className="flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors duration-150"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                Clear completed
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Hover over a task to reveal the delete button
        </p>
      </div>
    </div>
  )
}

export default TodoPage
