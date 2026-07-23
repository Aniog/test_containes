import { useState, useEffect, useCallback } from 'react'
import { CheckCircle2, ListTodo, Loader2 } from 'lucide-react'
import AddTodoForm from '../components/todos/AddTodoForm'
import TodoItem from '../components/todos/TodoItem'
import FilterTabs from '../components/todos/FilterTabs'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todos'

export default function TodoPage() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [adding, setAdding] = useState(false)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

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

  const handleAdd = async (fields) => {
    setAdding(true)
    try {
      const created = await createTodo(fields)
      setTodos((prev) => [created, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError('Failed to add task.')
    } finally {
      setAdding(false)
    }
  }

  const handleToggle = async (todo) => {
    const fields = todo.data ?? {}
    const updated = await updateTodo(todo.id, { ...fields, completed: !fields.completed })
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
  }

  const handleUpdate = async (id, fields) => {
    const updated = await updateTodo(id, fields)
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
  }

  const handleDelete = async (id) => {
    await deleteTodo(id)
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data?.completed)
    await Promise.all(completed.map((t) => deleteTodo(t.id)))
    setTodos((prev) => prev.filter((t) => !t.data?.completed))
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.data?.completed
    if (filter === 'completed') return t.data?.completed
    return true
  })

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.data?.completed).length,
    completed: todos.filter((t) => t.data?.completed).length,
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <ListTodo className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">My Tasks</h1>
            <p className="text-sm text-slate-500">
              {counts.active} task{counts.active !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Add form */}
        <AddTodoForm onAdd={handleAdd} loading={adding} />

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        {/* Filter tabs */}
        {todos.length > 0 && (
          <FilterTabs filter={filter} onChange={setFilter} counts={counts} />
        )}

        {/* Todo list */}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
          </div>
        ) : filteredTodos.length === 0 ? (
          <div className="text-center py-14">
            <CheckCircle2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">
              {filter === 'completed'
                ? 'No completed tasks yet.'
                : filter === 'active'
                ? 'No active tasks — all done!'
                : 'No tasks yet. Add one above!'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredTodos.map((todo) => (
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

        {/* Clear completed */}
        {counts.completed > 0 && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClearCompleted}
              className="text-xs text-slate-400 hover:text-red-500 transition-colors"
            >
              Clear {counts.completed} completed task{counts.completed !== 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
