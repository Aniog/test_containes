import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, AlertCircle, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '../api/todoApi'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [newTodoDescription, setNewTodoDescription] = useState('')
  const [newTodoPriority, setNewTodoPriority] = useState('medium')
  const [filter, setFilter] = useState('all') // all, active, completed

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    setLoading(true)
    setError(null)
    
    const { data, error: apiError } = await fetchTodos()
    
    if (apiError) {
      setError(apiError)
    } else {
      setTodos(data)
    }
    
    setLoading(false)
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    
    if (!newTodoTitle.trim()) return

    const newTodoData = {
      title: newTodoTitle.trim(),
      description: newTodoDescription.trim(),
      priority: newTodoPriority,
      completed: false
    }

    const { data, error: apiError } = await createTodo(newTodoData)
    
    if (apiError) {
      setError(apiError)
    } else {
      setTodos(prev => [data, ...prev])
      setNewTodoTitle('')
      setNewTodoDescription('')
      setNewTodoPriority('medium')
    }
  }

  const handleToggleComplete = async (todo) => {
    const updatedData = {
      ...todo.data,
      completed: !todo.data.completed
    }

    const { data, error: apiError } = await updateTodo(todo.id, updatedData)
    
    if (apiError) {
      setError(apiError)
    } else {
      setTodos(prev => prev.map(item => item.id === todo.id ? data : item))
    }
  }

  const handleDeleteTodo = async (id) => {
    const { error: apiError } = await deleteTodo(id)
    
    if (apiError) {
      setError(apiError)
    } else {
      setTodos(prev => prev.filter(item => item.id !== id))
    }
  }

  const handleClearCompleted = async () => {
    const { error: apiError } = await deleteCompletedTodos()
    
    if (apiError) {
      setError(apiError)
    } else {
      setTodos(prev => prev.filter(item => !item.data.completed))
    }
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.data.completed
    if (filter === 'completed') return todo.data.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.data.completed).length
  const activeCount = todos.length - completedCount

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="animate-spin" size={24} />
          <span>Loading todos...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border">
          {/* Header */}
          <div className="p-6 border-b">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Todo App
            </h1>
            <p className="text-gray-600 text-center">
              Stay organized and get things done
            </p>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
              <AlertCircle className="text-red-500" size={20} />
              <span className="text-red-700">Error: {error}</span>
              <button 
                onClick={() => setError(null)}
                className="ml-auto text-red-500 hover:text-red-700"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {/* Add Todo Form */}
          <div className="p-6 border-b bg-gray-50">
            <form onSubmit={handleAddTodo} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="What needs to be done?"
                  value={newTodoTitle}
                  onChange={(e) => setNewTodoTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Description (optional)"
                  value={newTodoDescription}
                  onChange={(e) => setNewTodoDescription(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select
                  value={newTodoPriority}
                  onChange={(e) => setNewTodoPriority(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <button
                  type="submit"
                  disabled={!newTodoTitle.trim()}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </form>
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
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {label} ({count})
                </button>
              ))}
            </div>
          </div>

          {/* Todo List */}
          <div className="divide-y">
            {filteredTodos.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                {filter === 'all' && 'No todos yet. Add one above!'}
                {filter === 'active' && 'No active todos. Great job!'}
                {filter === 'completed' && 'No completed todos yet.'}
              </div>
            ) : (
              filteredTodos.map(todo => (
                <div
                  key={todo.id}
                  className={`p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors ${
                    todo.data.completed ? 'opacity-75' : ''
                  }`}
                >
                  <button
                    onClick={() => handleToggleComplete(todo)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      todo.data.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {todo.data.completed && <Check size={12} />}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-medium ${
                        todo.data.completed ? 'line-through text-gray-500' : 'text-gray-900'
                      }`}>
                        {todo.data.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        todo.data.priority === 'high' ? 'bg-red-100 text-red-700' :
                        todo.data.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {todo.data.priority}
                      </span>
                    </div>
                    {todo.data.description && (
                      <p className={`text-sm ${
                        todo.data.completed ? 'line-through text-gray-400' : 'text-gray-600'
                      }`}>
                        {todo.data.description}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">
                      Created {new Date(todo.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="p-4 border-t bg-gray-50 flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {activeCount} {activeCount === 1 ? 'item' : 'items'} left
              </span>
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="text-sm text-red-600 hover:text-red-700 hover:underline"
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