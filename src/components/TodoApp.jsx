import { useState, useMemo } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const FILTERS = ['All', 'Active', 'Completed']

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Read a book', completed: true },
    { id: 3, text: 'Go for a walk', completed: false },
  ])
  const [filter, setFilter] = useState('All')

  const addTodo = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false },
    ])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed))
  }

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter((t) => !t.completed)
    if (filter === 'Completed') return todos.filter((t) => t.completed)
    return todos
  }, [todos, filter])

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-start justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold tracking-widest text-indigo-600 uppercase drop-shadow-sm">
            Todo
          </h1>
          <p className="text-gray-500 mt-1 text-sm">Stay organised, stay productive</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
          <TodoFooter
            activeCount={activeCount}
            completedCount={completedCount}
            filter={filter}
            filters={FILTERS}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
          />
        </div>

        {todos.length === 0 && (
          <p className="text-center text-gray-400 mt-6 text-sm">
            No todos yet — add one above!
          </p>
        )}
      </div>
    </div>
  )
}
