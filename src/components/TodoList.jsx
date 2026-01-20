import React, { useState, useEffect } from 'react'
import { Plus, Circle, CheckCircle2, Trash2, Loader2, AlertCircle } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, toggleTodoCompletion } from '../api/todoApi'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')
  const [filter, setFilter] = useState('all') // all, active, completed
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch todos on component mount
  useEffect(() => {
    loadTodos()
  }, [])

  // Load todos from database
  const loadTodos = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const result = await fetchTodos()
      
      if (result.success) {
        setTodos(result.data)
      } else {
        setError(result.error)
      }
    } catch (err) {
      console.error('Load todos failed:', err)
      setError('Failed to load todos')
    } finally {
      setLoading(false)
    }
  }

  // Add new todo
  const addTodo = async () => {
    if (inputText.trim() === '' || isSubmitting) return
    
    try {
      setIsSubmitting(true)
      setError(null)
      
      const newTodoData = {
        text: inputText.trim(),
        completed: false,
        priority: 'medium'
      }
      
      const result = await createTodo(newTodoData)
      
      if (result.success) {
        // Prepend the new todo to the list
        setTodos(prev => [result.data, ...prev])
        setInputText('')
      } else {
        setError(result.error)
      }
    } catch (err) {
      console.error('Add todo failed:', err)
      setError('Failed to add todo')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Toggle todo completion
  const toggleTodo = async (id) => {
    const todo = todos.find(t => t.id === id)
    if (!todo) return
    
    try {
      setError(null)
      
      const result = await toggleTodoCompletion(id, todo.completed)
      
      if (result.success) {
        // Update the todo in the list
        setTodos(prev => prev.map(t => 
          t.id === id ? result.data : t
        ))
      } else {
        setError(result.error)
      }
    } catch (err) {
      console.error('Toggle todo failed:', err)
      setError('Failed to update todo')
    }
  }

  // Delete todo
  const handleDeleteTodo = async (id) => {
    try {
      setError(null)
      
      const result = await deleteTodo(id)
      
      if (result.success) {
        // Remove the todo from the list
        setTodos(prev => prev.filter(t => t.id !== result.data.id))
      } else {
        setError(result.error)
      }
    } catch (err) {
      console.error('Delete todo failed:', err)
      setError('Failed to delete todo')
    }
  }

  // Clear all completed todos
  const clearCompleted = async () => {
    const completedTodos = todos.filter(todo => todo.completed)
    
    try {
      setError(null)
      
      // Delete all completed todos
      const deletePromises = completedTodos.map(todo => deleteTodo(todo.id))
      const results = await Promise.all(deletePromises)
      
      // Check if all deletions were successful
      const allSuccessful = results.every(result => result.success)
      
      if (allSuccessful) {
        // Remove completed todos from the list
        setTodos(prev => prev.filter(todo => !todo.completed))
      } else {
        setError('Some todos could not be deleted')
      }
    } catch (err) {
      console.error('Clear completed failed:', err)
      setError('Failed to clear completed todos')
    }
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

  // Loading state
  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center items-center py-12">
          <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
          <span className="ml-2 text-gray-600">Loading todos...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Todo List
      </h1>

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
          <AlertCircle size={20} />
          <span>{error}</span>
          <button
            onClick={() => setError(null)}
            className="ml-auto text-red-500 hover:text-red-700"
          >
            ×
          </button>
        </div>
      )}

      {/* Add Todo Input */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
          disabled={isSubmitting}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        <button
          onClick={addTodo}
          disabled={isSubmitting || inputText.trim() === ''}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <Plus size={20} />
          )}
          {isSubmitting ? 'Adding...' : 'Add'}
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
                onClick={() => handleDeleteTodo(todo.id)}
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
        <p className="mt-1 text-xs">Data is automatically saved to the database</p>
      </div>
    </div>
  )
}

export default TodoList