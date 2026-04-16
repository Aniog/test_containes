import { useState, useCallback } from 'react'
import TodoInput from './TodoInput'
import TodoFilter from './TodoFilter'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const FILTERS = ['all', 'active', 'completed']

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Read a book', completed: true },
    { id: 3, text: 'Go for a walk', completed: false },
  ])
  const [filter, setFilter] = useState('all')
  const [nextId, setNextId] = useState(4)

  const addTodo = useCallback((text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [...prev, { id: nextId, text: trimmed, completed: false }])
    setNextId((id) => id + 1)
    console.log('Added todo:', trimmed)
  }, [nextId])

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    console.log('Deleted todo id:', id)
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
    console.log('Toggled todo id:', id)
  }, [])

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed))
    console.log('Cleared all completed todos')
  }, [])

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-indigo-600 drop-shadow-sm">
          My Todos
        </h1>
        <p className="mt-2 text-gray-500 text-sm">Stay organized, stay productive</p>
      </div>

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
        <TodoInput onAdd={addTodo} />
        <TodoFilter filter={filter} filters={FILTERS} onFilter={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        <TodoFooter
          activeCount={activeCount}
          completedCount={completedCount}
          filter={filter}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  )
}
