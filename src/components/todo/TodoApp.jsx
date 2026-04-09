import { useState, useEffect, useCallback } from 'react'
import { Trash2, ClipboardList, Loader2 } from 'lucide-react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoFilter from './TodoFilter'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '@/api/todos'

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

  const handleAdd = async (text) => {
    setBusy(true)
    setError(null)
    const newTodo = await createTodo(text)
    setTodos((prev) => [...prev, newTodo])
    setBusy(false)
  }

  const handleToggle = async (todo) => {
    setBusy(true)
    setError(null)
    const updated = await updateTodo(todo.id, { completed: !todo.completed })
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)))
    setBusy(false)
  }

  const handleDelete = async (id) => {
    setBusy(true)
    setError(null)
    await deleteTodo(id)
    setTodos((prev) => prev.filter((t) => t.id !== id))
    setBusy(false)
  }

  const handleClearCompleted = async () => {
    setBusy(true)
    setError(null)
    await deleteCompletedTodos()
    setTodos((prev) => prev.filter((t) => !t.completed))
    setBusy(false)
  }

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/20 border border-violet-500/30 mb-4">
            <ClipboardList className="w-7 h-7 text-violet-400" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">My Tasks</h1>
          <p className="text-white/40 mt-1 text-sm">
            {counts.active} task{counts.active !== 1 ? 's' : ''} remaining
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4">
          {/* Input */}
          <TodoInput onAdd={handleAdd} disabled={busy || loading} />

          {/* Filter */}
          <TodoFilter filter={filter} onChange={setFilter} counts={counts} />

          {/* Error */}
          {error && (
            <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* List */}
          <div className="space-y-2 min-h-[80px]">
            {loading ? (
              <div className="flex items-center justify-center py-10 text-white/40">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span>Loading tasks...</span>
              </div>
            ) : filteredTodos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-white/30">
                <ClipboardList className="w-10 h-10 mb-2 opacity-40" />
                <p className="text-sm">
                  {filter === 'completed' ? 'No completed tasks yet' :
                   filter === 'active' ? 'No active tasks' :
                   'No tasks yet — add one above!'}
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
            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                onClick={handleClearCompleted}
                disabled={busy}
                className="flex items-center gap-2 px-4 py-2 text-sm text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors disabled:opacity-40"
              >
                <Trash2 className="w-4 h-4" />
                Clear completed ({counts.completed})
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp
