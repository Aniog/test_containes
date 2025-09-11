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
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTodos([newTodo, ...todos])
    }
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed
      case 'completed':
        return todo.completed
      default:
        return true
    }
  })

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Todo App</h1>
          <p className="text-blue-100">Stay organized and get things done</p>
        </div>

        {/* Todo Form */}
        <div className="p-6 border-b border-gray-200">
          <TodoForm onAddTodo={addTodo} />
        </div>

        {/* Stats */}
        <TodoStats 
          totalCount={todos.length}
          activeCount={activeCount}
          completedCount={completedCount}
        />

        {/* Filter Buttons */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-center space-x-2">
            {['all', 'active', 'completed'].map(filterType => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === filterType
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Todo List */}
        <div className="min-h-[300px]">
          {filteredTodos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              {todos.length === 0 ? (
                <div>
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-lg">No todos yet. Add one above!</p>
                </div>
              ) : (
                <div>
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-lg">No {filter} todos</p>
                </div>
              )}
            </div>
          ) : (
            <TodoList 
              todos={filteredTodos}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          )}
        </div>

        {/* Clear Completed Button */}
        {completedCount > 0 && (
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <button
              onClick={clearCompleted}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Clear {completedCount} Completed Task{completedCount !== 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp