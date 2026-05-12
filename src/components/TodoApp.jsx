import React, { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from('TodoItem')
        .select('*')
        .order('created_at', { ascending: false })
        .range(0, 99)

      if (fetchError) throw fetchError
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

    const { data: response, error: createError } = await client
      .from('TodoItem')
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
      setError(getErrorMessage(response, createError))
      return
    }

    const created = getEntity(response)
    setTodos((prev) => [created, ...prev])
  }

  const toggleTodo = async (todo) => {
    const fields = todo.data ?? {}
    const { data: response, error: updateError } = await client
      .from('TodoItem')
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
      setError(getErrorMessage(response, updateError))
      return
    }

    const updated = getEntity(response)
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
  }

  const deleteTodo = async (todoId) => {
    const { data: response, error: deleteError } = await client
      .from('TodoItem')
      .delete()
      .eq('id', todoId)
      .select()
      .maybeSingle()

    if (deleteError || response?.success === false) {
      console.error('Failed to delete todo:', getErrorMessage(response, deleteError))
      setError(getErrorMessage(response, deleteError))
      return
    }

    setTodos((prev) => prev.filter((t) => t.id !== todoId))
  }

  const clearCompleted = async () => {
    const completedTodos = todos.filter((t) => t.data?.completed)
    if (completedTodos.length === 0) return

    const deletePromises = completedTodos.map((todo) =>
      client.from('TodoItem').delete().eq('id', todo.id).select().maybeSingle()
    )

    const results = await Promise.all(deletePromises)
    const failed = results.filter(({ error }) => error)
    if (failed.length > 0) {
      console.error('Some todos failed to delete')
      setError('Some completed todos could not be deleted')
    }

    const deletedIds = new Set(
      results
        .map(({ data: response }, i) =>
          response?.success !== false ? completedTodos[i].id : null
        )
        .filter(Boolean)
    )

    setTodos((prev) => prev.filter((t) => !deletedIds.has(t.id)))
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.data?.completed
    if (filter === 'completed') return t.data?.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-lg">
        <h1 className="text-5xl font-bold text-center text-indigo-700 mb-2 tracking-tight">
          todos
        </h1>
        <p className="text-center text-indigo-400 mb-8 text-sm">
          Stay organized, stay productive
        </p>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <TodoInput onAdd={addTodo} />

          {error && (
            <div className="px-5 py-3 bg-red-50 border-b border-red-100 text-red-600 text-sm">
              {error}
              <button
                className="ml-2 underline text-red-500 hover:text-red-700"
                onClick={() => setError(null)}
              >
                Dismiss
              </button>
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-16 text-indigo-400">
              <svg className="animate-spin h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Loading todos...
            </div>
          ) : (
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          )}

          {!loading && todos.length > 0 && (
            <TodoFooter
              activeCount={activeCount}
              completedCount={completedCount}
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
            />
          )}
        </div>

        {!loading && todos.length === 0 && (
          <p className="text-center text-indigo-300 mt-6 text-sm">
            No todos yet — add one above!
          </p>
        )}
      </div>
    </div>
  )
}
