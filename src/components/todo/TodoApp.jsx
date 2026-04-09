import { useState, useEffect, useCallback } from 'react'
import { Trash2, ClipboardList, Loader2 } from 'lucide-react'
import TodoInput from './TodoInput.jsx'
import TodoItem from './TodoItem.jsx'
import TodoFilter from './TodoFilter.jsx'
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteCompletedTodos,
} from '../../api/todos.js'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    const data = await fetchTodos()
    setTodos(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (title) => {
    setActionLoading(true)
    setError(null)
    const newTodo = await createTodo(title)
    if (newTodo) setTodos((prev) => [...prev, newTodo])
    setActionLoading(false)
  }

  const handleToggle = async (todo) => {
    setActionLoading(true)
    setError(null)
    const updated = await updateTodo(todo.id, { completed: !todo.completed })
    if (updated) {
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    }
    setActionLoading(false)
  }

  const handleDelete = async (id) => {
    setActionLoading(true)
    setError(null)
    await deleteTodo(id)
    setTodos((prev) => prev.filter((t) => t.id !== id))
    setActionLoading(false)
  }

  const handleClearCompleted = async () => {
    const completedIds = todos.filter((t) => t.completed).map((t) => t.id)
    if (!completedIds.length) return
    setActionLoading(true)
    setError(null)
    await deleteCompletedTodos(completedIds)
    setTodos((prev) => prev.filter((t) => !t.completed))
    setActionLoading(false)
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  }

  const completedCount = counts.completed

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex items-start justify-center pt-12 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-violet-600 rounded-2xl shadow-lg mb-4">
            <ClipboardList className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          <p className="text-slate-500 text-sm mt-1">
            {counts.active === 0 && counts.all > 0
              ? 'All tasks completed!'
              : `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          {/* Input */}
          <div className="p-5 border-b border-slate-100">
            <TodoInput onAdd={handleAdd} disabled={actionLoading} />
          </div>

          {/* Filter */}
          <div className="px-5 pt-4 pb-3">
            <TodoFilter filter={filter} onChange={setFilter} counts={counts} />
          </div>

          {/* Error */}
          {error && (
            <div className="mx-5 mb-3 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* List */}
          <div className="px-5 pb-5 space-y-2 min-h-[120px]">
            {loading ? (
              <div className="flex items-center justify-center py-12 text-slate-400">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className="text-sm">Loading tasks...</span>
              </div>
            ) : filteredTodos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                <ClipboardList className="w-10 h-10 mb-3 opacity-30" />
                <p className="text-sm font-medium">
                  {filter === 'completed' ? 'No completed tasks yet' : filter === 'active' ? 'No active tasks' : 'No tasks yet — add one above!'}
                </p>
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                  disabled={actionLoading}
                />
              ))
            )}
          </div>

          {/* Footer */}
          {completedCount > 0 && (
            <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {completedCount} completed task{completedCount !== 1 ? 's' : ''}
              </span>
              <button
                onClick={handleClearCompleted}
                disabled={actionLoading}
                className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 font-medium transition disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear completed
              </button>
            </div>
          )}
        </div>

        {/* Action loading indicator */}
        {actionLoading && (
          <div className="mt-4 flex items-center justify-center gap-2 text-violet-500 text-xs">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Saving...
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp
