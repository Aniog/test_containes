import { useState, useEffect } from 'react'
import TodoInput from '../components/todo/TodoInput'
import TodoList from '../components/todo/TodoList'
import TodoFooter from '../components/todo/TodoFooter'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '../api/todos'
import { CheckSquare, Loader2 } from 'lucide-react'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchTodos()
      setTodos(data.map(normalizeItem))
    } catch (err) {
      console.error('[TodoPage] Load error:', err)
      setError('Failed to load tasks. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const normalizeItem = (item) => ({
    id: item.id,
    title: item.data?.title ?? item.title ?? '',
    completed: item.data?.completed ?? item.completed ?? false,
  })

  const handleAdd = async (title) => {
    setSaving(true)
    try {
      const created = await createTodo(title)
      setTodos((prev) => [...prev, normalizeItem(created)])
    } catch (err) {
      console.error('[TodoPage] Add error:', err)
      setError('Failed to add task.')
    } finally {
      setSaving(false)
    }
  }

  const handleToggle = async (todo) => {
    const updated = { ...todo, completed: !todo.completed }
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)))
    try {
      await updateTodo(todo.id, { completed: updated.completed })
    } catch (err) {
      console.error('[TodoPage] Toggle error:', err)
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)))
      setError('Failed to update task.')
    }
  }

  const handleDelete = async (id) => {
    const prev = todos
    setTodos((t) => t.filter((item) => item.id !== id))
    try {
      await deleteTodo(id)
    } catch (err) {
      console.error('[TodoPage] Delete error:', err)
      setTodos(prev)
      setError('Failed to delete task.')
    }
  }

  const handleClearCompleted = async () => {
    const prev = todos
    setTodos((t) => t.filter((item) => !item.completed))
    try {
      await deleteCompletedTodos()
    } catch (err) {
      console.error('[TodoPage] Clear completed error:', err)
      setTodos(prev)
      setError('Failed to clear completed tasks.')
    }
  }

  const completedCount = todos.filter((t) => t.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center pt-16 px-4 pb-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-md">
            <CheckSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">My Tasks</h1>
            {!loading && (
              <p className="text-xs text-slate-400">
                {completedCount} of {totalCount} completed
              </p>
            )}
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
          <TodoInput onAdd={handleAdd} disabled={saving || loading} />

          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
              {error}
              <button
                onClick={() => setError(null)}
                className="ml-2 underline text-red-500 hover:text-red-700"
              >
                Dismiss
              </button>
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-16 text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              <span className="text-sm">Loading tasks...</span>
            </div>
          ) : (
            <>
              <TodoList
                todos={todos}
                filter={filter}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
              {todos.length > 0 && (
                <TodoFooter
                  todos={todos}
                  filter={filter}
                  onFilterChange={setFilter}
                  onClearCompleted={handleClearCompleted}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoPage
