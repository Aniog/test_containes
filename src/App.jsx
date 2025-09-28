import { useState } from 'react'
import { Trash2, Plus, CheckCircle2, Circle, X } from 'lucide-react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // Add new todo
  const addTodo = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle completion
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Clear all completed tasks
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Strikingly</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              Add
            </button>
          </div>
        </form>

        {/* Stats */}
        {todos.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{activeCount} active task{activeCount !== 1 ? 's' : ''}</span>
              <span>{completedCount} completed task{completedCount !== 1 ? 's' : ''}</span>
            </div>
          </div>
        )}

        {/* Todo List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {todos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Circle size={48} className="mx-auto mb-4 text-gray-300" />
              <p>No todos yet. Add one above to get started!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors ${
                    todo.completed ? 'opacity-60' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className="flex-shrink-0 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    {todo.completed ? (
                      <CheckCircle2 size={24} className="text-green-500" />
                    ) : (
                      <Circle size={24} />
                    )}
                  </button>
                  
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? 'line-through text-gray-500'
                        : 'text-gray-800'
                    }`}
                  >
                    {todo.text}
                  </span>
                  
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 text-red-500 hover:text-red-600 transition-colors p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Clear Completed Button */}
        {completedCount > 0 && (
          <div className="mt-4 text-center">
            <button
              onClick={clearCompleted}
              className="px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2 mx-auto"
            >
              <X size={16} />
              Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
