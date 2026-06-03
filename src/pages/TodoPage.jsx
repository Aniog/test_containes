import { useState, useEffect, useCallback } from 'react'
import { CheckSquare, Loader2 } from 'lucide-react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todos'

const VALID_TABS = ['All', 'Active', 'Completed']

const getTabFromHash = () => {
  const hash = window.location.hash.replace('#', '')
  return VALID_TABS.includes(hash) ? hash : 'All'
}

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState(getTabFromHash)

  // Sync tab with URL hash on mount and hash changes
  useEffect(() => {
    const onHashChange = () => {
      setActiveTab(getTabFromHash())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleTabChange = useCallback((tab) => {
    window.location.hash = tab
    setActiveTab(tab)
  }, [])

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchTodos()
      console.log('[TodoPage] Loaded todos:', rows.length)
      setTodos(rows)
    } catch (err) {
      console.error('[TodoPage] Failed to load todos:', err)
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (title) => {
    setSubmitting(true)
    try {
      const newTodo = await createTodo(title)
      console.log('[TodoPage] Created todo:', newTodo)
      setTodos((prev) => [newTodo, ...prev])
    } catch (err) {
      console.error('[TodoPage] Failed to create todo:', err)
      setError(err.message || 'Failed to add todo')
    } finally {
      setSubmitting(false)
    }
  }

  const handleToggle = async (todo) => {
    const fields = todo.data ?? {}
    const updated = { ...fields, completed: !fields.completed }
    // Optimistic update
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, data: updated } : t))
    )
    try {
      const result = await updateTodo(todo.id, updated)
      console.log('[TodoPage] Toggled todo:', result)
      setTodos((prev) =>
        prev.map((t) => (t.id === result.id ? result : t))
      )
    } catch (err) {
      console.error('[TodoPage] Failed to toggle todo:', err)
      // Revert on failure
      setTodos((prev) =>
        prev.map((t) => (t.id === todo.id ? todo : t))
      )
    }
  }

  const handleDelete = async (id) => {
    const previous = todos
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
      console.log('[TodoPage] Deleted todo:', id)
    } catch (err) {
      console.error('[TodoPage] Failed to delete todo:', err)
      setTodos(previous)
    }
  }

  const handleEdit = async (id, newTitle) => {
    const todo = todos.find((t) => t.id === id)
    if (!todo) return
    const fields = { ...(todo.data ?? {}), title: newTitle }
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, data: fields } : t))
    )
    try {
      const result = await updateTodo(id, fields)
      console.log('[TodoPage] Edited todo:', result)
      setTodos((prev) =>
        prev.map((t) => (t.id === result.id ? result : t))
      )
    } catch (err) {
      console.error('[TodoPage] Failed to edit todo:', err)
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? todo : t))
      )
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data?.completed)
    if (completed.length === 0) return
    const previous = todos
    setTodos((prev) => prev.filter((t) => !t.data?.completed))
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
      console.log('[TodoPage] Cleared', completed.length, 'completed todos')
    } catch (err) {
      console.error('[TodoPage] Failed to clear completed:', err)
      setTodos(previous)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="max-w-xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md">
            <CheckSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">My Todos</h1>
            <p className="text-xs text-slate-500">Stay organized, get things done</p>
          </div>
        </div>

        {/* Input card */}
        <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-5">
          <TodoInput onAdd={handleAdd} disabled={submitting || loading} />
        </div>

        {/* Error banner */}
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
            {error}
            <button
              onClick={() => setError(null)}
              className="ml-2 underline text-red-500 hover:text-red-700"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* List card */}
        <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-5">
          {loading ? (
            <div className="flex items-center justify-center py-12 text-slate-400 gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-sm">Loading todos…</span>
            </div>
          ) : (
            <TodoList
              todos={todos}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onClearCompleted={handleClearCompleted}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoPage
