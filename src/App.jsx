import { useState, useCallback } from 'react'
import TodoHeader from './components/todo/TodoHeader'
import TodoInput from './components/todo/TodoInput'
import TodoFilter from './components/todo/TodoFilter'
import TodoList from './components/todo/TodoList'
import TodoFooter from './components/todo/TodoFooter'

let nextId = 1

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const addTodo = useCallback((text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [
      { id: nextId++, text: trimmed, completed: false },
      ...prev,
    ])
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }, [])

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
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
    <div className="min-h-screen bg-slate-900 flex flex-col items-center px-4 py-10 md:py-16">
      <div className="w-full max-w-xl">
        <TodoHeader />
        <div className="bg-slate-800 rounded-2xl shadow-xl p-6 mt-6 flex flex-col gap-4">
          <TodoInput onAdd={addTodo} />
          {todos.length > 0 && (
            <TodoFilter filter={filter} onFilterChange={setFilter} />
          )}
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            filter={filter}
          />
          {todos.length > 0 && (
            <TodoFooter
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
