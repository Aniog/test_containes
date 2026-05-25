import { useState, useEffect, useCallback } from 'react'
import { Plus, Trash2, Check, X } from 'lucide-react'
import './App.css'

const STORAGE_KEY = 'todo-app-tasks'

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

function App() {
  const [todos, setTodos] = useState(loadTodos)
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const handleAdd = (e) => {
    e.preventDefault()
    const trimmed = newTitle.trim()
    if (!trimmed) return

    setTodos((current) => [
      {
        id: Date.now(),
        title: trimmed,
        completed: false,
        created_at: new Date().toISOString(),
      },
      ...current,
    ])
    setNewTitle('')
  }

  const handleToggle = (todoId) => {
    setTodos((current) =>
      current.map((t) =>
        t.id === todoId ? { ...t, completed: !t.completed } : t
      )
    )
  }

  const handleDelete = (todoId) => {
    setTodos((current) => current.filter((t) => t.id !== todoId))
  }

  const handleClearCompleted = () => {
    setTodos((current) => current.filter((t) => !t.completed))
  }

  const completedCount = todos.filter((t) => t.completed).length
  const activeCount = todos.length - completedCount

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Todo List
        </h1>

        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            type="submit"
            disabled={!newTitle.trim()}
            className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </form>

        {todos.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
            <p className="text-gray-400 text-lg">No tasks yet. Add one above!</p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-4">
              <ul className="divide-y divide-gray-100">
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                  >
                    <button
                      onClick={() => handleToggle(todo.id)}
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        todo.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 hover:border-green-400'
                      }`}
                    >
                      {todo.completed && <Check className="w-3 h-3" />}
                    </button>
                    <span
                      className={`flex-1 text-sm ${
                        todo.completed
                          ? 'line-through text-gray-400'
                          : 'text-gray-800'
                      }`}
                    >
                      {todo.title}
                    </span>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 px-1">
              <span>
                {activeCount} item{activeCount !== 1 ? 's' : ''} remaining
              </span>
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="text-red-500 hover:text-red-600 font-medium transition-colors"
                >
                  Clear completed ({completedCount})
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default App
