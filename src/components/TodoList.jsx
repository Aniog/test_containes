import React, { useState, useEffect, useCallback } from 'react'
import { Trash2, Check, Circle, Plus } from 'lucide-react'
import { fetchTodos, createTodo, updateTodoCompleted, deleteTodo, clearCompletedTodos } from '../api/todos'

const getSchemaData = (entity) => entity?.data ?? {}

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    try {
      setError(null)
      const data = await fetchTodos()
      setTodos(data)
    } catch (err) {
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (e) => {
    e.preventDefault()
    const trimmed = newTitle.trim()
    if (!trimmed || submitting) return

    setSubmitting(true)
    try {
      const created = await createTodo(trimmed)
      setTodos((prev) => [created, ...prev])
      setNewTitle('')
    } catch (err) {
      setError(err.message || 'Failed to add todo')
    } finally {
      setSubmitting(false)
    }
  }

  const handleToggle = async (item) => {
    const completed = !getSchemaData(item).completed
    // Optimistic update
    setTodos((prev) =>
      prev.map((t) =>
        t.id === item.id
          ? { ...t, data: { ...t.data, completed } }
          : t
      )
    )
    try {
      await updateTodoCompleted(item, completed)
    } catch (err) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === item.id
            ? { ...t, data: { ...t.data, completed: !completed } }
            : t
        )
      )
      setError(err.message || 'Failed to update todo')
    }
  }

  const handleDelete = async (itemId) => {
    const previous = todos
    setTodos((prev) => prev.filter((t) => t.id !== itemId))
    try {
      await deleteTodo(itemId)
    } catch (err) {
      setTodos(previous)
      setError(err.message || 'Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    const completedIds = todos
      .filter((t) => getSchemaData(t).completed)
      .map((t) => t.id)
    if (completedIds.length === 0) return

    setTodos((prev) => prev.filter((t) => !getSchemaData(t).completed))
    try {
      await clearCompletedTodos()
    } catch (err) {
      await loadTodos()
      setError(err.message || 'Failed to clear completed')
    }
  }

  const activeCount = todos.filter((t) => !getSchemaData(t).completed).length
  const completedCount = todos.filter((t) => getSchemaData(t).completed).length

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Todo List
      </h1>

      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          maxLength={200}
          disabled={submitting}
        />
        <button
          type="submit"
          disabled={submitting || !newTitle.trim()}
          className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm flex items-center gap-1.5 font-medium"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </form>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center text-gray-400 py-12">Loading...</div>
      ) : todos.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          No todos yet. Add one above!
        </div>
      ) : (
        <>
          <ul className="space-y-2 mb-4">
            {todos.map((item) => {
              const data = getSchemaData(item)
              return (
                <li
                  key={item.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                    data.completed
                      ? 'bg-gray-50 border-gray-100'
                      : 'bg-white border-gray-200 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => handleToggle(item)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      data.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400 text-transparent hover:text-green-400'
                    }`}
                    title={data.completed ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {data.completed ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <Circle className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <span
                    className={`flex-1 text-gray-800 ${
                      data.completed ? 'line-through text-gray-400' : ''
                    }`}
                  >
                    {data.title}
                  </span>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex-shrink-0 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center justify-between text-sm text-gray-500 px-1">
            <span>
              {activeCount} item{activeCount !== 1 ? 's' : ''} left
            </span>
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="text-gray-500 hover:text-red-600 transition-colors font-medium"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
