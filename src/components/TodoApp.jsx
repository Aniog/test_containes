import { useState } from 'react'
import { Plus, Trash2, Check, X } from 'lucide-react'

const TodoApp = () => {
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

  // Toggle todo completion status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Todo App
        </h1>
        
        {/* Add todo input */}
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
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus size={20} />
            Add
          </button>
        </div>

        {/* Stats */}
        {totalCount > 0 && (
          <div className="mb-4 text-sm text-gray-600 text-center">
            {completedCount} of {totalCount} tasks completed
          </div>
        )}

        {/* Todo list */}
        <div className="space-y-2">
          {todos.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              No todos yet. Add one above!
            </div>
          ) : (
            todos.map(todo => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-3 border rounded-lg transition-all ${
                  todo.completed 
                    ? 'bg-gray-50 border-gray-200' 
                    : 'bg-white border-gray-300 hover:border-gray-400'
                }`}
              >
                <button
                  onClick={() => toggleComplete(todo.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    todo.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-green-400'
                  }`}
                >
                  {todo.completed && <Check size={14} />}
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
                  className="flex-shrink-0 text-red-500 hover:text-red-700 p-1 rounded transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Clear completed button */}
        {completedCount > 0 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setTodos(todos.filter(todo => !todo.completed))}
              className="text-red-500 hover:text-red-700 text-sm transition-colors"
            >
              Clear completed ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp