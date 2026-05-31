import { useState, useEffect, useCallback } from 'react'
import { CheckSquare, Loader2 } from 'lucide-react'
import TodoInput from '../components/todo/TodoInput'
import TodoList from '../components/todo/TodoList'
import TodoFooter from '../components/todo/TodoFooter'
import FilterBar from '../components/todo/FilterBar'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todos'

const TodoPage = () => {
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
      console.log('Created todo:', created)
      setTodos((prev) => [created, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError('Failed to add task. Please try again.')
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
      console.log('Toggled todo:', updated)
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
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
      console.log('Deleted todo:', id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError('Failed to delete task. Please try again.')
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
      setError('Failed to clear completed tasks. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const completedCount = todos.filter((t) => t?.data?.completed === true).length
  const activeCount = todos.length - completedCount

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return t?.data?.completed !== true
    if (filter === 'completed') return t?.data?.completed === true
    return true
  })

  const counts = { all: todos.length, active: activeCount, completed: completedCount }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
            <CheckSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">My Tasks</h1>
            <p className="text-sm text-gray-400">
              {todos.length === 0
                ? 'Nothing here yet'
                : `${activeCount} remaining · ${completedCount} done`}
            </p>
          </div>
          {(loading || busy) && (
            <Loader2 className="w-5 h-5 text-indigo-400 animate-spin ml-auto" />
          )}
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col gap-5">
          {/* Input */}
          <TodoInput onAdd={handleAdd} disabled={busy} />

          {/* Error */}
          {error && (
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Filter */}
          {todos.length > 0 && (
            <FilterBar filter={filter} onChange={setFilter} counts={counts} />
          )}

          {/* List */}
          {loading ? (
            <div className="flex items-center justify-center py-14">
              <Loader2 className="w-8 h-8 text-indigo-300 animate-spin" />
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
          <TodoFooter
            total={todos.length}
            completed={completedCount}
            onClearCompleted={handleClearCompleted}
            disabled={busy}
          />
        </div>
      </div>
    </div>
  )
}

export default TodoPage
