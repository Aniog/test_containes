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
      console.error('Failed to create todo:', getErrorMessage(response, createError))
      setError('Failed to add todo. Please try again.')
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
      setError('Failed to update todo. Please try again.')
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
      setError('Failed to delete todo. Please try again.')
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
    const hasError = results.some(({ error }) => error)

    if (hasError) {
      console.error('Some todos failed to delete')
      setError('Some completed todos could not be deleted.')
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-start justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-indigo-700 tracking-tight drop-shadow-sm">
            todos
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <TodoInput onAdd={addTodo} />

          {error && (
            <div className="px-5 py-3 bg-red-50 border-b border-red-100 text-red-600 text-sm flex items-center justify-between">
              <span>{error}</span>
              <button
                onClick={() => setError(null)}
                className="ml-3 text-red-400 hover:text-red-600 font-bold text-lg leading-none"
              >
                ×
              </button>
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-8 h-8 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin" />
            </div>
          ) : (
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          )}

          {todos.length > 0 && (
            <TodoFooter
              activeCount={activeCount}
              completedCount={completedCount}
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
            />
          )}
        </div>

        {todos.length === 0 && !loading && (
          <p className="text-center text-indigo-400 mt-6 text-sm">
            No todos yet — add one above!
          </p>
        )}
      </div>
    </div>
  )
}
