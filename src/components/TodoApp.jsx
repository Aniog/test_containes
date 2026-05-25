import React, { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import {
  Plus,
  Trash2,
  Check,
  X,
  ListTodo,
  Loader2,
  AlertCircle,
} from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getSchemaData = (entity) => entity?.data ?? {}
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

async function fetchTodoItems() {
  const { data: response, error } = await client
    .from('TodoItem')
    .select('*')
    .order('created_at', { ascending: false })
    .range(0, 199)

  if (error) throw error
  return getRows(response)
}

export default function TodoApp() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('all')

  const refreshItems = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const rows = await fetchTodoItems()
      setItems(rows)
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to load todo items')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    refreshItems()
  }, [refreshItems])

  const handleCreate = async (e) => {
    e.preventDefault()
    const title = inputValue.trim()
    if (!title) return

    setError(null)
    setStatus('submitting')

    const { data: response, error: createError } = await client
      .from('TodoItem')
      .insert({
        data: {
          title,
          completed: false,
        },
      })
      .select()
      .single()

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError))
      setStatus('error')
      return
    }

    const createdItem = getEntity(response)
    setItems((current) => [createdItem, ...current])
    setInputValue('')
    setStatus('ready')
  }

  const handleToggle = async (item) => {
    const fields = getSchemaData(item)
    const newCompleted = !fields.completed

    const { data: response, error: updateError } = await client
      .from('TodoItem')
      .update({
        data: {
          ...fields,
          completed: newCompleted,
        },
      })
      .eq('id', item.id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      setError(getErrorMessage(response, updateError))
      return
    }

    const updatedItem = getEntity(response)
    setItems((current) =>
      current.map((entry) => (entry.id === updatedItem.id ? updatedItem : entry))
    )
  }

  const handleDelete = async (itemId) => {
    const { data: response, error: deleteError } = await client
      .from('TodoItem')
      .delete()
      .eq('id', itemId)
      .select()
      .maybeSingle()

    if (deleteError || response?.success === false) {
      setError(getErrorMessage(response, deleteError))
      return
    }

    setItems((current) => current.filter((entry) => entry.id !== itemId))
  }

  const handleClearCompleted = async () => {
    const completedItems = items.filter((item) => getSchemaData(item).completed)
    if (completedItems.length === 0) return

    setStatus('submitting')
    let hasError = false

    for (const item of completedItems) {
      const { data: response, error: deleteError } = await client
        .from('TodoItem')
        .delete()
        .eq('id', item.id)
        .select()
        .maybeSingle()

      if (deleteError || response?.success === false) {
        hasError = true
        setError(getErrorMessage(response, deleteError))
      }
    }

    if (!hasError) {
      setItems((current) =>
        current.filter((item) => !getSchemaData(item).completed)
      )
    }
    setStatus('ready')
  }

  const filteredItems = items.filter((item) => {
    const fields = getSchemaData(item)
    if (filter === 'active') return !fields.completed
    if (filter === 'completed') return fields.completed
    return true
  })

  const activeCount = items.filter((item) => !getSchemaData(item).completed).length
  const completedCount = items.length - activeCount

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 shadow-lg mb-4">
            <ListTodo className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            Todo List
          </h1>
          <p className="text-slate-500 mt-2">Stay organized, get things done</p>
        </div>

        {/* Add Todo Form */}
        <form
          onSubmit={handleCreate}
          className="flex gap-3 mb-6"
        >
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full px-4 py-3.5 pr-4 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'submitting' || !inputValue.trim()}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'submitting' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
            <span className="hidden sm:inline">Add</span>
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 px-4 py-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{error}</span>
            <button
              onClick={() => setError(null)}
              className="ml-auto p-1 hover:bg-red-100 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Filters & Stats */}
        {items.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex items-center gap-1 bg-white rounded-lg p-1 shadow-sm border border-slate-200">
              {['all', 'active', 'completed'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-colors ${
                    filter === f
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span>
                {activeCount} active{activeCount !== 1 ? '' : ''}
              </span>
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear completed
                </button>
              )}
            </div>
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-2">
          {status === 'loading' && items.length === 0 ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-16">
              {items.length === 0 ? (
                <>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 mb-4">
                    <ListTodo className="w-7 h-7 text-slate-400" />
                  </div>
                  <p className="text-slate-500 font-medium">No tasks yet</p>
                  <p className="text-slate-400 text-sm mt-1">
                    Add your first task above to get started
                  </p>
                </>
              ) : (
                <>
                  <p className="text-slate-500 font-medium">No {filter} tasks</p>
                  <p className="text-slate-400 text-sm mt-1">
                    Try switching to a different filter
                  </p>
                </>
              )}
            </div>
          ) : (
            filteredItems.map((item) => {
              const fields = getSchemaData(item)
              const isCompleted = fields.completed

              return (
                <div
                  key={item.id}
                  className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white border transition-all shadow-sm hover:shadow-md ${
                    isCompleted
                      ? 'border-slate-200 opacity-75'
                      : 'border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => handleToggle(item)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isCompleted
                        ? 'bg-emerald-500 border-emerald-500'
                        : 'border-slate-300 hover:border-indigo-400'
                    }`}
                  >
                    {isCompleted && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>

                  <span
                    className={`flex-1 text-sm sm:text-base transition-all ${
                      isCompleted
                        ? 'text-slate-400 line-through'
                        : 'text-slate-800'
                    }`}
                  >
                    {fields.title}
                  </span>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    title="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )
            })
          )}
        </div>

        {/* Footer Stats */}
        {items.length > 0 && (
          <div className="mt-6 text-center text-xs text-slate-400">
            {items.length} task{items.length !== 1 ? 's' : ''} total
          </div>
        )}
      </div>
    </div>
  )
}
