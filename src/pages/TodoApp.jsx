import { useState, useEffect, useCallback } from 'react'
import TodoInput from '../components/todo/TodoInput.jsx'
import TodoList from '../components/todo/TodoList.jsx'
import TodoFooter from '../components/todo/TodoFooter.jsx'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '../api/todos.js'
import { CheckSquare, Loader2 } from 'lucide-react'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    console.log('[TodoApp] loading todos')
    setLoading(true)
    setError(null)
    const data = await fetchTodos()
    setTodos(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (text) => {
    console.log('[TodoApp] handleAdd', text)
    setActionLoading(true)
    setError(null)
    const newTodo = await createTodo(text)
    setTodos((prev) => [...prev, newTodo])
    setActionLoading(false)
  }

  const handleToggle = async (todo) => {
    console.log('[TodoApp] handleToggle', todo.id, !todo.completed)
    setActionLoading(true)
    setError(null)
    const updated = await updateTodo(todo.id, { completed: !todo.completed })
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)))
    setActionLoading(false)
  }

  const handleDelete = async (id) => {
    console.log('[TodoApp] handleDelete', id)
    setActionLoading(true)
    setError(null)
    await deleteTodo(id)
    setTodos((prev) => prev.filter((t) => t.id !== id))
    setActionLoading(false)
  }

  const handleClearCompleted = async () => {
    const completedIds = todos.filter((t) => t.completed).map((t) => t.id)
    if (completedIds.length === 0) return
    console.log('[TodoApp] handleClearCompleted', completedIds)
    setActionLoading(true)
    setError(null)
    await deleteCompletedTodos(completedIds)
    setTodos((prev) => prev.filter((t) => !t.completed))
    setActionLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-md">
            <CheckSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">My Tasks</h1>
            <p className="text-sm text-slate-400">Stay organized, get things done</p>
          </div>
          {actionLoading && (
            <Loader2 className="w-4 h-4 text-indigo-400 animate-spin ml-auto" />
          )}
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-6">
          <TodoInput onAdd={handleAdd} loading={actionLoading} />

          {error && (
            <div className="mb-4 px-4 py-2.5 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-14 text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              <span className="text-sm">Loading tasks...</span>
            </div>
          ) : (
            <>
              <TodoList
                todos={todos}
                filter={filter}
                onToggle={handleToggle}
                onDelete={handleDelete}
                disabled={actionLoading}
              />
              {todos.length > 0 && (
                <TodoFooter
                  todos={todos}
                  filter={filter}
                  onFilterChange={setFilter}
                  onClearCompleted={handleClearCompleted}
                />
              )}
            </>
          )}
        </div>

        <p className="text-center text-xs text-slate-300 mt-6">
          Tasks are saved automatically
        </p>
      </div>
    </div>
  )
}

export default TodoApp
