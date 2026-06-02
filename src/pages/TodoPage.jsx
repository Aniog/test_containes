import { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import TodoInput from '../components/TodoInput.jsx'
import TodoList from '../components/TodoList.jsx'
import TodoFooter from '../components/TodoFooter.jsx'
import TodoFilterBar from '../components/TodoFilterBar.jsx'

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

export default function TodoPage() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState(FILTERS.ALL)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    const { data: response, error: fetchError } = await client
      .from('Todo Items')
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

  const addTodo = async (title) => {
    const trimmed = title.trim()
    if (!trimmed) return

    const { data: response, error: createError } = await client
      .from('Todo Items')
      .insert({
        data: {
          title: trimmed,
          completed: false,
          created_at: new Date().toISOString(),
        },
      })
      .select()
      .single()

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError))
      return
    }

    const created = getEntity(response)
    if (created) {
      setTodos((prev) => [created, ...prev])
    }
  }

  const toggleTodo = async (todo) => {
    const fields = todo.data ?? {}
    const { data: response, error: updateError } = await client
      .from('Todo Items')
      .update({
        data: {
          ...fields,
          completed: !fields.completed,
        },
      })
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

  const deleteTodo = async (todoId) => {
    const { data: response, error: deleteError } = await client
      .from('Todo Items')
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

  const clearCompleted = async () => {
    const completedTodos = todos.filter((t) => t.data?.completed)
    if (completedTodos.length === 0) return

    const deletePromises = completedTodos.map((todo) =>
      client.from('Todo Items').delete().eq('id', todo.id).select().maybeSingle()
    )

    await Promise.all(deletePromises)
    setTodos((prev) => prev.filter((t) => !t.data?.completed))
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === FILTERS.ACTIVE) return !t.data?.completed
    if (filter === FILTERS.COMPLETED) return t.data?.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-1">
            My Todos
          </h1>
          <p className="text-gray-500 text-sm">
            {activeCount === 0 && todos.length > 0
              ? 'All tasks completed!'
              : `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Input */}
          <div className="p-5 border-b border-gray-100">
            <TodoInput onAdd={addTodo} />
          </div>

          {/* Filter Bar */}
          {todos.length > 0 && (
            <div className="px-5 pt-4">
              <TodoFilterBar
                filter={filter}
                onFilterChange={setFilter}
                filters={FILTERS}
              />
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mx-5 mt-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Todo List */}
          <div className="p-5">
            <TodoList
              todos={filteredTodos}
              loading={loading}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              filter={filter}
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

        <p className="text-center text-xs text-gray-400 mt-6">
          Click a task to mark it complete
        </p>
      </div>
    </div>
  )
}
