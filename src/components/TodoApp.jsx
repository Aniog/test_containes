import React, { useState, useEffect, useCallback } from 'react'
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  clearCompletedTodos,
} from '../api/todos.js'
import {
  Plus,
  Trash2,
  Check,
  X,
  ListTodo,
  Loader2,
} from 'lucide-react'

const getSchemaData = (entity) => entity?.data ?? {}

export default function TodoApp() {
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
      setError(err.message || 'Failed to load todos')
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
      const created = await createTodo(title)
      setItems((current) => [created, ...current])
      setInputValue('')
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to add todo')
      setStatus('error')
    }
  }

  const handleToggle = async (item) => {
    try {
      const updated = await updateTodo(item)
      setItems((current) =>
        current.map((entry) => (entry.id === updated.id ? updated : entry))
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
    const completed = items.filter((item) => getSchemaData(item).completed)
    if (completed.length === 0) return

    const ids = completed.map((item) => item.id)
    try {
      await clearCompletedTodos(ids)
      setItems((current) =>
        current.filter((item) => !getSchemaData(item).completed)
      )
    } catch (err) {
      setError(err.message || 'Failed to clear completed tasks')
    }
  }

  const completedCount = items.filter(
    (item) => getSchemaData(item).completed
  ).length
  const totalCount = items.length
  const activeCount = totalCount - completedCount

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-6 py-6">
            <div className="flex items-center gap-3">
              <ListTodo className="w-7 h-7 text-white" />
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Todo List
              </h1>
            </div>
            <p className="text-indigo-100 text-sm mt-1">
              {activeCount} active, {completedCount} completed
            </p>
          </div>

          {/* Add Form */}
          <div className="px-6 pt-6">
            <form onSubmit={handleAdd} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || status === 'submitting'}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                Add
              </button>
            </form>
          </div>

          {/* Error */}
          {error && (
            <div className="px-6 pt-4">
              <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">
                <X className="w-4 h-4 shrink-0" />
                {error}
              </div>
            </div>
          )}

          {/* Loading */}
          {status === 'loading' && (
            <div className="px-6 py-10 flex flex-col items-center justify-center text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin mb-2" />
              <p className="text-sm">Loading todos...</p>
            </div>
          )}

          {/* Empty State */}
          {status !== 'loading' && items.length === 0 && (
            <div className="px-6 py-12 text-center">
              <ListTodo className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">No todos yet</p>
              <p className="text-slate-400 text-sm mt-1">
                Add your first task above to get started.
              </p>
            </div>
          )}

          {/* Todo List */}
          {items.length > 0 && (
            <ul className="px-6 py-4 space-y-2">
              {items.map((item) => {
                const fields = getSchemaData(item)
                const isCompleted = fields.completed

                return (
                  <li
                    key={item.id}
                    className={`group flex items-center gap-3 rounded-xl border px-4 py-3 transition ${
                      isCompleted
                        ? 'bg-slate-50 border-slate-200'
                        : 'bg-white border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(item)}
                      className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                        isCompleted
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-slate-300 text-transparent hover:border-indigo-400'
                      }`}
                      aria-label={
                        isCompleted ? 'Mark as incomplete' : 'Mark as complete'
                      }
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </button>

                    <span
                      className={`flex-1 text-sm transition ${
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
                      className="shrink-0 opacity-0 group-hover:opacity-100 p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition"
                      aria-label="Delete todo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                )
              })}
            </ul>
          )}

          {/* Footer Actions */}
          {items.length > 0 && (
            <div className="px-6 pb-6 pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {totalCount} task{totalCount !== 1 ? 's' : ''}
              </span>
              {completedCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearCompleted}
                  className="text-xs font-medium text-slate-500 hover:text-red-600 hover:underline transition"
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
