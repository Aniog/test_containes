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
      const newTodo = await createTodo(newTodoTitle)
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
    try {
      const updated = await updateTodo(todo.id, {
        ...todo.data,
        completed: !todo.data.completed,
      })
      setTodos(todos.map(t => t.id === todo.id ? updated : t))
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
    const completedCount = todos.filter(t => t.data.completed).length
    if (completedCount === 0) return

    try {
      await deleteCompletedTodos()
      setTodos(todos.filter(t => !t.data.completed))
      toast.success(`Cleared ${completedCount} completed todo${completedCount > 1 ? 's' : ''}`)
    } catch (error) {
      toast.error('Failed to clear completed todos')
      console.error(error)
    }
  }

  const completedCount = todos.filter(t => t.data.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Todo</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <form onSubmit={handleAddTodo} className="flex border-b border-gray-200">
            <input
              type="text"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-4 text-lg outline-none placeholder:text-gray-400"
              disabled={submitting}
            />
            <button
              type="submit"
              disabled={!newTodoTitle.trim() || submitting}
              className="px-6 py-4 text-blue-600 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </form>

          {loading ? (
            <div className="p-12 text-center text-gray-500">Loading todos...</div>
          ) : todos.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-500 text-lg">No todos yet</p>
              <p className="text-gray-400 text-sm mt-1">Add your first task above</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 px-4 py-4 group hover:bg-gray-50 transition-colors"
                >
                  <button
                    onClick={() => handleToggleComplete(todo)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      todo.data.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {todo.data.completed && <Check className="w-4 h-4" />}
                  </button>
                  <span
                    className={`flex-1 text-lg ${
                      todo.data.completed ? 'text-gray-400 line-through' : 'text-gray-900'
                    }`}
                  >
                    {todo.data.title}
                  </span>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {todos.length > 0 && (
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-200 text-sm">
              <span className="text-gray-600">
                {activeCount} active, {completedCount} completed
              </span>
              <button
                onClick={handleClearCompleted}
                disabled={completedCount === 0}
                className="text-gray-600 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors"
              >
                <X className="w-4 h-4" />
                Clear completed
              </button>
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-center" richColors />
    </div>
  )
}

export default App
