import { useState, useMemo } from 'react'
import TodoInput from './components/todo/TodoInput'
import TodoItem from './components/todo/TodoItem'
import TodoFilter from './components/todo/TodoFilter'
import './App.css'

let nextId = 1

function App() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', completed: false },
    { id: nextId++, text: 'Read a book', completed: true },
    { id: nextId++, text: 'Go for a walk', completed: false },
  ])
  const [filter, setFilter] = useState('All')

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: nextId++, text, completed: false }])
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

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter((t) => !t.completed)
    if (filter === 'Completed') return todos.filter((t) => t.completed)
    return todos
  }, [todos, filter])

  const completedCount = todos.filter((t) => t.completed).length
  const activeCount = todos.filter((t) => !t.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-start justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            My <span className="text-indigo-500">Todos</span>
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
            {activeCount === 0
              ? 'All tasks done!'
              : `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 flex flex-col gap-5">
          {/* Input */}
          <TodoInput onAdd={addTodo} />

          {/* Filter + Clear */}
          <TodoFilter
            current={filter}
            onChange={setFilter}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />

          {/* List */}
          <div className="flex flex-col gap-2 min-h-[60px]">
            {filteredTodos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-gray-400 dark:text-gray-500">
                <svg className="w-12 h-12 mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="text-sm font-medium">No tasks here</p>
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>

          {/* Footer count */}
          {todos.length > 0 && (
            <p className="text-xs text-center text-gray-400 dark:text-gray-500 pt-1 border-t border-gray-100 dark:border-gray-700">
              {todos.length} total &middot; {completedCount} completed &middot; {activeCount} active
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
