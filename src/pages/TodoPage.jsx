import { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import TodoInput from '../components/todo/TodoInput.jsx'
import TodoList from '../components/todo/TodoList.jsx'
import TodoFooter from '../components/todo/TodoFooter.jsx'
import TodoFilter from '../components/todo/TodoFilter.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

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
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from('Todo Items')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      setTodos(getRows(response))
    } catch (err) {
      console.error('Failed to fetch todos:', err)
      setError('Failed to load todos. Please try again.')
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
      console.error('Failed to add todo:', getErrorMessage(response, createError))
      setError('Failed to add todo. Please try again.')
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
      console.error('Failed to toggle todo:', getErrorMessage(response, updateError))
      setError('Failed to update todo. Please try again.')
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
      console.error('Failed to delete todo:', getErrorMessage(response, deleteError))
      setError('Failed to delete todo. Please try again.')
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

    const results = await Promise.all(deletePromises)
    const hasError = results.some(({ error }) => error)

    if (hasError) {
      console.error('Some todos failed to delete')
      setError('Some todos could not be cleared. Please try again.')
      await fetchTodos()
      return
    }

    setTodos((prev) => prev.filter((t) => !t.data?.completed))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.data?.completed
    if (filter === 'completed') return todo.data?.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 tracking-tight mb-1">
            My Todos
          </h1>
          <p className="text-gray-500 text-sm">
            Stay organized, get things done.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          {/* Input */}
          <div className="p-5 border-b border-gray-100">
            <TodoInput onAdd={addTodo} />
          </div>

          {/* Filter Tabs */}
          <div className="px-5 pt-4">
            <TodoFilter
              filter={filter}
              onFilterChange={setFilter}
              activeCount={activeCount}
              completedCount={completedCount}
              totalCount={todos.length}
            />
          </div>

          {/* Error Banner */}
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

          {/* Todo List */}
          <div className="px-5 pb-2 mt-2">
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
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
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
