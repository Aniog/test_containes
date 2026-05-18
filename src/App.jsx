import { useState, useCallback } from 'react'
import TodoHeader from './components/todo/TodoHeader'
import TodoInput from './components/todo/TodoInput'
import TodoFilter from './components/todo/TodoFilter'
import TodoList from './components/todo/TodoList'
import TodoFooter from './components/todo/TodoFooter'

let nextId = 1

function App() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', completed: false },
    { id: nextId++, text: 'Read a book', completed: true },
    { id: nextId++, text: 'Go for a walk', completed: false },
  ])
  const [filter, setFilter] = useState('all') // 'all' | 'active' | 'completed'

  const addTodo = useCallback((text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [...prev, { id: nextId++, text: trimmed, completed: false }])
  }, [])

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }, [])

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed))
  }, [])

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-10">
      <div className="max-w-xl mx-auto flex flex-col gap-6">
        <TodoHeader />
        <TodoInput onAdd={addTodo} />
        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <TodoFilter
            filter={filter}
            onFilterChange={setFilter}
            counts={{ active: activeCount, completed: completedCount, total: todos.length }}
          />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            filter={filter}
          />
          <TodoFooter
            activeCount={activeCount}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />
        </div>
      </div>
    </div>
  )
}

export default App
