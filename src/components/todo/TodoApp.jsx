import { useState, useEffect } from 'react'
import { CheckCircle2, ClipboardList, Loader2 } from 'lucide-react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoFilter from './TodoFilter'
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteCompletedTodos,
} from '../../api/todos'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    setLoading(true)
    setError(null)
    const data = await fetchTodos()
    setTodos(Array.isArray(data) ? data : [])
    setLoading(false)
  }

  const handleAdd = async (text) => {
    setBusy(true)
    const newTodo = await createTodo(text)
    if (newTodo) setTodos((prev) => [...prev, newTodo])
    else await loadTodos()
    setBusy(false)
  }

  const handleToggle = async (todo) => {
    setBusy(true)
    const updated = await updateTodo(todo.id, { completed: !todo.completed })
    if (updated) setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)))
    else await loadTodos()
    setBusy(false)
  }

  const handleDelete = async (id) => {
    setBusy(true)
    await deleteTodo(id)
    setTodos((prev) => prev.filter((t) => t.id !== id))
    setBusy(false)
  }

  const handleClearCompleted = async () => {
    const completedIds = todos.filter((t) => t.completed).map((t) => t.id)
    if (!completedIds.length) return
    setBusy(true)
    await deleteCompletedTodos(completedIds)
    setTodos((prev) => prev.filter((t) => !t.completed))
    setBusy(false)
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'Active') return !t.completed
    if (filter === 'Completed') return t.completed
    return true
  })

  const counts = {
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
    total: todos.length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center pt-16 px-4 pb-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-500 rounded-2xl shadow-lg mb-4">
            <ClipboardList className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">My Tasks</h1>
          <p className="text-gray-500 text-sm mt-1">
            {counts.active === 0 && counts.total > 0
              ? 'All tasks completed!'
              : `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100 border border-gray-100 overflow-hidden">
          {/* Input */}
          <div className="p-5 border-b border-gray-100">
            <TodoInput onAdd={handleAdd} disabled={busy || loading} />
          </div>

          {/* Filter */}
          {counts.total > 0 && (
            <div className="px-5 pt-4">
              <TodoFilter filter={filter} onChange={setFilter} counts={counts} />
            </div>
          )}

          {/* List */}
          <div className="p-5 space-y-2 min-h-[120px]">
            {loading ? (
              <div className="flex items-center justify-center py-10 text-gray-400">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className="text-sm">Loading tasks...</span>
              </div>
            ) : error ? (
              <div className="text-center py-10">
                <p className="text-red-500 text-sm">{error}</p>
                <button
                  onClick={loadTodos}
                  className="mt-2 text-indigo-500 text-sm underline hover:text-indigo-700"
                >
                  Try again
                </button>
              </div>
            ) : filteredTodos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                <CheckCircle2 className="w-10 h-10 mb-2 text-gray-200" />
                <p className="text-sm">
                  {filter === 'Completed'
                    ? 'No completed tasks yet'
                    : filter === 'Active'
                    ? 'No active tasks'
                    : 'No tasks yet. Add one above!'}
                </p>
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                  disabled={busy}
                />
              ))
            )}
          </div>

          {/* Footer */}
          {counts.completed > 0 && (
            <div className="px-5 pb-5 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {counts.completed} completed
              </span>
              <button
                onClick={handleClearCompleted}
                disabled={busy}
                className="text-xs text-red-400 hover:text-red-600 font-medium transition-colors duration-200 disabled:opacity-50"
              >
                Clear completed
              </button>
            </div>
          )}
        </div>

        {/* Progress bar */}
        {counts.total > 0 && (
          <div className="mt-4 px-1">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>{Math.round((counts.completed / counts.total) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${(counts.completed / counts.total) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp
