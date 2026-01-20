import React, { useState } from 'react'
import { Plus, Check, X, Circle, CheckCircle2, Trash2 } from 'lucide-react'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')
  const [filter, setFilter] = useState('all') // all, active, completed

  // Add new todo
  const addTodo = () => {
    if (inputText.trim() === '') return
    
    const newTodo = {
      id: Date.now(),
      text: inputText.trim(),
      completed: false,
      priority: 'medium'
    }
    
    setTodos(prev => [newTodo, ...prev])
    setInputText('')
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed))
  }

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Todo List
      </h1>

      {/* Add Todo Input */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={addTodo}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <Plus size={20} />
          Add
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6 justify-center">
        {['all', 'active', 'completed'].map(filterType => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-lg capitalize transition-colors ${
              filter === filterType
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filterType}
          </button>
        ))}
      </div>

      {/* Todo Stats */}
      {todos.length > 0 && (
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <span>{activeCount} active, {completedCount} completed</span>
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              Clear completed
            </button>
          )}
        </div>
      )}

      {/* Todo List */}
      <div className="space-y-2">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {todos.length === 0 
              ? "No todos yet. Add one above!" 
              : `No ${filter} todos.`
            }
          </div>
        ) : (
          filteredTodos.map(todo => (
            <div
              key={todo.id}
              className={`flex items-center gap-3 p-4 border rounded-lg transition-all ${
                todo.completed
                  ? 'bg-gray-50 border-gray-200'
                  : 'bg-white border-gray-300 hover:border-gray-400'
              }`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex-shrink-0 transition-colors ${
                  todo.completed
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {todo.completed ? (
                  <CheckCircle2 size={24} />
                ) : (
                  <Circle size={24} />
                )}
              </button>
              
              <span
                className={`flex-1 transition-all ${
                  todo.completed
                    ? 'text-gray-500 line-through'
                    : 'text-gray-800'
                }`}
              >
                {todo.text}
              </span>
              
              <button
                onClick={() => deleteTodo(todo.id)}
                className="flex-shrink-0 text-red-400 hover:text-red-600 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Click the circle to mark as complete • Click the trash to delete</p>
      </div>
    </div>
  )
}

export default TodoList