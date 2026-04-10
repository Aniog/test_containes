import { useState, useEffect, useCallback } from 'react'
import { CheckCircle2, Loader2, Trash2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../api/todos.js'
import TodoInput from './TodoInput.jsx'
import TodoItem from './TodoItem.jsx'
import TodoFilter from './TodoFilter.jsx'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

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
    setBusy(true)
    setError(null)
    const newItem = await createTodo(title)
    setTodos((prev) => [...prev, newItem])
    setBusy(false)
  }

  const handleToggle = async (todo) => {
    setBusy(true)
    setError(null)
    const updated = await updateTodo(todo, { completed: !todo.data.completed })
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)))
    setBusy(false)
  }

  const handleDelete = async (todo) => {
    setBusy(true)
    setError(null)
    await deleteTodo(todo)
    setTodos((prev) => prev.filter((t) => t.id !== todo.id))
    setBusy(false)
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data.completed)
    if (!completed.length) return
    setBusy(true)
    setError(null)
    await Promise.all(completed.map((t) => deleteTodo(t)))
    setTodos((prev) => prev.filter((t) => !t.data.completed))
    setBusy(false)
  }

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.data.completed).length,
    completed: todos.filter((t) => t.data.completed).length,
  }

  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.data.completed
    if (filter === 'completed') return t.data.completed
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-violet-500/20 rounded-xl">
            <CheckCircle2 className="w-7 h-7 text-violet-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">My Tasks</h1>
            <p className="text-white/40 text-sm mt-0.5">
              {counts.active} task{counts.active !== 1 ? 's' : ''} remaining
            </p>
          </div>
          {(loading || busy) && (
            <Loader2 className="w-5 h-5 text-violet-400 animate-spin ml-auto" />
          )}
        </div>

        {/* Input */}
        <div className="mb-4">
          <TodoInput onAdd={handleAdd} disabled={busy || loading} />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 px-4 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-sm">
            {error}
          </div>
        )}

        {/* Filter tabs */}
        <div className="mb-4">
          <TodoFilter filter={filter} onChange={setFilter} counts={counts} />
        </div>

        {/* Todo list */}
        <div className="space-y-2">
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 text-violet-400 animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-white/30">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm">
                {filter === 'completed'
                  ? 'No completed tasks yet'
                  : filter === 'active'
                  ? 'No active tasks — great job!'
                  : 'No tasks yet. Add one above!'}
              </p>
            </div>
          ) : (
            filtered.map((todo) => (
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
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleClearCompleted}
              disabled={busy}
              className="flex items-center gap-2 px-4 py-2 text-sm text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              <Trash2 className="w-4 h-4" />
              Clear {counts.completed} completed
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp
