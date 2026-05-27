import { useState, useEffect } from 'react'
import { DataClient } from '@strikingly/sdk'
import { Plus, Trash2, Check, X } from 'lucide-react'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './config.jsx'
import { Toaster, toast } from 'sonner'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

function App() {
  const [todos, setTodos] = useState([])
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  const fetchTodos = async () => {
    try {
      const { data: response, error } = await client
        .from('Todo')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setTodos(getRows(response))
    } catch (err) {
      console.error('Failed to fetch todos:', err)
      toast.error('Failed to load todos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const addTodo = async (e) => {
    e.preventDefault()
    if (!newTodoTitle.trim()) return

    setSubmitting(true)
    try {
      const { data: response, error } = await client
        .from('Todo')
        .insert({
          data: {
            title: newTodoTitle.trim(),
            completed: false,
            created_at: new Date().toISOString()
          }
        })
        .select()
        .single()

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error))
      }

      const createdTodo = response?.data
      if (createdTodo) {
        setTodos((current) => [createdTodo, ...current])
      }
      setNewTodoTitle('')
      toast.success('Todo added successfully')
    } catch (err) {
      console.error('Failed to add todo:', err)
      toast.error(err.message || 'Failed to add todo')
    } finally {
      setSubmitting(false)
    }
  }

  const toggleComplete = async (todo) => {
    const fields = todo.data || {}
    try {
      const { data: response, error } = await client
        .from('Todo')
        .update({
          data: {
            ...fields,
            completed: !fields.completed
          }
        })
        .eq('id', todo.id)
        .select()
        .single()

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error))
      }

      const updatedTodo = response?.data
      if (updatedTodo) {
        setTodos((current) =>
          current.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
        )
      }
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      toast.error('Failed to update todo')
    }
  }

  const deleteTodo = async (todoId) => {
    try {
      const { data: response, error } = await client
        .from('Todo')
        .delete()
        .eq('id', todoId)
        .select()
        .maybeSingle()

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error))
      }

      setTodos((current) => current.filter((t) => t.id !== todoId))
      toast.success('Todo deleted')
    } catch (err) {
      console.error('Failed to delete todo:', err)
      toast.error('Failed to delete todo')
    }
  }

  const clearCompleted = async () => {
    const completedTodos = todos.filter((t) => (t.data || {}).completed)
    if (completedTodos.length === 0) return

    try {
      for (const todo of completedTodos) {
        await client.from('Todo').delete().eq('id', todo.id)
      }
      setTodos((current) => current.filter((t) => !(t.data || {}).completed))
      toast.success(`Cleared ${completedTodos.length} completed todo(s)`)
    } catch (err) {
      console.error('Failed to clear completed:', err)
      toast.error('Failed to clear completed todos')
    }
  }

  const completedCount = todos.filter((t) => (t.data || {}).completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Todo</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <form onSubmit={addTodo} className="p-4 border-b border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={submitting}
              />
              <button
                type="submit"
                disabled={!newTodoTitle.trim() || submitting}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add
              </button>
            </div>
          </form>

          {loading ? (
            <div className="p-12 text-center text-gray-500">Loading todos...</div>
          ) : todos.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-500">No todos yet. Add one above!</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {todos.map((todo) => {
                const fields = todo.data || {}
                return (
                  <li
                    key={todo.id}
                    className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 group"
                  >
                    <button
                      onClick={() => toggleComplete(todo)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        fields.completed
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300 hover:border-blue-500'
                      }`}
                    >
                      {fields.completed && <Check className="w-4 h-4 text-white" />}
                    </button>
                    <span
                      className={`flex-1 text-gray-900 ${
                        fields.completed ? 'line-through text-gray-400' : ''
                      }`}
                    >
                      {fields.title}
                    </span>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                )
              })}
            </ul>
          )}

          {todos.length > 0 && (
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {activeCount} active, {completedCount} completed
              </span>
              {completedCount > 0 && (
                <button
                  onClick={clearCompleted}
                  className="text-red-600 hover:text-red-700 flex items-center gap-1.5 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear completed
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-center" richColors />
    </div>
  )
}

export default App
