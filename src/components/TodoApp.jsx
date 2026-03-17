import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, AlertCircle, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todoApi'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodoText, setNewTodoText] = useState('')
  const [filter, setFilter] = useState('all') // all, active, completed

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // For demo purposes, we'll use local state instead of API
      // In a real app, you would uncomment the API call below
      // const result = await fetchTodos()
      // if (result.success) {
      //   setTodos(result.data)
      // } else {
      //   setError(result.error)
      // }
      
      // Demo data for immediate functionality
      setTodos([])
    } catch (err) {
      console.error('Load todos failed:', err)
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }

  const handleAddTodo = async () => {
    if (!newTodoText.trim()) return

    try {
      const newTodo = {
        id: Date.now(), // In real app, this would come from API
        text: newTodoText.trim(),
        completed: false,
        priority: 'medium'
      }

      // For demo purposes, we'll update local state directly
      // In a real app, you would use the API:
      // const result = await createTodo(newTodo)
      // if (result.success) {
      //   setTodos(prev => [result.data, ...prev])
      // }

      setTodos(prev => [newTodo, ...prev])
      setNewTodoText('')
    } catch (err) {
      console.error('Add todo failed:', err)
      setError('Failed to add todo')
    }
  }

  const handleToggleComplete = async (id) => {
    try {
      const todo = todos.find(t => t.id === id)
      if (!todo) return

      const updatedTodo = { ...todo, completed: !todo.completed }

      // For demo purposes, we'll update local state directly
      // In a real app, you would use the API:
      // const result = await updateTodo(id, updatedTodo)
      // if (result.success) {
      //   setTodos(prev => prev.map(t => t.id === id ? result.data : t))
      // }

      setTodos(prev => prev.map(t => t.id === id ? updatedTodo : t))
    } catch (err) {
      console.error('Toggle complete failed:', err)
      setError('Failed to update todo')
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      // For demo purposes, we'll update local state directly
      // In a real app, you would use the API:
      // const result = await deleteTodo(id)
      // if (result.success) {
      //   setTodos(prev => prev.filter(t => t.id !== id))
      // }

      setTodos(prev => prev.filter(t => t.id !== id))
    } catch (err) {
      console.error('Delete todo failed:', err)
      setError('Failed to delete todo')
    }
  }

  const handleClearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const completedCount = todos.filter(t => t.completed).length
  const activeCount = todos.length - completedCount

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold text-center">Todo App</h1>
            <p className="text-blue-100 text-center mt-2">
              Stay organized and get things done
            </p>
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 m-4">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-700">{error}</span>
                <button
                  onClick={() => setError(null)}
                  className="ml-auto text-red-400 hover:text-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Add Todo Input */}
          <div className="p-6 border-b">
            <div className="flex gap-3">
              <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleAddTodo}
                disabled={!newTodoText.trim()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="px-6 py-4 border-b bg-gray-50">
            <div className="flex gap-1">
              {[
                { key: 'all', label: 'All', count: todos.length },
                { key: 'active', label: 'Active', count: activeCount },
                { key: 'completed', label: 'Completed', count: completedCount }
              ].map(({ key, label, count }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filter === key
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {label} ({count})
                </button>
              ))}
            </div>
          </div>

          {/* Todo List */}
          <div className="divide-y divide-gray-200">
            {filteredTodos.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                {todos.length === 0 ? (
                  <div>
                    <div className="text-4xl mb-4">📝</div>
                    <p className="text-lg font-medium">No todos yet</p>
                    <p className="text-sm">Add your first todo above to get started!</p>
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-4">✨</div>
                    <p className="text-lg font-medium">
                      No {filter} todos
                    </p>
                  </div>
                )}
              </div>
            ) : (
              filteredTodos.map(todo => (
                <div
                  key={todo.id}
                  className={`p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                    todo.completed ? 'opacity-75' : ''
                  }`}
                >
                  <button
                    onClick={() => handleToggleComplete(todo.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      todo.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {todo.completed && <Check className="w-4 h-4" />}
                  </button>
                  
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? 'line-through text-gray-500'
                        : 'text-gray-900'
                    }`}
                  >
                    {todo.text}
                  </span>
                  
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {todos.length > 0 && (
            <div className="p-6 bg-gray-50 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {activeCount} {activeCount === 1 ? 'item' : 'items'} left
              </span>
              
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                >
                  Clear completed ({completedCount})
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp