import { useState } from 'react'
import { Trash2, Plus, Check, X } from 'lucide-react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // Add new todo item
  const addTodo = () => {
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

  // Delete todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Clear all completed tasks
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo App
        </h1>

        {/* Add new todo */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Todo list */}
        <div className="space-y-2 mb-6">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No todos yet. Add one above!
            </p>
          ) : (
            todos.map(todo => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  todo.completed
                    ? 'bg-gray-50 border-gray-200'
                    : 'bg-white border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    todo.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-green-500'
                  }`}
                >
                  {todo.completed && <Check className="w-4 h-4" />}
                </button>
                
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? 'text-gray-500 line-through'
                      : 'text-gray-800'
                  }`}
                >
                  {todo.text}
                </span>
                
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="flex-shrink-0 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer with stats and clear completed */}
        {todos.length > 0 && (
          <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
            <span>
              {activeCount} active, {completedCount} completed
            </span>
            
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="px-3 py-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
              >
                Clear completed
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
