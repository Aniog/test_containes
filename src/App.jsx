import { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from './api/todos'
import { Toaster, toast } from 'sonner'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      const data = await fetchTodos()
      setTodos(data)
    } catch (error) {
      toast.error('Failed to load todos')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    if (!newTodoTitle.trim()) return

    setSubmitting(true)
    try {
      const newTodo = await createTodo(newTodoTitle.trim())
      setTodos([newTodo, ...todos])
      setNewTodoTitle('')
      toast.success('Todo added successfully')
    } catch (error) {
      toast.error('Failed to add todo')
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleToggleComplete = async (todo) => {
    const fields = todo.data || {}
    try {
      const updated = await updateTodo(todo.id, {
        ...fields,
        completed: !fields.completed
      })
      setTodos(todos.map(t => t.id === todo.id ? updated : t))
      toast.success(fields.completed ? 'Marked as incomplete' : 'Marked as complete')
    } catch (error) {
      toast.error('Failed to update todo')
      console.error(error)
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id)
      setTodos(todos.filter(t => t.id !== id))
      toast.success('Todo deleted')
    } catch (error) {
      toast.error('Failed to delete todo')
      console.error(error)
    }
  }

  const handleClearCompleted = async () => {
    const completedCount = todos.filter(t => (t.data || {}).completed).length
    if (completedCount === 0) return

    try {
      await deleteCompletedTodos()
      setTodos(todos.filter(t => !(t.data || {}).completed))
      toast.success(`Cleared ${completedCount} completed todo${completedCount > 1 ? 's' : ''}`)
    } catch (error) {
      toast.error('Failed to clear completed todos')
      console.error(error)
    }
  }

  const completedCount = todos.filter(t => (t.data || {}).completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Todo</h1>
            <p className="text-gray-500">
              {activeCount} active, {completedCount} completed
            </p>
          </div>

          <form onSubmit={handleAddTodo} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                disabled={submitting}
              />
              <button
                type="submit"
                disabled={submitting || !newTodoTitle.trim()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          </form>

          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading...</div>
          ) : todos.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No todos yet. Add one above!
            </div>
          ) : (
            <>
              <ul className="space-y-2 mb-6">
                {todos.map((todo) => {
                  const fields = todo.data || {}
                  return (
                    <li
                      key={todo.id}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 group"
                    >
                      <button
                        onClick={() => handleToggleComplete(todo)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          fields.completed
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300 hover:border-gray-400'
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
                        onClick={() => handleDeleteTodo(todo.id)}
                        className="p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </li>
                  )
                })}
              </ul>

              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="w-full py-3 text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear {completedCount} completed task{completedCount > 1 ? 's' : ''}
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}

export default App
