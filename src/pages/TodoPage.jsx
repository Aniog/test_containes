import { useState, useEffect, useCallback } from 'react'
import { CheckCheck, Loader2 } from 'lucide-react'
import TodoInput from '@/components/todo/TodoInput'
import TodoList from '@/components/todo/TodoList'
import TodoFilter from '@/components/todo/TodoFilter'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
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
    setSubmitting(true)
    setError(null)
    try {
      const newTodo = await createTodo(title)
      setTodos((prev) => [newTodo, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError('Failed to add task. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleToggle = async (todo) => {
    const fields = todo?.data ?? {}
    const optimisticTodos = todos.map((t) =>
      t.id === todo.id
        ? { ...t, data: { ...fields, completed: !fields.completed } }
        : t
    )
    setTodos(optimisticTodos)

    try {
      const updated = await updateTodo(todo.id, {
        ...fields,
        completed: !fields.completed,
      })
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setTodos(todos)
      setError('Failed to update task. Please try again.')
    }
  }

  const handleDelete = async (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      await loadTodos()
      setError('Failed to delete task. Please try again.')
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t?.data?.completed)
    if (completed.length === 0) return

    setTodos((prev) => prev.filter((t) => !t?.data?.completed))
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
    } catch (err) {
      console.error('Failed to clear completed todos:', err)
      await loadTodos()
      setError('Failed to clear completed tasks. Please try again.')
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

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          <p className="text-sm text-slate-500 mt-1">
            {counts.active === 0 && counts.all > 0
              ? 'All tasks completed!'
              : `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          {/* Input */}
          <TodoInput onAdd={handleAdd} disabled={submitting} />

          {/* Error */}
          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
              {error}
            </div>
          )}

          {/* Filter */}
          {todos.length > 0 && (
            <TodoFilter filter={filter} onChange={setFilter} counts={counts} />
          )}

          {/* List */}
          {loading ? (
            <div className="flex items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              <span className="text-sm">Loading tasks...</span>
            </div>
          ) : (
            <TodoList
              todos={filteredTodos}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}

          {/* Footer */}
          {counts.completed > 0 && (
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {counts.completed} completed task{counts.completed !== 1 ? 's' : ''}
              </span>
              <button
                type="button"
                onClick={handleClearCompleted}
                className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 font-medium transition-colors"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                Clear completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoPage
