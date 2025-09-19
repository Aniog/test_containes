import { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, CheckCircle2, Circle } from 'lucide-react'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

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

  // Add new todo item
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTodos([...todos, newTodo])
      setInputValue('')
      console.log('Added new todo:', newTodo)
    }
  }

  // Delete todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    console.log('Deleted todo with id:', id)
  }

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
    console.log('Toggled todo completion for id:', id)
  }

  // Clear all completed tasks
  const clearCompleted = () => {
    const completedCount = todos.filter(todo => todo.completed).length
    setTodos(todos.filter(todo => !todo.completed))
    console.log(`Cleared ${completedCount} completed tasks`)
  }

  // Handle Enter key press in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Todo Application
          </h1>
          <p className="text-indigo-100 text-center mt-2">
            Stay organized and get things done
          </p>
        </div>

        {/* Add Todo Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={addTodo}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 flex items-center gap-2 font-medium"
            >
              <Plus className="w-5 h-5" />
              Add
            </button>
          </div>
        </div>

        {/* Stats Section */}
        {totalCount > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>
                {totalCount} {totalCount === 1 ? 'task' : 'tasks'} total
              </span>
              <span>
                {completedCount} completed
              </span>
              {completedCount > 0 && (
                <button
                  onClick={clearCompleted}
                  className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                  Clear completed
                </button>
              )}
            </div>
          </div>
        )}

        {/* Todo List */}
        <div className="max-h-96 overflow-y-auto">
          {todos.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No tasks yet
              </h3>
              <p className="text-gray-500">
                Add your first task above to get started!
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`p-4 hover:bg-gray-50 transition-colors duration-150 ${
                    todo.completed ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        todo.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 hover:border-green-400'
                      }`}
                    >
                      {todo.completed && <Check className="w-4 h-4" />}
                    </button>
                    
                    <span
                      className={`flex-1 transition-all duration-200 ${
                        todo.completed
                          ? 'text-gray-500 line-through'
                          : 'text-gray-900'
                      }`}
                    >
                      {todo.text}
                    </span>
                    
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                      title="Delete task"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp