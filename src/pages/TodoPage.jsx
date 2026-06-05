import { useState, useEffect, useCallback } from 'react'
import { Loader2, CheckCheck } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import TodoInput from '@/components/todo/TodoInput'
import TodoItem from '@/components/todo/TodoItem'
import TodoFilter from '@/components/todo/TodoFilter'
import TodoEmpty from '@/components/todo/TodoEmpty'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchTodos()
      console.log('Loaded todos:', rows)
      setTodos(rows)
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

  const handleAdd = async (title) => {
    setSubmitting(true)
    setError(null)
    try {
      const newTodo = await createTodo(title)
      console.log('Created todo:', newTodo)
      setTodos((prev) => [newTodo, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError('Failed to add task. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleToggle = async (todo) => {
    const fields = todo?.data ?? {}
    const optimisticTodo = {
      ...todo,
      data: { ...fields, completed: !fields.completed },
    }
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? optimisticTodo : t)))

    try {
      const updated = await updateTodo(todo.id, {
        ...fields,
        completed: !fields.completed,
      })
      console.log('Updated todo:', updated)
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)))
      setError('Failed to update task.')
    }
  }

  const handleDelete = async (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
      console.log('Deleted todo id:', id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError('Failed to delete task.')
      await loadTodos()
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t?.data?.completed)
    if (completed.length === 0) return

    setTodos((prev) => prev.filter((t) => !t?.data?.completed))
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
      console.log('Cleared', completed.length, 'completed todos')
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError('Failed to clear completed tasks.')
      await loadTodos()
    }
  }

  const allCount = todos.length
  const activeCount = todos.filter((t) => !t?.data?.completed).length
  const completedCount = todos.filter((t) => t?.data?.completed).length

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t?.data?.completed
    if (filter === 'completed') return t?.data?.completed
    return true
  })

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center pt-12 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-2xl mb-4 shadow-lg">
            <CheckCheck className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">My Tasks</h1>
          <p className="text-slate-500 mt-1 text-sm">
            {activeCount === 0 && allCount > 0
              ? 'All tasks completed!'
              : `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Input area */}
          <div className="p-5 border-b border-slate-100">
            <TodoInput onAdd={handleAdd} disabled={submitting} />
          </div>

          {/* Filter tabs */}
          <div className="px-5 pt-4">
            <TodoFilter
              filter={filter}
              onChange={setFilter}
              counts={{ all: allCount, active: activeCount, completed: completedCount }}
            />
          </div>

          {/* Error banner */}
          {error && (
            <div className="mx-5 mt-3 px-4 py-2.5 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Todo list */}
          <div className="p-5 space-y-2 min-h-[200px]">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
                <span className="ml-2 text-slate-400 text-sm">Loading tasks...</span>
              </div>
            ) : filteredTodos.length === 0 ? (
              <TodoEmpty filter={filter} />
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))
            )}
          </div>

          {/* Footer */}
          {completedCount > 0 && (
            <div className="px-5 pb-5">
              <button
                onClick={handleClearCompleted}
                className="w-full text-sm text-slate-400 hover:text-red-500 border border-slate-200 hover:border-red-300 rounded-lg py-2 transition-colors"
              >
                Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Click the circle to complete · Hover to delete
        </p>
      </div>
    </div>
  )
}

export default TodoPage
