import React, { useState, useEffect } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Plus, Trash2, Check, X } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTodoText, setNewTodoText] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const fetchTodos = async () => {
    setStatus('loading')
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from('Todo')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      setTodos(getRows(response))
      setStatus('ready')
    } catch (err) {
      setError(getErrorMessage(null, err))
      setStatus('error')
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleAddTodo = async (e) => {
    e.preventDefault()
    if (!newTodoText.trim()) return

    setError(null)
    setStatus('submitting')

    const { data: response, error: createError } = await client
      .from('Todo')
      .insert({
        data: {
          text: newTodoText.trim(),
          completed: false,
          created_at: new Date().toISOString()
        }
      })
      .select()
      .single()

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError))
      setStatus('error')
      return
    }

    const createdTodo = response?.data
    if (createdTodo) {
      setTodos((current) => [createdTodo, ...current])
    }
    setNewTodoText('')
    setStatus('ready')
  }

  const handleToggleComplete = async (todo) => {
    const fields = todo.data || {}
    const { data: response, error: updateError } = await client
      .from('Todo')
      .update({
        data: {
          ...fields,
          completed: !fields.completed
        }
      })
      .eq('id', todo.id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      setError(getErrorMessage(response, updateError))
      return
    }

    const updatedTodo = response?.data
    if (updatedTodo) {
      setTodos((current) =>
        current.map((entry) => (entry.id === updatedTodo.id ? updatedTodo : entry))
      )
    }
  }

  const handleDelete = async (todoId) => {
    const { data: response, error: deleteError } = await client
      .from('Todo')
      .delete()
      .eq('id', todoId)
      .select()
      .maybeSingle()

    if (deleteError || response?.success === false) {
      setError(getErrorMessage(response, deleteError))
      return
    }

    setTodos((current) => current.filter((entry) => entry.id !== todoId))
  }

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter((todo) => (todo.data || {}).completed)
    
    for (const todo of completedTodos) {
      await client
        .from('Todo')
        .delete()
        .eq('id', todo.id)
        .select()
        .maybeSingle()
    }

    setTodos((current) => current.filter((entry) => !(entry.data || {}).completed))
  }

  const completedCount = todos.filter((todo) => (todo.data || {}).completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">My Todos</h1>
          <p className="text-blue-100 text-sm mt-1">
            {activeCount} active, {completedCount} completed
          </p>
        </div>

        <form onSubmit={handleAddTodo} className="p-6 border-b border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              disabled={status === 'submitting'}
            />
            <button
              type="submit"
              disabled={!newTodoText.trim() || status === 'submitting'}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2 font-medium"
            >
              <Plus className="w-5 h-5" />
              Add
            </button>
          </div>
        </form>

        {error && (
          <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        <div className="divide-y divide-gray-100">
          {status === 'loading' && (
            <div className="p-8 text-center text-gray-500">Loading todos...</div>
          )}

          {status !== 'loading' && todos.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No todos yet. Add one above to get started!
            </div>
          )}

          {todos.map((todo) => {
            const fields = todo.data || {}
            return (
              <div
                key={todo.id}
                className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
              >
                <button
                  onClick={() => handleToggleComplete(todo)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    fields.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300 hover:border-blue-500'
                  }`}
                  aria-label={fields.completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  {fields.completed && <Check className="w-4 h-4 text-white" />}
                </button>

                <span
                  className={`flex-1 text-gray-900 ${
                    fields.completed ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {fields.text}
                </span>

                <button
                  onClick={() => handleDelete(todo.id)}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                  aria-label="Delete todo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>

        {completedCount > 0 && (
          <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-center">
            <button
              onClick={handleClearCompleted}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              Clear completed ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
