import React, { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

const FILTERS = ['All', 'Active', 'Completed']

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

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
      console.log('Fetched todos:', getRows(response))
    } catch (err) {
      console.error('Fetch error:', err)
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const handleAdd = async (e) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setSubmitting(true)
    setError(null)
    try {
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
        throw new Error(getErrorMessage(response, createError))
      }

      const created = getEntity(response)
      console.log('Created todo:', created)
      setTodos((prev) => [created, ...prev])
      setInputValue('')
    } catch (err) {
      console.error('Create error:', err)
      setError(err.message || 'Failed to add todo')
    } finally {
      setSubmitting(false)
    }
  }

  const handleToggle = async (item) => {
    const fields = item.data ?? {}
    const { data: response, error: updateError } = await client
      .from('TodoItem')
      .update({
        data: {
          ...fields,
          completed: !fields.completed,
        },
      })
      .eq('id', item.id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      console.error('Toggle error:', getErrorMessage(response, updateError))
      return
    }

    const updated = getEntity(response)
    console.log('Toggled todo:', updated)
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
  }

  const handleDelete = async (itemId) => {
    const { data: response, error: deleteError } = await client
      .from('TodoItem')
      .delete()
      .eq('id', itemId)
      .select()
      .maybeSingle()

    if (deleteError || response?.success === false) {
      console.error('Delete error:', getErrorMessage(response, deleteError))
      return
    }

    console.log('Deleted todo id:', itemId)
    setTodos((prev) => prev.filter((t) => t.id !== itemId))
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data?.completed)
    if (completed.length === 0) return

    await Promise.all(
      completed.map((item) =>
        client.from('TodoItem').delete().eq('id', item.id).select().maybeSingle()
      )
    )
    console.log('Cleared completed todos:', completed.map((t) => t.id))
    setTodos((prev) => prev.filter((t) => !t.data?.completed))
  }

  const filtered = todos.filter((t) => {
    if (filter === 'Active') return !t.data?.completed
    if (filter === 'Completed') return t.data?.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-indigo-700 tracking-widest uppercase mb-8 drop-shadow">
          TODO
        </h1>

        {/* Input */}
        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            disabled={submitting}
            className="flex-1 px-4 py-3 rounded-xl border border-indigo-200 bg-white text-gray-800 placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
          />
          <button
            type="submit"
            disabled={submitting || !inputValue.trim()}
            className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-base"
          >
            {submitting ? '...' : 'Add'}
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-red-100 text-red-700 text-sm border border-red-200">
            {error}
          </div>
        )}

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Filter tabs */}
          <div className="flex border-b border-gray-100">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                  filter === f
                    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                    : 'text-gray-500 hover:text-indigo-500'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* List */}
          {loading ? (
            <div className="py-16 text-center text-gray-400 text-sm">Loading…</div>
          ) : filtered.length === 0 ? (
            <div className="py-16 text-center text-gray-400 text-sm">
              {filter === 'All' ? 'No todos yet. Add one above!' : `No ${filter.toLowerCase()} todos.`}
            </div>
          ) : (
            <ul>
              {filtered.map((item, idx) => {
                const fields = item.data ?? {}
                return (
                  <li
                    key={item.id}
                    className={`flex items-center gap-3 px-5 py-4 group transition-colors ${
                      idx !== filtered.length - 1 ? 'border-b border-gray-100' : ''
                    } hover:bg-indigo-50`}
                  >
                    {/* Checkbox */}
                    <button
                      onClick={() => handleToggle(item)}
                      aria-label={fields.completed ? 'Mark incomplete' : 'Mark complete'}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        fields.completed
                          ? 'bg-indigo-500 border-indigo-500'
                          : 'border-gray-300 hover:border-indigo-400'
                      }`}
                    >
                      {fields.completed && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>

                    {/* Title */}
                    <span
                      className={`flex-1 text-base ${
                        fields.completed ? 'line-through text-gray-400' : 'text-gray-800'
                      }`}
                    >
                      {fields.title}
                    </span>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(item.id)}
                      aria-label="Delete todo"
                      className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all p-1 rounded"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}

          {/* Footer */}
          {todos.length > 0 && (
            <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-t border-gray-100 text-sm text-gray-500">
              <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                >
                  Clear completed ({completedCount})
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
