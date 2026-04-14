import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const FILTERS = ['All', 'Active', 'Completed']

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('All')

  const addTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ])
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

  const filteredTodos = todos.filter((t) => {
    if (filter === 'Active') return !t.completed
    if (filter === 'Completed') return t.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-lg">
        <h1 className="text-5xl font-bold text-center text-indigo-600 mb-8 tracking-tight drop-shadow-sm">
          My Todos
        </h1>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <TodoInput onAdd={addTodo} />

          {todos.length > 0 && (
            <div className="flex border-b border-gray-100">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                    filter === f
                      ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}

          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />

          {todos.length > 0 && (
            <TodoFooter
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          )}

          {todos.length === 0 && (
            <div className="py-16 text-center text-gray-400">
              <p className="text-4xl mb-3">✓</p>
              <p className="text-base font-medium">No tasks yet</p>
              <p className="text-sm mt-1">Add a task above to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
