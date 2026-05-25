import { useState } from 'react'
import { Check, Trash2, Plus, X } from 'lucide-react'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    const text = inputValue.trim()
    if (!text) return
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ])
    setInputValue('')
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo()
  }

  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-5">
          <h1 className="text-2xl font-bold text-gray-900">Todo List</h1>
          <p className="text-sm text-gray-500 mt-1">
            {todos.length} item{todos.length !== 1 ? 's' : ''}
            {completedCount > 0 && ` · ${completedCount} completed`}
          </p>
        </div>

        {/* Add todo form */}
        <div className="px-6 pt-4 pb-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
            />
            <button
              onClick={addTodo}
              disabled={!inputValue.trim()}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>

        {/* Todo list */}
        <ul className="px-6 pb-4 space-y-1.5">
          {todos.length === 0 && (
            <li className="py-8 text-center text-gray-400 text-sm">
              No todos yet. Add one above!
            </li>
          )}
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 group transition-colors"
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  todo.completed
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
              >
                {todo.completed && <Check className="w-3 h-3" strokeWidth={3} />}
              </button>
              <span
                className={`flex-1 text-sm ${
                  todo.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-800'
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="opacity-0 group-hover:opacity-100 flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition-all"
                aria-label="Delete todo"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>

        {/* Footer with clear completed */}
        {completedCount > 0 && (
          <div className="border-t border-gray-200 px-6 py-3 flex justify-end">
            <button
              onClick={clearCompleted}
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear {completedCount} completed
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
