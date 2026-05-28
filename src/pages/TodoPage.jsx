import React, { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import TodoInput from '@/components/todo/TodoInput'
import TodoList from '@/components/todo/TodoList'
import TodoFooter from '@/components/todo/TodoFooter'
import { CheckSquare } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

const TodoPage = () => {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const fetchItems = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from('Todo Items')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      console.log('Fetched todo items:', response)
      setItems(getRows(response))
      setStatus('ready')
    } catch (err) {
      console.error('Failed to fetch todos:', err)
      setError(err.message || 'Failed to load todos')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const handleAdd = async (title) => {
    setError(null)
    try {
      const { data: response, error: createError } = await client
        .from('Todo Items')
        .insert({
          data: {
            title,
            completed: false,
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      console.log('Created todo:', response)
      const createdItem = getEntity(response)
      setItems((current) => [createdItem, ...current])
    } catch (err) {
      console.error('Failed to add todo:', err)
      setError(err.message || 'Failed to add todo')
    }
  }

  const handleToggle = async (item) => {
    const fields = item.data || {}
    const newCompleted = !fields.completed
    setError(null)

    // Optimistic update
    setItems((current) =>
      current.map((entry) =>
        entry.id === item.id
          ? { ...entry, data: { ...entry.data, completed: newCompleted } }
          : entry
      )
    )

    try {
      const { data: response, error: updateError } = await client
        .from('Todo Items')
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
        throw new Error(getErrorMessage(response, updateError))
      }

      console.log('Updated todo:', response)
      const updatedItem = getEntity(response)
      setItems((current) =>
        current.map((entry) => (entry.id === updatedItem.id ? updatedItem : entry))
      )
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      // Revert optimistic update
      setItems((current) =>
        current.map((entry) =>
          entry.id === item.id
            ? { ...entry, data: { ...entry.data, completed: fields.completed } }
            : entry
        )
      )
      setError(err.message || 'Failed to update todo')
    }
  }

  const handleDelete = async (itemId) => {
    setError(null)
    const previousItems = items

    // Optimistic update
    setItems((current) => current.filter((entry) => entry.id !== itemId))

    try {
      const { data: response, error: deleteError } = await client
        .from('Todo Items')
        .delete()
        .eq('id', itemId)
        .select()
        .maybeSingle()

      if (deleteError || response?.success === false) {
        throw new Error(getErrorMessage(response, deleteError))
      }

      console.log('Deleted todo:', itemId)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setItems(previousItems)
      setError(err.message || 'Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    setError(null)
    const completedItems = items.filter((item) => item.data?.completed)
    const previousItems = items

    // Optimistic update
    setItems((current) => current.filter((item) => !item.data?.completed))

    try {
      for (const item of completedItems) {
        const { error: deleteError } = await client
          .from('Todo Items')
          .delete()
          .eq('id', item.id)
          .select()
          .maybeSingle()

        if (deleteError) {
          throw deleteError
        }
      }
      console.log('Cleared all completed todos')
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setItems(previousItems)
      setError(err.message || 'Failed to clear completed tasks')
    }
  }

  const completedCount = items.filter((item) => item.data?.completed).length

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <CheckSquare className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold text-slate-900">Todo App</h1>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
          {/* Input */}
          <TodoInput onAdd={handleAdd} />

          {/* Error */}
          {error && (
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Loading */}
          {status === 'loading' && (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
            </div>
          )}

          {/* List */}
          {status !== 'loading' && (
            <TodoList
              items={items}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}

          {/* Footer */}
          {items.length > 0 && (
            <TodoFooter
              totalCount={items.length}
              completedCount={completedCount}
              onClearCompleted={handleClearCompleted}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoPage
