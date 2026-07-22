import React, { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import TodoInput from '../components/todo/TodoInput.jsx'
import TodoFilters from '../components/todo/TodoFilters.jsx'
import TodoList from '../components/todo/TodoList.jsx'
import TodoStats from '../components/todo/TodoStats.jsx'

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
  const [priorityFilter, setPriorityFilter] = useState('all')
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
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const addTodo = async (title, priority, dueDate) => {
    const payload = { title, priority, completed: false }
    if (dueDate) payload.due_date = dueDate

    const { data: response, error: createError } = await client
      .from('Todo Items')
      .insert({ data: payload })
      .select()
      .single()

    if (createError || response?.success === false) {
      throw new Error(getErrorMessage(response, createError))
    }

    const created = getEntity(response)
    setTodos((prev) => [created, ...prev])
  }

  const toggleTodo = async (todo) => {
    const fields = todo.data ?? {}
    const { data: response, error: updateError } = await client
      .from('Todo Items')
      .update({ data: { ...fields, completed: !fields.completed } })
      .eq('id', todo.id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      throw new Error(getErrorMessage(response, updateError))
    }

    const updated = getEntity(response)
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
  }

  const deleteTodo = async (todoId) => {
    const { data: response, error: deleteError } = await client
      .from('Todo Items')
      .delete()
      .eq('id', todoId)
      .select()
      .maybeSingle()

    if (deleteError || response?.success === false) {
      throw new Error(getErrorMessage(response, deleteError))
    }

    setTodos((prev) => prev.filter((t) => t.id !== todoId))
  }

  const updateTodo = async (todo, newTitle, newPriority, newDueDate) => {
    const fields = todo.data ?? {}
    const updatedFields = {
      ...fields,
      title: newTitle,
      priority: newPriority,
      due_date: newDueDate || null,
    }

    const { data: response, error: updateError } = await client
      .from('Todo Items')
      .update({ data: updatedFields })
      .eq('id', todo.id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      throw new Error(getErrorMessage(response, updateError))
    }

    const updated = getEntity(response)
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
  }

  const filteredTodos = todos.filter((todo) => {
    const fields = todo.data ?? {}
    const matchesStatus =
      filter === 'all' ||
      (filter === 'active' && !fields.completed) ||
      (filter === 'completed' && fields.completed)
    const matchesPriority =
      priorityFilter === 'all' || fields.priority === priorityFilter
    return matchesStatus && matchesPriority
  })

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">My Todos</h1>
          </div>
          <p className="text-slate-500 mt-1 text-sm pl-12">Stay organized, get things done.</p>
        </header>

        <TodoInput onAdd={addTodo} />

        <TodoStats todos={todos} />

        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm mb-4">
            {error}
          </div>
        )}

        <TodoList
          todos={filteredTodos}
          loading={loading}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
          filter={filter}
        />
      </div>
    </div>
  )
}
