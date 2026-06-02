import { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import TodoInput from '../components/TodoInput.jsx'
import TodoList from '../components/TodoList.jsx'
import TodoFooter from '../components/TodoFooter.jsx'
import TodoStats from '../components/TodoStats.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const TABLE = 'Todo Items'

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export default function TodoPage() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all') // 'all' | 'active' | 'completed'

  const fetchTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from(TABLE)
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      console.log('Fetched todos:', response)
      setTodos(getRows(response))
    } catch (err) {
      console.error('Failed to fetch todos:', err)
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const addTodo = async (title) => {
    const trimmed = title.trim()
    if (!trimmed) return

    const now = new Date().toISOString()
    const { data: response, error: createError } = await client
      .from(TABLE)
      .insert({ data: { title: trimmed, completed: false, created_at: now } })
      .select()
      .single()

    if (createError || response?.success === false) {
      console.error('Create error:', createError, response)
      setError(getErrorMessage(response, createError))
      return
    }

    const created = getEntity(response)
    console.log('Created todo:', created)
    setTodos((prev) => [created, ...prev])
  }

  const toggleTodo = async (todo) => {
    const fields = todo.data ?? {}
    const { data: response, error: updateError } = await client
      .from(TABLE)
      .update({ data: { ...fields, completed: !fields.completed } })
      .eq('id', todo.id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      console.error('Update error:', updateError, response)
      setError(getErrorMessage(response, updateError))
      return
    }

    const updated = getEntity(response)
    console.log('Updated todo:', updated)
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
  }

  const deleteTodo = async (id) => {
    const { data: response, error: deleteError } = await client
      .from(TABLE)
      .delete()
      .eq('id', id)
      .select()
      .maybeSingle()

    if (deleteError || response?.success === false) {
      console.error('Delete error:', deleteError, response)
      setError(getErrorMessage(response, deleteError))
      return
    }

    console.log('Deleted todo id:', id)
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const clearCompleted = async () => {
    const completedTodos = todos.filter((t) => t.data?.completed)
    if (completedTodos.length === 0) return

    const deletePromises = completedTodos.map((todo) =>
      client.from(TABLE).delete().eq('id', todo.id).select().maybeSingle()
    )

    const results = await Promise.all(deletePromises)
    const failedIds = []
    const deletedIds = new Set()

    results.forEach((result, idx) => {
      const { error: deleteError, data: response } = result
      if (deleteError || response?.success === false) {
        console.error('Clear completed error for id:', completedTodos[idx].id, deleteError)
        failedIds.push(completedTodos[idx].id)
      } else {
        deletedIds.add(completedTodos[idx].id)
      }
    })

    console.log('Cleared completed todos:', [...deletedIds])
    setTodos((prev) => prev.filter((t) => !deletedIds.has(t.id)))

    if (failedIds.length > 0) {
      setError(`Failed to delete ${failedIds.length} item(s). Please try again.`)
    }
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.data?.completed
    if (filter === 'completed') return t.data?.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">My Todos</h1>
          <p className="text-slate-500 mt-1 text-sm">Stay organized, get things done</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Input */}
          <div className="p-5 border-b border-slate-100">
            <TodoInput onAdd={addTodo} />
          </div>

          {/* Stats */}
          {todos.length > 0 && (
            <div className="px-5 pt-4">
              <TodoStats activeCount={activeCount} completedCount={completedCount} total={todos.length} />
            </div>
          )}

          {/* Filter Tabs */}
          {todos.length > 0 && (
            <div className="flex gap-1 px-5 pt-3">
              {['all', 'active', 'completed'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                    filter === f
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mx-5 mt-3 px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
              <button
                onClick={() => setError(null)}
                className="ml-2 text-red-400 hover:text-red-600 font-bold"
              >
                ×
              </button>
            </div>
          )}

          {/* List */}
          <div className="p-5">
            <TodoList
              todos={filteredTodos}
              loading={loading}
              filter={filter}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="px-5 pb-5">
              <TodoFooter
                activeCount={activeCount}
                completedCount={completedCount}
                onClearCompleted={clearCompleted}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
