import { useState, useEffect } from 'react'
import TodoInput from './TodoInput'
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
            Strikingly
          </h1>
          <p className="text-blue-100 text-center mt-2">
            Stay organized and get things done
          </p>
        </div>

        {/* Todo Input */}
        <div className="p-6 border-b border-gray-200">
          <TodoInput onAddTodo={addTodo} />
        </div>

        {/* Filter Buttons */}
        {todos.length > 0 && (
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
        )}

        {/* Todo List */}
        <div className="min-h-[300px]">
          {todos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-medium mb-2">No todos yet</h3>
              <p className="text-gray-400">Add a task above to get started!</p>
            </div>
          ) : filteredTodos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <div className="text-6xl mb-4">
                {filter === 'completed' ? '✅' : '📋'}
              </div>
              <h3 className="text-xl font-medium mb-2">
                No {filter} tasks
              </h3>
              <p className="text-gray-400">
                {filter === 'completed' 
                  ? 'Complete some tasks to see them here!'
                  : 'All tasks are completed! Great job!'
                }
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

        {/* Stats and Actions */}
        {todos.length > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <TodoStats
              totalCount={todos.length}
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp