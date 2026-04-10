import { useState, useEffect, useCallback } from 'react'
import { ClipboardList, Loader2 } from 'lucide-react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../api/todos'

const FILTERS = ['all', 'active', 'completed']

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [saving, setSaving] = useState(false)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    const data = await fetchTodos()
    setTodos(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (title) => {
    setSaving(true)
    const newTodo = await createTodo(title)
    if (newTodo) setTodos((prev) => [newTodo, ...prev])
    setSaving(false)
  }

  const handleToggle = async (todo) => {
    const updated = { completed: !todo.data.completed }
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, data: { ...t.data, ...updated } } : t))
    )
    await updateTodo(todo, updated)
  }

  const handleDelete = async (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    await deleteTodo(id)
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data.completed)
    setTodos((prev) => prev.filter((t) => !t.data.completed))
    await Promise.all(completed.map((t) => deleteTodo(t.id)))
  }

  const activeCount = todos.filter((t) => !t.data.completed).length
  const completedCount = todos.filter((t) => t.data.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center pt-16 px-4 pb-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-indigo-500 rounded-xl shadow">
            <ClipboardList className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 leading-tight">My Tasks</h1>
            <p className="text-sm text-gray-500">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="mb-6">
          <TodoInput onAdd={handleAdd} disabled={saving || loading} />
        </div>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Filter tabs */}
          <div className="flex border-b border-gray-100">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-3 text-sm font-medium capitalize transition-all ${
                  filter === f
                    ? 'text-indigo-600 border-b-2 border-indigo-500 bg-indigo-50/50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="p-4 min-h-[200px]">
            {loading ? (
              <div className="flex items-center justify-center py-16 text-gray-400">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className="text-sm">Loading tasks...</span>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-16 text-red-400">
                <p className="text-sm">{error}</p>
                <button onClick={loadTodos} className="mt-3 text-xs text-indigo-500 underline">
                  Retry
                </button>
              </div>
            ) : (
              <TodoList todos={todos} filter={filter} onToggle={handleToggle} onDelete={handleDelete} />
            )}
          </div>

          {/* Footer */}
          {completedCount > 0 && (
            <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
              <button
                onClick={handleClearCompleted}
                className="text-sm text-red-400 hover:text-red-600 font-medium transition-colors"
              >
                Clear {completedCount} completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp
