import { useState, useEffect, useCallback } from 'react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const FILTERS = ['all', 'active', 'completed']

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchTodos()
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
    const trimmed = title.trim()
    if (!trimmed) return
    try {
      const newTodo = await createTodo(trimmed)
      setTodos((prev) => [newTodo, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError('Failed to add todo. Please try again.')
    }
  }

  const handleToggle = async (item) => {
    const optimistic = todos.map((t) =>
      t.id === item.id
        ? { ...t, data: { ...t.data, completed: !t.data.completed } }
        : t
    )
    setTodos(optimistic)
    try {
      const updated = await updateTodo(item, { completed: !item.data.completed })
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setTodos(todos)
      setError('Failed to update todo.')
    }
  }

  const handleDelete = async (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      await loadTodos()
      setError('Failed to delete todo.')
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data.completed)
    setTodos((prev) => prev.filter((t) => !t.data.completed))
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
    } catch (err) {
      console.error('Failed to clear completed:', err)
      await loadTodos()
      setError('Failed to clear completed todos.')
    }
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.data.completed
    if (filter === 'completed') return t.data.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.data.completed).length
  const completedCount = todos.filter((t) => t.data.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-widest text-indigo-700 uppercase mb-1">
            Todo
          </h1>
          <p className="text-indigo-400 text-sm font-medium">Stay organized, stay productive</p>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Input */}
          <div className="px-6 pt-6 pb-4 border-b border-gray-100">
            <TodoInput onAdd={handleAdd} />
          </div>

          {/* Filter tabs */}
          <div className="flex border-b border-gray-100">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-3 text-sm font-semibold capitalize transition-colors ${
                  filter === f
                    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Error banner */}
          {error && (
            <div className="mx-6 mt-4 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm flex items-center justify-between">
              <span>{error}</span>
              <button
                onClick={() => setError(null)}
                className="ml-2 text-red-400 hover:text-red-600 font-bold text-lg leading-none border-0 bg-transparent p-0"
              >
                ×
              </button>
            </div>
          )}

          {/* Todo list */}
          <TodoList
            todos={filteredTodos}
            loading={loading}
            filter={filter}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />

          {/* Footer */}
          {todos.length > 0 && (
            <TodoFooter
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={handleClearCompleted}
            />
          )}
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          {todos.length === 0 ? 'No todos yet — add one above!' : `${todos.length} total item${todos.length !== 1 ? 's' : ''}`}
        </p>
      </div>
    </div>
  )
}
