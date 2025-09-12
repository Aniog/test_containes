import React, { useState } from 'react'
import { Trash2, Plus, Check, X } from 'lucide-react'

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
    console.log('Toggled todo with id:', id)
  }

  // Clear all completed tasks
  const clearCompleted = () => {
    const completedCount = todos.filter(todo => todo.completed).length
    setTodos(todos.filter(todo => !todo.completed))
    console.log('Cleared', completedCount, 'completed tasks')
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
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Strikingly</h1>
        <p className="text-gray-600">Stay organized and get things done</p>
      </div>

      {/* Add Todo Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={addTodo}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>
      </div>

      {/* Stats */}
      {totalCount > 0 && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Total: {totalCount} tasks</span>
            <span>Completed: {completedCount} tasks</span>
            <span>Remaining: {totalCount - completedCount} tasks</span>
          </div>
        </div>
      )}

      {/* Todo List */}
      <div className="bg-white rounded-lg shadow-md">
        {todos.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-lg">No todos yet!</p>
            <p className="text-sm">Add a task above to get started.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors duration-150 ${
                  todo.completed ? 'opacity-75' : ''
                }`}
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    todo.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-green-400'
                  }`}
                >
                  {todo.completed && <Check className="w-4 h-4" />}
                </button>

                {/* Todo Text */}
                <span
                  className={`flex-1 text-lg ${
                    todo.completed
                      ? 'line-through text-gray-500'
                      : 'text-gray-800'
                  }`}
                >
                  {todo.text}
                </span>

                {/* Delete Button */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  title="Delete todo"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Clear Completed Button */}
      {completedCount > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={clearCompleted}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 flex items-center gap-2 mx-auto"
          >
            <X className="w-5 h-5" />
            Clear {completedCount} Completed Task{completedCount !== 1 ? 's' : ''}
          </button>
        </div>
      )}
    </div>
  )
}

export default TodoApp