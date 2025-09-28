import { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoStats from './TodoStats'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all') // all, active, completed

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add new todo
  const addTodo = (text) => {
    if (text.trim() === '') return
    
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    
    setTodos(prevTodos => [newTodo, ...prevTodos])
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true // 'all'
  })

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Todo Application
          </h1>
          <p className="text-blue-100 text-center mt-2">
            Stay organized and get things done
          </p>
        </div>

        {/* Todo Form */}
        <div className="p-6 border-b border-gray-200">
          <TodoForm onAddTodo={addTodo} />
        </div>

        {/* Stats and Filters */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <TodoStats
            totalCount={todos.length}
            activeCount={activeCount}
            completedCount={completedCount}
            filter={filter}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
          />
        </div>

        {/* Todo List */}
        <div className="min-h-[400px]">
          {todos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No todos yet</h3>
              <p className="text-gray-400">Add your first todo above to get started!</p>
            </div>
          ) : filteredTodos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No {filter} todos</h3>
              <p className="text-gray-400">
                {filter === 'active' && 'All your todos are completed! 🎉'}
                {filter === 'completed' && 'No completed todos yet.'}
              </p>
            </div>
          ) : (
            <TodoList
              todos={filteredTodos}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp