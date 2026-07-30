import { useState, useEffect, useCallback } from 'react'
import { CheckCircle2, Circle, ListTodo, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import TodoItem from '@/components/TodoItem'
import AddTodoForm from '@/components/AddTodoForm'
import { cn } from '@/lib/utils'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')
  const [adding, setAdding] = useState(false)

  const loadTodos = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const rows = await fetchTodos()
      console.log('Loaded todos:', rows.length)
      setTodos(rows)
      setStatus('ready')
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError(err.message || 'Failed to load todos')
      setStatus('error')
    }
  }, [])

  useEffect(() => { loadTodos() }, [loadTodos])

  const handleAdd = async (fields) => {
    setAdding(true)
    try {
      const created = await createTodo(fields)
      console.log('Created todo:', created)
      setTodos((prev) => [created, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError(err.message)
    } finally {
      setAdding(false)
    }
  }

  const handleToggle = async (id, fields) => {
    const updated = { ...fields, completed: !fields.completed }
    setTodos((prev) => prev.map((t) => t.id === id ? { ...t, data: updated } : t))
    try {
      const result = await updateTodo(id, updated)
      console.log('Toggled todo:', result)
      setTodos((prev) => prev.map((t) => t.id === id ? result : t))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setTodos((prev) => prev.map((t) => t.id === id ? { ...t, data: fields } : t))
    }
  }

  const handleUpdate = async (id, fields) => {
    try {
      const result = await updateTodo(id, fields)
      console.log('Updated todo:', result)
      setTodos((prev) => prev.map((t) => t.id === id ? result : t))
    } catch (err) {
      console.error('Failed to update todo:', err)
      setError(err.message)
    }
  }

  const handleDelete = async (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
      console.log('Deleted todo:', id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      await loadTodos()
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data?.completed)
    setTodos((prev) => prev.filter((t) => !t.data?.completed))
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
    } catch (err) {
      console.error('Failed to clear completed:', err)
      await loadTodos()
    }
  }

  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.data?.completed
    if (filter === 'completed') return t.data?.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center shadow-md">
            <ListTodo className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">My Tasks</h1>
            <p className="text-sm text-slate-400 mt-0.5">
              {activeCount} remaining · {completedCount} done
            </p>
          </div>
        </div>

        {/* Add form */}
        <div className="mb-5">
          <AddTodoForm onAdd={handleAdd} loading={adding} />
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-1 mb-4 bg-white border border-slate-200 rounded-xl p-1 shadow-sm w-fit">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                'text-sm px-4 py-1.5 rounded-lg font-medium transition-colors',
                filter === f.key
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        {/* Loading */}
        {status === 'loading' && (
          <div className="flex items-center justify-center py-16 text-slate-400">
            <Loader2 className="w-6 h-6 animate-spin mr-2" />
            <span className="text-sm">Loading tasks…</span>
          </div>
        )}

        {/* Empty state */}
        {status === 'ready' && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            {filter === 'completed' ? (
              <>
                <Circle className="w-10 h-10 mb-3 text-slate-200" />
                <p className="text-sm font-medium">No completed tasks yet</p>
                <p className="text-xs mt-1">Complete a task to see it here</p>
              </>
            ) : filter === 'active' ? (
              <>
                <CheckCircle2 className="w-10 h-10 mb-3 text-emerald-200" />
                <p className="text-sm font-medium text-emerald-600">All caught up!</p>
                <p className="text-xs mt-1">No active tasks remaining</p>
              </>
            ) : (
              <>
                <ListTodo className="w-10 h-10 mb-3 text-slate-200" />
                <p className="text-sm font-medium">No tasks yet</p>
                <p className="text-xs mt-1">Add your first task above</p>
              </>
            )}
          </div>
        )}

        {/* Todo list */}
        {status === 'ready' && filtered.length > 0 && (
          <div className="flex flex-col gap-3">
            {filtered.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        {status === 'ready' && completedCount > 0 && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleClearCompleted}
              className="text-xs text-slate-400 hover:text-red-500 transition-colors"
            >
              Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
