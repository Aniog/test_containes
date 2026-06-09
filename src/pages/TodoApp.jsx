import { useState, useEffect } from 'react'
import { Plus, Trash2, Check, RotateCcw } from 'lucide-react'

const FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
}

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem('todos')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState(FILTERS.ALL)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    const text = inputValue.trim()
    if (!text) return
    setTodos((prev) => [
      { id: Date.now(), text, completed: false },
      ...prev,
    ])
    setInputValue('')
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo()
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.ACTIVE) return !todo.completed
    if (filter === FILTERS.COMPLETED) return todo.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-12 px-4 pb-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
            Todo App
          </h1>
          <p className="mt-2 text-gray-500 text-sm">
            Stay organized, get things done.
          </p>
        </div>

        {/* Input area */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent placeholder-gray-400"
          />
          <button
            onClick={addTodo}
            className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-1 mb-4 bg-gray-100 rounded-lg p-1">
          {Object.entries(FILTERS).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setFilter(value)}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                filter === value
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {key.charAt(0) + key.slice(1).toLowerCase()}
            </button>
          ))}
        </div>

        {/* Todo list */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {filteredTodos.length === 0 ? (
            <div className="py-16 text-center">
              <div className="text-gray-300 mb-3">
                <Check size={48} className="mx-auto" />
              </div>
              <p className="text-gray-400 text-lg">
                {todos.length === 0
                  ? 'No todos yet. Add one above!'
                  : filter === FILTERS.COMPLETED
                    ? 'No completed tasks'
                    : 'All tasks completed!'}
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {filteredTodos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 px-4 py-3 group hover:bg-gray-50 transition-colors"
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors cursor-pointer ${
                      todo.completed
                        ? 'bg-emerald-500 border-emerald-500 text-white'
                        : 'border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {todo.completed && <Check size={14} strokeWidth={3} />}
                  </button>
                  <span
                    className={`flex-1 text-base transition-colors ${
                      todo.completed
                        ? 'text-gray-400 line-through'
                        : 'text-gray-700'
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 p-1.5 rounded-md text-gray-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer stats */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <span>
            {activeCount} item{activeCount !== 1 ? 's' : ''} left
          </span>
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="flex items-center gap-1.5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
            >
              <RotateCcw size={14} />
              Clear completed ({completedCount})
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp
