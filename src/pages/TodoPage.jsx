import React, { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import TodoInput from '../components/todo/TodoInput.jsx'
import TodoList from '../components/todo/TodoList.jsx'
import TodoFooter from '../components/todo/TodoFooter.jsx'
import TodoHeader from '../components/todo/TodoHeader.jsx'

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
        .from('TodoItem')
        .select('*')
        .order('created_at', { ascending: false })

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
      return
    }

    const updated = getEntity(response)
    if (updated) {
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    }
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
      return
    }

    setTodos((prev) => prev.filter((t) => t.id !== todoId))
  }

  const clearCompleted = async () => {
    const completedTodos = todos.filter((t) => t.data?.completed)
    await Promise.all(completedTodos.map((t) => deleteTodo(t.id)))
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.data?.completed
    if (filter === 'completed') return t.data?.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-lg">
        <TodoHeader />
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={filteredTodos}
            loading={loading}
            error={error}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
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
          <p className="text-center text-gray-400 mt-6 text-sm">
            No todos yet — add one above to get started!
          </p>
        )}
      </div>
    </div>
  )
}
