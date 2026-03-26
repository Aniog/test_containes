import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, AlertCircle, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '../api/todoApi'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [newTodoDescription, setNewTodoDescription] = useState('')
  const [filter, setFilter] = useState('all') // all, active, completed

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const result = await fetchTodos()
      
      if (result.success) {
        setTodos(result.data.list || [])
      } else {
        setError(result.error || 'Failed to load todos')
      }
    } catch (err) {
      console.error('Load todos error:', err)
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    
    if (!newTodoTitle.trim()) return

    try {
      const todoData = {
        title: newTodoTitle.trim(),
        description: newTodoDescription.trim() || undefined,
        completed: false,
        priority: 'medium'
      }

      const result = await createTodo(todoData)
      
      if (result.success) {
        setTodos(prev => [result.data, ...prev])
        setNewTodoTitle('')
        setNewTodoDescription('')
      } else {
        setError(result.error || 'Failed to create todo')
      }
    } catch (err) {
      console.error('Add todo error:', err)
      setError('Failed to add todo')
    }
  }

  const handleToggleComplete = async (id, currentCompleted) => {
    try {
      const result = await updateTodo(id, { completed: !currentCompleted })
      
      if (result.success) {
        setTodos(prev => prev.map(todo => 
          todo.id === id ? result.data : todo
        ))
      } else {
        setError(result.error || 'Failed to update todo')
      }
    } catch (err) {
      console.error('Toggle complete error:', err)
      setError('Failed to update todo')
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      const result = await deleteTodo(id)
      
      if (result.success) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
      } else {
        setError(result.error || 'Failed to delete todo')
      }
    } catch (err) {
      console.error('Delete todo error:', err)
      setError('Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    try {
      const result = await deleteCompletedTodos()
      
      if (result.success) {
        setTodos(prev => prev.filter(todo => !todo.data?.completed))
      } else {
        setError(result.error || 'Failed to clear completed todos')
      }
    } catch (err) {
      console.error('Clear completed error:', err)
      setError('Failed to clear completed todos')
    }
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.data?.completed
    if (filter === 'completed') return todo.data?.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.data?.completed).length
  const activeCount = todos.length - completedCount

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="animate-spin" size={20} />
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
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
              Study Todo App
            </h1>
            
            {/* Add Todo Form */}
            <form onSubmit={handleAddTodo} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={newTodoTitle}
                  onChange={(e) => setNewTodoTitle(e.target.value)}
                  placeholder="What needs to be done?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <textarea
                  value={newTodoDescription}
                  onChange={(e) => setNewTodoDescription(e.target.value)}
                  placeholder="Description (optional)"
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={!newTodoTitle.trim()}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
              >
                <Plus size={20} />
                Add Todo
              </button>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border-b border-red-100">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle size={20} />
                <span>{error}</span>
                <button
                  onClick={() => setError(null)}
                  className="ml-auto text-red-500 hover:text-red-700"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Filter Tabs */}
          <div className="p-4 border-b bg-gray-50">
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
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-200'
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
                {filter === 'active' && 'No active todos'}
                {filter === 'completed' && 'No completed todos'}
              </div>
            ) : (
              filteredTodos.map(todo => (
                <div
                  key={todo.id}
                  className={`p-4 flex items-start gap-3 hover:bg-gray-50 ${
                    todo.data?.completed ? 'opacity-75' : ''
                  }`}
                >
                  <button
                    onClick={() => handleToggleComplete(todo.id, todo.data?.completed)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      todo.data?.completed
                        ? 'bg-green-600 border-green-600 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {todo.data?.completed && <Check size={14} />}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium ${
                      todo.data?.completed 
                        ? 'line-through text-gray-500' 
                        : 'text-gray-900'
                    }`}>
                      {todo.data?.title}
                    </h3>
                    {todo.data?.description && (
                      <p className={`text-sm mt-1 ${
                        todo.data?.completed 
                          ? 'line-through text-gray-400' 
                          : 'text-gray-600'
                      }`}>
                        {todo.data?.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <span>Priority: {todo.data?.priority || 'medium'}</span>
                      {todo.created_at && (
                        <span>• Created: {new Date(todo.created_at).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="p-4 bg-gray-50 border-t flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {activeCount} {activeCount === 1 ? 'item' : 'items'} left
              </span>
              
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="text-sm text-red-600 hover:text-red-800 font-medium"
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