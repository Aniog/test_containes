import { useState } from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all') // all, active, completed

  // Add new todo
  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTodos([...todos, newTodo])
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
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeTodosCount = todos.filter(todo => !todo.completed).length
  const completedTodosCount = todos.filter(todo => todo.completed).length

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Todo App</h1>
          <p className="text-blue-100">Stay organized and get things done</p>
        </div>

        {/* Add Todo Form */}
        <div className="p-6 border-b border-gray-200">
          <AddTodo onAdd={addTodo} />
        </div>

        {/* Stats */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{activeTodosCount} active tasks</span>
            <span>{completedTodosCount} completed tasks</span>
            <span>{todos.length} total tasks</span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex space-x-2">
            {['all', 'active', 'completed'].map(filterType => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === filterType
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Todo List */}
        <div className="max-h-96 overflow-y-auto">
          {filteredTodos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              {filter === 'all' && todos.length === 0 && (
                <div>
                  <div className="text-4xl mb-4">📝</div>
                  <p>No todos yet. Add one above to get started!</p>
                </div>
              )}
              {filter === 'active' && activeTodosCount === 0 && (
                <div>
                  <div className="text-4xl mb-4">✅</div>
                  <p>No active tasks. Great job!</p>
                </div>
              )}
              {filter === 'completed' && completedTodosCount === 0 && (
                <div>
                  <div className="text-4xl mb-4">⏳</div>
                  <p>No completed tasks yet.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {completedTodosCount > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <button
              onClick={clearCompleted}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Clear {completedTodosCount} Completed Task{completedTodosCount !== 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp