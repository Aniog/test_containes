import { useState, useEffect, useCallback } from 'react'
import { Trash2, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import TodoInput from '@/components/todo/TodoInput'
import TodoItem from '@/components/todo/TodoItem'
import TodoFilters from '@/components/todo/TodoFilters'
import TodoEmpty from '@/components/todo/TodoEmpty'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const rows = await fetchTodos()
      setTodos(rows)
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError('Failed to load tasks. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (title) => {
    setIsAdding(true)
    setError(null)
    try {
      const newTodo = await createTodo(title)
      if (newTodo) {
        setTodos((prev) => [newTodo, ...prev])
      }
    } catch (err) {
      console.error('Failed to add todo:', err)
      setError('Failed to add task. Please try again.')
    } finally {
      setIsAdding(false)
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
      if (updated) {
        setTodos((prev) =>
          prev.map((t) => (t.id === updated.id ? updated : t))
        )
      }
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
    const completed = todos.filter((t) => t?.data?.completed === true)
    if (completed.length === 0) return

    setTodos((prev) => prev.filter((t) => t?.data?.completed !== true))
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
    } catch (err) {
      console.error('Failed to clear completed todos:', err)
      await loadTodos()
      setError('Failed to clear completed tasks. Please try again.')
    }
  }

  const filteredTodos = todos.filter((t) => {
    const completed = t?.data?.completed === true
    if (filter === 'active') return !completed
    if (filter === 'completed') return completed
    return true
  })

  const counts = {
    all: todos.length,
    active: todos.filter((t) => t?.data?.completed !== true).length,
    completed: todos.filter((t) => t?.data?.completed === true).length,
  }

  const hasCompleted = counts.completed > 0

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          <p className="text-slate-500 mt-1 text-sm">
            {counts.active === 0 && counts.all > 0
              ? 'All tasks completed!'
              : counts.active > 0
              ? `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`
              : 'Stay organized, stay productive'}
          </p>
        </div>

        {/* Add Todo Input */}
        <div className="mb-4">
          <TodoInput onAdd={handleAdd} isLoading={isAdding} />
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
            {error}
          </div>
        )}

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Card Header: Filters + Clear */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-slate-100">
            <TodoFilters
              activeFilter={filter}
              onFilterChange={setFilter}
              counts={counts}
            />
            {hasCompleted && (
              <button
                type="button"
                onClick={handleClearCompleted}
                className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors duration-150 font-medium"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear completed
              </button>
            )}
          </div>

          {/* Todo List */}
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
              <span className="ml-2 text-slate-500 text-sm">Loading tasks...</span>
            </div>
          ) : filteredTodos.length === 0 ? (
            <TodoEmpty filter={filter} />
          ) : (
            <ul className="divide-y divide-slate-100">
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))}
            </ul>
          )}

          {/* Card Footer */}
          {!isLoading && todos.length > 0 && (
            <div className="px-4 py-3 border-t border-slate-100 bg-slate-50">
              <p className="text-xs text-slate-400 text-center">
                {counts.all} total · {counts.active} active · {counts.completed} completed
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoPage
