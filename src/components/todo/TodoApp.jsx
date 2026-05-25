import React, { useState, useEffect, useCallback } from 'react'
import { client } from '@/api/postgrest-client.js'
import TodoInput from './TodoInput.jsx'
import TodoList from './TodoList.jsx'
import TodoStats from './TodoStats.jsx'

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
    .range(0, 99)

  if (error) throw error
  return getRows(response)
}

export default function TodoApp() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

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

  const handleAdd = async (title) => {
    setError(null)
    setStatus('submitting')

    const { data: response, error: createError } = await client
      .from('TodoItem')
      .insert({
        data: {
          title: title.trim(),
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
    setStatus('ready')
  }

  const handleToggle = async (item) => {
    const fields = getSchemaData(item)
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
    const deletePromises = completedItems.map((item) =>
      client.from('TodoItem').delete().eq('id', item.id).select().maybeSingle()
    )

    const results = await Promise.all(deletePromises)
    const hasError = results.some(
      ({ data: response, error: deleteError }) =>
        deleteError || response?.success === false
    )

    if (hasError) {
      setError('Some items could not be deleted')
      setStatus('error')
      await refreshItems()
      return
    }

    setItems((current) =>
      current.filter((entry) => !getSchemaData(entry).completed)
    )
    setStatus('ready')
  }

  const completedCount = items.filter(
    (item) => getSchemaData(item).completed
  ).length
  const totalCount = items.length
  const activeCount = totalCount - completedCount

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-indigo-600 px-6 py-5">
            <h1 className="text-2xl font-bold text-white text-center tracking-tight">
              Todo List
            </h1>
            <p className="text-indigo-100 text-center text-sm mt-1">
              Stay organized, get things done
            </p>
          </div>

          <div className="p-6">
            <TodoInput onAdd={handleAdd} disabled={status === 'submitting'} />

            {error && (
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="mt-6">
              {status === 'loading' && items.length === 0 ? (
                <div className="text-center py-12 text-slate-400 dark:text-slate-500">
                  <div className="inline-block w-6 h-6 border-2 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-3" />
                  <p>Loading your todos...</p>
                </div>
              ) : (
                <TodoList
                  items={items}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              )}
            </div>

            {totalCount > 0 && (
              <TodoStats
                total={totalCount}
                active={activeCount}
                completed={completedCount}
                onClearCompleted={handleClearCompleted}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
