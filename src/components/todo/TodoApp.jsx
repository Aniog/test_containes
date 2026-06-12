import { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'
import TodoFilter from './TodoFilter'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

const FILTERS = { ALL: 'all', ACTIVE: 'active', COMPLETED: 'completed' }

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState(FILTERS.ALL)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    const { data: response, error: fetchError } = await client
      .from('Todo List')
      .select('*')
      .order('created_at', { ascending: false })

    if (fetchError) {
      setError(fetchError.message || 'Failed to load todos')
      setLoading(false)
      return
    }
    setTodos(getRows(response))
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const handleAdd = async (title) => {
    const trimmed = title.trim()
    if (!trimmed) return

    const { data: response, error: createError } = await client
      .from('Todo List')
      .insert({ data: { title: trimmed, completed: false, created_at: new Date().toISOString() } })
      .select()
      .single()

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError))
      return
    }

    const created = getEntity(response)
    if (created) setTodos((prev) => [created, ...prev])
  }

  const handleToggle = async (todo) => {
    const fields = todo.data ?? {}
    const { data: response, error: updateError } = await client
      .from('Todo List')
      .update({ data: { ...fields, completed: !fields.completed } })
      .eq('id', todo.id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      setError(getErrorMessage(response, updateError))
      return
    }

    const updated = getEntity(response)
    if (updated) {
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    }
  }

  const handleDelete = async (todoId) => {
    const { data: response, error: deleteError } = await client
      .from('Todo List')
      .delete()
      .eq('id', todoId)
      .select()
      .maybeSingle()

    if (deleteError || response?.success === false) {
      setError(getErrorMessage(response, deleteError))
      return
    }

    setTodos((prev) => prev.filter((t) => t.id !== todoId))
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data?.completed)
    await Promise.all(completed.map((t) => handleDelete(t.id)))
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === FILTERS.ACTIVE) return !t.data?.completed
    if (filter === FILTERS.COMPLETED) return t.data?.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center pt-12 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">My Todos</h1>
          <p className="text-slate-500 mt-1 text-sm">Stay organized, get things done.</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Input */}
          <div className="p-5 border-b border-slate-100">
            <TodoInput onAdd={handleAdd} />
          </div>

          {/* Filter Tabs */}
          {todos.length > 0 && (
            <div className="px-5 pt-4">
              <TodoFilter filter={filter} setFilter={setFilter} filters={FILTERS} />
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mx-5 mt-3 px-4 py-2 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Todo List */}
          <div className="px-5 py-3 min-h-[80px]">
            {loading ? (
              <div className="flex items-center justify-center py-10">
                <div className="w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : filteredTodos.length === 0 ? (
              <div className="text-center py-10 text-slate-400 text-sm">
                {filter === FILTERS.ALL
                  ? 'No todos yet. Add one above!'
                  : filter === FILTERS.ACTIVE
                  ? 'No active tasks.'
                  : 'No completed tasks.'}
              </div>
            ) : (
              <ul className="space-y-1">
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
          </div>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="px-5 pb-5 pt-2 border-t border-slate-100">
              <TodoFooter
                activeCount={activeCount}
                completedCount={completedCount}
                onClearCompleted={handleClearCompleted}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
