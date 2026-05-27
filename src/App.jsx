import { useState, useEffect } from 'react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from './api/todos'

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
    } catch (error) {
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
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id)
      setTodos(todos.filter(t => t.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleClearCompleted = async () => {
    try {
      await deleteCompletedTodos()
      setTodos(todos.filter(t => !(t.data || {}).completed))
    } catch (error) {
      console.error(error)
    }
  }

  const completedCount = todos.filter(t => (t.data || {}).completed).length

  return (
    <div className="min-h-screen bg-white flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">todos</h1>

        <form onSubmit={handleAddTodo} className="mb-8">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full px-0 py-3 text-lg border-0 border-b border-gray-200 focus:outline-none focus:border-gray-400 placeholder:text-gray-400 bg-transparent"
            disabled={submitting}
          />
        </form>

        {loading ? (
          <div className="text-sm text-gray-400 py-8">Loading...</div>
        ) : todos.length === 0 ? (
          <div className="text-sm text-gray-400 py-8">No tasks yet</div>
        ) : (
          <ul className="space-y-px mb-8">
            {todos.map((todo) => {
              const fields = todo.data || {}
              return (
                <li
                  key={todo.id}
                  className="group flex items-center py-3 border-b border-gray-100"
                >
                  <button
                    onClick={() => handleToggleComplete(todo)}
                    className="mr-4 w-4 h-4 flex-shrink-0"
                  >
                    <div className={`w-4 h-4 rounded-full border transition-all ${
                      fields.completed
                        ? 'bg-gray-900 border-gray-900'
                        : 'border-gray-300 group-hover:border-gray-400'
                    }`}>
                      {fields.completed && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l4 4L19 6" />
                        </svg>
                      )}
                    </div>
                  </button>
                  <span className={`flex-1 text-[15px] transition-all ${fields.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                    {fields.title}
                  </span>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="ml-4 text-gray-300 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-all text-lg leading-none pb-1"
                  >
                    ×
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {completedCount > 0 && (
          <button
            onClick={handleClearCompleted}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Clear completed ({completedCount})
          </button>
        )}
      </div>
    </div>
  )
}

export default App
