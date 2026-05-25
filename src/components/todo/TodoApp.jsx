

import { useState, useCallback } from 'react'
import { ClipboardList, Trash2 } from 'lucide-react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

let nextId = 1

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const addTodo = useCallback((text) => {
    setTodos((prev) => [
      ...prev,
      { id: nextId++, text, completed: false },
    ])
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }, [])

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [])

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }, [])

  const completedCount = todos.filter((t) => t.completed).length
  const activeCount = todos.filter((t) => !t.completed).length
  const totalCount = todos.length

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-2xl mx-auto px-4 py-10 sm:py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ClipboardList className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Todo App
            </h1>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            Stay organized, get things done
          </p>
        </div>

        {/* Input */}
        <div className="mb-6">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* Filter & Stats Bar */}
        {totalCount > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1">
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    filter === f.key
                      ? 'bg-white text-indigo-700 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              {activeCount} {activeCount === 1 ? 'item' : 'items'} left
            </div>
          </div>
        )}

        {/* Todo List */}
        {filteredTodos.length > 0 ? (
          <ul className="space-y-2">
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-300 mb-3">
              <ClipboardList className="w-12 h-12 mx-auto" />
            </div>
            <p className="text-gray-400 text-lg">
              {totalCount === 0
                ? 'No todos yet. Add one above!'
                : filter === 'active'
                ? 'No active todos. Great job!'
                : 'No completed todos yet.'}
            </p>
          </div>
        )}

        {/* Clear Completed Button */}
        {completedCount > 0 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={clearCompleted}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Clear {completedCount} completed {completedCount === 1 ? 'item' : 'items'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

