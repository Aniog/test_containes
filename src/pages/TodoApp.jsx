import { useState, useEffect, useCallback } from 'react'
import { CheckSquare, Loader2 } from 'lucide-react'
import TodoInput from '../components/todo/TodoInput'
import TodoList from '../components/todo/TodoList'
import TodoFooter from '../components/todo/TodoFooter'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todos'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('All')

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const items = await fetchTodos()
      console.log('Loaded todos:', items.length)
      setTodos(items)
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
      const newItem = await createTodo(title)
      console.log('Created todo:', newItem)
      setTodos((prev) => [newItem, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError('Failed to add task. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const handleToggle = async (item) => {
    const fields = item?.data ?? {}
    const optimisticItem = {
      ...item,
      data: { ...fields, completed: !fields.completed },
    }
    setTodos((prev) => prev.map((t) => (t.id === item.id ? optimisticItem : t)))

    try {
      const updated = await updateTodo(item, { completed: !fields.completed })
      console.log('Toggled todo:', updated)
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setTodos((prev) => prev.map((t) => (t.id === item.id ? item : t)))
      setError('Failed to update task.')
    }
  }

  const handleDelete = async (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
      console.log('Deleted todo:', id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError('Failed to delete task.')
      await loadTodos()
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t?.data?.completed === true)
    if (completed.length === 0) return

    setTodos((prev) => prev.filter((t) => t?.data?.completed !== true))
    setBusy(true)
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
      console.log('Cleared', completed.length, 'completed todos')
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError('Failed to clear completed tasks.')
      await loadTodos()
    } finally {
      setBusy(false)
    }
  }

  const filteredTodos = todos.filter((t) => {
    const completed = t?.data?.completed === true
    if (filter === 'Active') return !completed
    if (filter === 'Completed') return completed
    return true
  })

  const completedCount = todos.filter((t) => t?.data?.completed === true).length

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-lg">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
            <CheckSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">My Tasks</h1>
            <p className="text-xs text-slate-400">Stay organized, get things done</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <TodoInput onAdd={handleAdd} disabled={busy || loading} />

          {error && (
            <div className="mb-4 px-4 py-2.5 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

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
              disabled={busy}
            />
          )}

          {!loading && todos.length > 0 && (
            <TodoFooter
              total={todos.length}
              completedCount={completedCount}
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={handleClearCompleted}
              disabled={busy}
            />
          )}
        </div>

        {!loading && todos.length > 0 && (
          <p className="text-center text-xs text-slate-400 mt-4">
            {todos.length} total {todos.length === 1 ? 'task' : 'tasks'} · {completedCount} completed
          </p>
        )}
      </div>
    </div>
  )
}

export default TodoApp
