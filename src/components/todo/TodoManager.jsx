import React, { useState, useEffect } from 'react'
import { Plus, Trash2, CheckCircle2, Circle, X } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'
import { cn } from '../../lib/utils'

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

export default function TodoManager() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  const refreshItems = async () => {
    try {
      const { data: response, error: browseError } = await client
        .from('TodoItem')
        .select('*')
        .order('created_at', { ascending: false })

      if (browseError) throw browseError
      setItems(getRows(response))
      setLoading(false)
    } catch (err) {
      console.error('Failed to fetch todos:', err)
      setError('Failed to load todo items. Please try again.')
      setLoading(false)
    }
  }

  useEffect(() => {
    refreshItems()
  }, [])

  const handleAddTodo = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newTodo = {
      title: inputValue.trim(),
      completed: false,
      created_at: new Date().toISOString()
    }

    try {
      const { data: response, error: createError } = await client
        .from('TodoItem')
        .insert({ data: newTodo })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      const created = getEntity(response)
      setItems([created, ...items])
      setInputValue('')
    } catch (err) {
      console.error('Failed to add todo:', err)
      setError(err.message || 'Failed to add todo')
    }
  }

  const toggleTodo = async (item) => {
    const fields = getSchemaData(item)
    const newStatus = !fields.completed

    try {
      const { data: response, error: updateError } = await client
        .from('TodoItem')
        .update({
          data: {
            ...fields,
            completed: newStatus
          }
        })
        .eq('id', item.id)
        .select()
        .single()

      if (updateError || response?.success === false) {
        throw new Error(getErrorMessage(response, updateError))
      }

      const updated = getEntity(response)
      setItems(items.map(t => t.id === item.id ? updated : t))
    } catch (err) {
      console.error('Failed to update todo:', err)
      setError('Failed to update task status')
    }
  }

  const deleteTodo = async (id) => {
    try {
      const { data: response, error: deleteError } = await client
        .from('TodoItem')
        .delete()
        .eq('id', id)
        .select()
        .maybeSingle()

      if (deleteError || response?.success === false) {
        throw new Error(getErrorMessage(response, deleteError))
      }

      setItems(items.filter(t => t.id !== id))
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError('Failed to delete task')
    }
  }

  const clearCompleted = async () => {
    const completedItems = items.filter(t => getSchemaData(t).completed)
    if (completedItems.length === 0) return

    try {
      // Since we don't have a bulk delete with multiple IDs in a single call easily in this SDK (unless using `in`), 
      // we'll delete them one by one or use `in` if possible.
      const ids = completedItems.map(t => t.id)
      const { data: response, error: deleteError } = await client
        .from('TodoItem')
        .delete()
        .in('id', ids)

      if (deleteError || response?.success === false) {
        throw new Error(getErrorMessage(response, deleteError))
      }

      setItems(items.filter(t => !getSchemaData(t).completed))
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError('Failed to clear completed tasks')
    }
  }

  const filteredItems = items.filter(item => {
    const fields = getSchemaData(item)
    if (filter === 'active') return !fields.completed
    if (filter === 'completed') return fields.completed
    return true
  })

  const activeCount = items.filter(t => !getSchemaData(t).completed).length

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-slate-200">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-2">
        <CheckCircle2 className="text-indigo-600" />
        Todo List
      </h1>

      <form onSubmit={handleAddTodo} className="mb-6 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 border border-slate-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-900"
        />
        <button
          type="submit"
          className="bg-slate-900 text-white rounded-md px-4 py-2 hover:bg-slate-800 transition-colors flex items-center gap-1"
        >
          <Plus size={20} />
          Add
        </button>
      </form>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md flex justify-between items-center text-sm border border-red-100">
          <span>{error}</span>
          <button onClick={() => setError(null)}><X size={16} /></button>
        </div>
      )}

      <div className="space-y-2 mb-6">
        {loading ? (
          <div className="text-center py-8 text-slate-500">Loading tasks...</div>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const fields = getSchemaData(item)
            return (
              <div
                key={item.id}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg border transition-all",
                  fields.completed ? "bg-slate-50 border-slate-100 opacity-60" : "bg-white border-slate-200 hover:border-indigo-200"
                )}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <button
                    onClick={() => toggleTodo(item)}
                    className={cn(
                      "flex-shrink-0 transition-colors",
                      fields.completed ? "text-emerald-600" : "text-slate-300 hover:text-indigo-500"
                    )}
                  >
                    {fields.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                  </button>
                  <span className={cn(
                    "text-slate-900 truncate",
                    fields.completed && "line-through text-slate-500"
                  )}>
                    {fields.title}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(item.id)}
                  className="text-slate-300 hover:text-red-500 transition-colors ml-2"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            )
          })
        ) : (
          <div className="text-center py-8 text-slate-400 italic">
            {filter === 'all' ? 'No tasks yet. Add one above!' : 'No tasks match this filter.'}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-100 gap-4">
        <span className="text-sm text-slate-500">{activeCount} items left</span>
        
        <div className="flex bg-slate-100 rounded-md p-1">
          {['all', 'active', 'completed'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-3 py-1 text-xs rounded capitalize transition-all",
                filter === f ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <button
          onClick={clearCompleted}
          className="text-xs text-slate-400 hover:text-red-500 transition-colors"
        >
          Clear completed
        </button>
      </div>
    </div>
  )
}
