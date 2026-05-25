import React, { useState, useEffect, useCallback } from 'react'
import { ListTodo, Loader2, AlertCircle, Trash2 } from 'lucide-react'
import { Button } from './ui/button'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import {
  fetchTodos,
  createTodo,
  toggleTodoComplete,
  deleteTodo,
  clearCompletedTodos,
} from '../api/todos'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)

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

  const handleAdd = async (title) => {
    setError(null)
    setStatus('submitting')
    try {
      const created = await createTodo(title)
      setTodos((current) => [created, ...current])
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to add todo')
      setStatus('error')
    }
  }

  const handleToggle = async (todo) => {
    setError(null)
    try {
      const updated = await toggleTodoComplete(todo)
      setTodos((current) =>
        current.map((t) => (t.id === updated.id ? updated : t))
      )
    } catch (err) {
      setError(err.message || 'Failed to update todo')
    }
  }

  const handleDelete = async (todoId) => {
    setError(null)
    try {
      await deleteTodo(todoId)
      setTodos((current) => current.filter((t) => t.id !== todoId))
    } catch (err) {
      setError(err.message || 'Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    const completedIds = todos
      .filter((t) => t.data?.completed)
      .map((t) => t.id)

    if (completedIds.length === 0) return

    setError(null)
    setStatus('submitting')
    try {
      await clearCompletedTodos(completedIds)
      setTodos((current) => current.filter((t) => !t.data?.completed))
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to clear completed todos')
      setStatus('error')
    }
  }

  const totalCount = todos.length
  const completedCount = todos.filter((t) => t.data?.completed).length
  const activeCount = totalCount - completedCount

  const isBusy = status === 'loading' || status === 'submitting'

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-slate-900 text-white">
          <ListTodo className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Todo List</h1>
          <p className="text-sm text-slate-500">
            {totalCount === 0
              ? 'No tasks yet'
              : `${activeCount} active · ${completedCount} completed`}
          </p>
        </div>
      </div>

      {/* Add Todo */}
      <div className="mb-4">
        <AddTodo onAdd={handleAdd} disabled={isBusy} />
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Loading */}
      {status === 'loading' && (
        <div className="flex items-center justify-center py-12 text-slate-400">
          <Loader2 className="w-6 h-6 animate-spin mr-2" />
          <span className="text-sm">Loading tasks...</span>
        </div>
      )}

      {/* Todo List */}
      {status !== 'loading' && (
        <>
          {todos.length === 0 ? (
            <div className="text-center py-12 rounded-lg border border-dashed border-slate-300 bg-slate-50">
              <ListTodo className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 text-sm">No tasks yet. Add one above!</p>
            </div>
          ) : (
            <ul className="space-y-2">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                  disabled={isBusy}
                />
              ))}
            </ul>
          )}

          {/* Footer Actions */}
          {completedCount > 0 && (
            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={handleClearCompleted}
                disabled={isBusy}
                className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
              >
                <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                Clear completed ({completedCount})
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
