

import React, { useState, useEffect, useCallback } from 'react'
import { Plus, Trash2, Check, X, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, clearCompleted } from '../api/todos.js'

const getSchemaData = (entity) => entity?.data ?? {}

export default function TodoList() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const refreshItems = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const rows = await fetchTodos()
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

  const handleAdd = async (e) => {
    e.preventDefault()
    const title = inputValue.trim()
    if (!title) return

    setError(null)
    setStatus('submitting')

    try {
      const createdItem = await createTodo(title)
      setItems((current) => [createdItem, ...current])
      setInputValue('')
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to add todo')
      setStatus('error')
    }
  }

  const handleToggle = async (item) => {
    try {
      const updatedItem = await updateTodo(item)
      setItems((current) =>
        current.map((entry) => (entry.id === updatedItem.id ? updatedItem : entry))
      )
    } catch (err) {
      setError(err.message || 'Failed to update todo')
    }
  }

  const handleDelete = async (itemId) => {
    try {
      await deleteTodo(itemId)
      setItems((current) => current.filter((entry) => entry.id !== itemId))
    } catch (err) {
      setError(err.message || 'Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    try {
      await clearCompleted()
      setItems((current) => current.filter((entry) => !getSchemaData(entry).completed))
    } catch (err) {
      setError(err.message || 'Failed to clear completed todos')
    }
  }

  const completedCount = items.filter((item) => getSchemaData(item).completed).length
  const totalCount = items.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-indigo-600 px-6 py-6">
            <h1 className="text-2xl font-bold text-white tracking-tight">Todo List</h1>
            <p className="text-indigo-100 text-sm mt-1">
              {totalCount} task{totalCount !== 1 ? 's' : ''} · {completedCount} completed
            </p>
          </div>

          <div className="p-6">
            <form onSubmit={handleAdd} className="flex gap-2 mb-6">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={status === 'submitting' || !inputValue.trim()}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                Add
              </button>
            </form>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                <X className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            {status === 'loading' && items.length === 0 && (
              <div className="flex items-center justify-center py-12 text-slate-400">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                Loading tasks...
              </div>
            )}

            {items.length === 0 && status !== 'loading' && (
              <div className="text-center py-12 text-slate-400">
                <p className="text-lg font-medium text-slate-500">No tasks yet</p>
                <p className="text-sm mt-1">Add a new task to get started</p>
              </div>
            )}

            <ul className="space-y-2">
              {items.map((item) => {
                const fields = getSchemaData(item)
                const isCompleted = fields.completed

                return (
                  <li
                    key={item.id}
                    className={`group flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      isCompleted
                        ? 'bg-slate-50 border-slate-200'
                        : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(item)}
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-slate-300 text-transparent hover:border-indigo-400'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>

                    <span
                      className={`flex-1 text-sm ${
                        isCompleted
                          ? 'text-slate-400 line-through'
                          : 'text-slate-700'
                      }`}
                    >
                      {fields.title}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
                      aria-label="Delete task"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                )
              })}
            </ul>

            {completedCount > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  type="button"
                  onClick={handleClearCompleted}
                  className="text-sm text-slate-500 hover:text-red-600 font-medium transition-colors"
                >
                  Clear {completedCount} completed
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


