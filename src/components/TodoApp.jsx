
import { useState } from 'react'
import { Check, Trash2, Plus, ClipboardList } from 'lucide-react'

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed))
  }

  const activeCount = todos.filter((t) => !t.completed).length

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <ClipboardList className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Todo App</h1>
          </div>
          <p className="text-gray-500 text-sm">Stay organized and get things done</p>
        </div>

        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Add todo"
          >
            <Plus className="w-5 h-5" />
          </button>
        </form>

        {todos.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <ClipboardList className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400 text-sm">No todos yet. Add one above!</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      todo.completed
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300 hover:border-indigo-400'
                    }`}
                    aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {todo.completed && <Check className="w-3 h-3 text-white" />}
                  </button>
                  <span
                    className={`flex-1 text-sm ${
                      todo.completed
                        ? 'line-through text-gray-400'
                        : 'text-gray-700'
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
                    aria-label="Delete todo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-500">
                {activeCount} {activeCount === 1 ? 'item' : 'items'} left
              </span>
              {todos.some((t) => t.completed) && (
                <button
                  onClick={clearCompleted}
                  className="text-xs text-red-500 hover:text-red-600 transition-colors font-medium"
                >
                  Clear completed
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
