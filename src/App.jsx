import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

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

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Strikingly
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
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Add
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
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
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
                  className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Stats and actions */}
        {todos.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
              <span>{activeCount} active, {completedCount} completed</span>
              <span>{todos.length} total</span>
            </div>
            
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Clear Completed ({completedCount})
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
