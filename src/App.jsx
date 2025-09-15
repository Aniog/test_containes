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
    <div className="min-h-screen bg-purple-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
          Strikingly
        </h1>
        
        {/* Add Todo Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            onClick={addTodo}
            className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-2 mb-6">
          {todos.map(todo => (
            <div
              key={todo.id}
              className={`flex items-center gap-3 p-3 rounded-lg border ${
                todo.completed 
                  ? 'bg-purple-50 border-purple-200' 
                  : 'bg-white border-purple-300'
              }`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
              />
              <span
                className={`flex-1 ${
                  todo.completed 
                    ? 'text-purple-400 line-through' 
                    : 'text-purple-800'
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
          ))}
          
          {todos.length === 0 && (
            <div className="text-center py-8 text-purple-400">
              No todos yet. Add one above!
            </div>
          )}
        </div>

        {/* Stats and Actions */}
        {todos.length > 0 && (
          <div className="border-t border-purple-200 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-purple-600">
                {activeCount} active, {completedCount} completed
              </span>
              {completedCount > 0 && (
                <button
                  onClick={clearCompleted}
                  className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                >
                  Clear Completed
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
