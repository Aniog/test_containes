import React, { useState, useEffect, useCallback } from 'react'
import { Plus, Trash2, Check, X, Loader2 } from 'lucide-react'
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  clearCompletedTodos,
} from '../api/todos.js'

const getSchemaData = (entity) => entity?.data ?? {}

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const refreshTodos = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const rows = await fetchTodos()
      setTodos(rows)
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to load todos')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    refreshTodos()
  }, [refreshTodos])

  const handleAdd = async (e) => {
    e.preventDefault()
    const title = inputValue.trim()
    if (!title) return

    setError(null)
    setStatus('submitting')

    try {
      const created = await createTodo(title)
      setTodos((current) => [created, ...current])
      setInputValue('')
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to add todo')
      setStatus('error')
    }
  }

  const handleToggle = async (todo) => {
    setError(null)
    try {
      const updated = await updateTodo(todo)
      setTodos((current) =>
        current.map((item) => (item.id === updated.id ? updated : item))
      )
    } catch (err) {
      setError(err.message || 'Failed to update todo')
    }
  }

  const handleDelete = async (todoId) => {
    setError(null)
    try {
      await deleteTodo(todoId)
      setTodos((current) => current.filter((item) => item.id !== todoId))
    } catch (err) {
      setError(err.message || 'Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    setError(null)
    try {
      await clearCompletedTodos()
      setTodos((current) => current.filter((item) => {
        const fields = getSchemaData(item)
        return !fields.completed
      }))
    } catch (err) {
      setError(err.message || 'Failed to clear completed todos')
    }
  }

  const completedCount = todos.filter((t) => getSchemaData(t).completed).length
  const totalCount = todos.length
  const activeCount = totalCount - completedCount

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-5">
          <h1 className="text-2xl font-bold text-white">My Tasks</h1>
          <p className="text-indigo-100 text-sm mt-1">
            {activeCount} active, {completedCount} completed
          </p>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={handleAdd} className="p-4 border-b border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={status === 'submitting' || !inputValue.trim()}
              className="px-4 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
            >
              {status === 'submitting' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
              Add
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mx-4 mt-3 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
            <X className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Todo List */}
        <div className="max-h-[400px] overflow-y-auto">
          {status === 'loading' && todos.length === 0 ? (
            <div className="flex items-center justify-center py-12 text-gray-400">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              Loading tasks...
            </div>
          ) : todos.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg font-medium text-gray-500">No tasks yet</p>
              <p className="text-sm mt-1">Add your first task above</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {todos.map((todo) => {
                const fields = getSchemaData(todo)
                const isCompleted = fields.completed

                return (
                  <li
                    key={todo.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                  >
                    <button
                      onClick={() => handleToggle(todo)}
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 hover:border-indigo-400 text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>

                    <span
                      className={`flex-1 text-sm transition-all ${
                        isCompleted
                          ? 'text-gray-400 line-through'
                          : 'text-gray-800'
                      }`}
                    >
                      {fields.title}
                    </span>

                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      title="Delete task"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {totalCount > 0 && (
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              {activeCount} item{activeCount !== 1 ? 's' : ''} left
            </span>
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="text-xs text-gray-500 hover:text-red-600 hover:underline transition-colors"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
