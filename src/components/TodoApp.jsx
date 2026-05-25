import React, { useState, useEffect, useCallback } from 'react'
import {
  Plus,
  Trash2,
  Check,
  X,
  Calendar,
  ListTodo,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import { format, parseISO } from 'date-fns'
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getSchemaData,
} from '../api/todos.js'

const priorityColors = {
  low: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  medium: 'bg-amber-100 text-amber-700 border-amber-200',
  high: 'bg-rose-100 text-rose-700 border-rose-200',
}

const priorityDotColors = {
  low: 'bg-emerald-500',
  medium: 'bg-amber-500',
  high: 'bg-rose-500',
}

export default function TodoApp() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [newTitle, setNewTitle] = useState('')
  const [newPriority, setNewPriority] = useState('medium')
  const [newDueDate, setNewDueDate] = useState('')
  const [filter, setFilter] = useState('all')

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
    const trimmed = newTitle.trim()
    if (!trimmed) return

    setError(null)
    setStatus('submitting')

    try {
      const created = await createTodo({
        title: trimmed,
        priority: newPriority,
        due_date: newDueDate || null,
      })
      setItems((current) => [created, ...current])
      setNewTitle('')
      setNewPriority('medium')
      setNewDueDate('')
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to add todo')
      setStatus('error')
    }
  }

  const handleToggleComplete = async (item) => {
    const fields = getSchemaData(item)
    try {
      const updated = await updateTodo(item, {
        completed: !fields.completed,
      })
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
    const completedItems = items.filter((item) => getSchemaData(item).completed)
    if (completedItems.length === 0) return

    setStatus('submitting')
    try {
      await Promise.all(completedItems.map((item) => deleteTodo(item.id)))
      setItems((current) =>
        current.filter((item) => !getSchemaData(item).completed)
      )
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to clear completed todos')
      setStatus('error')
    }
  }

  const filteredItems = items.filter((item) => {
    const fields = getSchemaData(item)
    if (filter === 'active') return !fields.completed
    if (filter === 'completed') return fields.completed
    return true
  })

  const completedCount = items.filter(
    (item) => getSchemaData(item).completed
  ).length
  const activeCount = items.length - completedCount

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-indigo-600 rounded-xl shadow-lg">
            <ListTodo className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Todo List
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              {activeCount} active · {completedCount} completed
            </p>
          </div>
        </div>

        {/* Add Todo Form */}
        <form
          onSubmit={handleAdd}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 mb-6"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="What needs to be done?"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                className="px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <input
                type="date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
                className="px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              />
              <button
                type="submit"
                disabled={status === 'submitting' || !newTitle.trim()}
                className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white rounded-xl font-medium flex items-center gap-2 transition-colors shadow-sm"
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
                <span className="hidden sm:inline">Add</span>
              </button>
            </div>
          </div>
        </form>

        {/* Error Banner */}
        {error && (
          <div className="mb-4 p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-3 text-rose-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{error}</span>
            <button
              onClick={() => setError(null)}
              className="ml-auto p-1 hover:bg-rose-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Filters & Clear */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div className="flex gap-1 bg-white rounded-xl p-1 border border-slate-200 shadow-sm">
            {['all', 'active', 'completed'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                  filter === f
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          {completedCount > 0 && (
            <button
              onClick={handleClearCompleted}
              disabled={status === 'submitting'}
              className="px-4 py-2 text-sm font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear completed ({completedCount})
            </button>
          )}
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {status === 'loading' && items.length === 0 && (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
            </div>
          )}

          {filteredItems.length === 0 && status !== 'loading' && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 border-dashed">
              <ListTodo className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">
                {filter === 'all'
                  ? 'No todos yet. Add one above!'
                  : filter === 'active'
                  ? 'No active todos. Great job!'
                  : 'No completed todos yet.'}
              </p>
            </div>
          )}

          {filteredItems.map((item) => {
            const fields = getSchemaData(item)
            const isCompleted = fields.completed

            return (
              <div
                key={item.id}
                className={`group bg-white rounded-xl border transition-all duration-200 ${
                  isCompleted
                    ? 'border-slate-200 opacity-75'
                    : 'border-slate-200 hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3 p-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => handleToggleComplete(item)}
                    className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                      isCompleted
                        ? 'bg-indigo-600 border-indigo-600'
                        : 'border-slate-300 hover:border-indigo-500'
                    }`}
                  >
                    {isCompleted && <Check className="w-4 h-4 text-white" />}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium truncate ${
                        isCompleted
                          ? 'text-slate-400 line-through'
                          : 'text-slate-900'
                      }`}
                    >
                      {fields.title}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium border ${priorityColors[fields.priority]}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${priorityDotColors[fields.priority]}`}
                        />
                        {fields.priority}
                      </span>
                      {fields.due_date && (
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="w-3 h-3" />
                          {format(parseISO(fields.due_date), 'MMM d, yyyy')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex-shrink-0 p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                    title="Delete todo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Stats */}
        {items.length > 0 && (
          <div className="mt-6 text-center text-xs text-slate-400">
            {items.length} total item{items.length !== 1 ? 's' : ''} ·{' '}
            {activeCount} remaining
          </div>
        )}
      </div>
    </div>
  )
}
