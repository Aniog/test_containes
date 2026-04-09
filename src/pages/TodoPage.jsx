import { useState, useEffect, useCallback } from 'react'
import { Trash2, CheckCheck } from 'lucide-react'
import TodoInput from '@/components/todo/TodoInput'
import TodoList from '@/components/todo/TodoList'
import TodoFilter from '@/components/todo/TodoFilter'
import { fetchTodos, createTodo, deleteTodo, deleteCompletedTodos } from '@/api/todos'
import { DataClient, Utils } from '@strikingly/sdk'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchTodos()
      console.log('Loaded todos:', data)
      setTodos(data)
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError('Failed to load tasks. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (text) => {
    try {
      setActionLoading(true)
      setError(null)
      const newTodo = await createTodo(text)
      console.log('Created todo:', newTodo)
      setTodos((prev) => [...prev, newTodo])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError('Failed to add task. Please try again.')
    } finally {
      setActionLoading(false)
    }
  }

  const handleToggle = async (todo) => {
    const updatedCompleted = !todo.completed
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, completed: updatedCompleted } : t))
    )
    try {
      const projectUrl = Utils.getCookieItem('__strk_project_url')
      const projectAnonKey = Utils.getCookieItem('__strk_project_anon_key')
      const client = new DataClient(projectUrl, projectAnonKey)
      const { error } = await client
        .from('todoItems')
        .update([{ id: todo.id, data: { completed: updatedCompleted } }], [{ id: todo.id, data: { text: todo.text, completed: todo.completed } }])
        .eq('id', todo.id)
      if (error) throw error
      console.log('Toggled todo:', todo.id, 'completed:', updatedCompleted)
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setTodos((prev) =>
        prev.map((t) => (t.id === todo.id ? { ...t, completed: todo.completed } : t))
      )
      setError('Failed to update task. Please try again.')
    }
  }

  const handleDelete = async (id) => {
    const previous = todos
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
      console.log('Deleted todo:', id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setTodos(previous)
      setError('Failed to delete task. Please try again.')
    }
  }

  const handleClearCompleted = async () => {
    const completedIds = todos.filter((t) => t.completed).map((t) => t.id)
    if (completedIds.length === 0) return
    const previous = todos
    setTodos((prev) => prev.filter((t) => !t.completed))
    try {
      await deleteCompletedTodos(completedIds)
      console.log('Cleared completed todos:', completedIds)
    } catch (err) {
      console.error('Failed to clear completed todos:', err)
      setTodos(previous)
      setError('Failed to clear completed tasks. Please try again.')
    }
  }

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-600 shadow-lg shadow-violet-200 dark:shadow-violet-900/30 mb-4">
            <CheckCheck className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            My Tasks
          </h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm">
            {counts.active === 0 && counts.all > 0
              ? 'All tasks completed!'
              : counts.active > 0
              ? `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`
              : 'Start by adding a task below'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/60 dark:shadow-slate-950/60 border border-slate-100 dark:border-slate-800 overflow-hidden">
          {/* Input */}
          <div className="p-5 border-b border-slate-100 dark:border-slate-800">
            <TodoInput onAdd={handleAdd} disabled={actionLoading} />
          </div>

          {/* Filter */}
          <div className="px-5 pt-4">
            <TodoFilter filter={filter} onChange={setFilter} counts={counts} />
          </div>

          {/* Error */}
          {error && (
            <div className="mx-5 mt-3 px-4 py-2.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* List */}
          <div className="p-5">
            <TodoList
              todos={todos}
              filter={filter}
              onToggle={handleToggle}
              onDelete={handleDelete}
              loading={loading}
            />
          </div>

          {/* Footer */}
          {counts.completed > 0 && (
            <div className="px-5 pb-5">
              <button
                onClick={handleClearCompleted}
                disabled={actionLoading}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:border-red-300 hover:text-red-500 dark:hover:border-red-700 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-50"
              >
                <Trash2 className="w-4 h-4" />
                Clear {counts.completed} completed task{counts.completed !== 1 ? 's' : ''}
              </button>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-600">
          Click the circle to complete · Hover to delete
        </p>
      </div>
    </div>
  )
}

export default TodoPage
