import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, AlertCircle, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '@/api/todoApi'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    priority: 'medium'
  })
  const [filter, setFilter] = useState('all') // all, active, completed

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetchTodos()
      if (response.success) {
        setTodos(response.data.list || [])
      }
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    
    if (!newTodo.title.trim()) {
      alert('Please enter a todo title')
      return
    }

    try {
      const todoData = {
        ...newTodo,
        completed: false
      }
      
      const response = await createTodo(todoData)
      if (response.success) {
        setTodos(prev => [response.data, ...prev])
        setNewTodo({ title: '', description: '', priority: 'medium' })
      }
    } catch (err) {
      console.error('Failed to create todo:', err)
      alert('Failed to create todo')
    }
  }

  const handleToggleComplete = async (id, currentStatus) => {
    try {
      const response = await updateTodo(id, { completed: !currentStatus })
      if (response.success) {
        setTodos(prev => prev.map(todo => 
          todo.id === id ? { ...todo, completed: !currentStatus } : todo
        ))
      }
    } catch (err) {
      console.error('Failed to update todo:', err)
      alert('Failed to update todo')
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      const response = await deleteTodo(id)
      if (response.success) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
      }
    } catch (err) {
      console.error('Failed to delete todo:', err)
      alert('Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    const completedCount = todos.filter(todo => todo.completed).length
    
    if (completedCount === 0) {
      alert('No completed tasks to clear')
      return
    }

    if (window.confirm(`Are you sure you want to delete ${completedCount} completed task(s)?`)) {
      try {
        const response = await deleteCompletedTodos()
        if (response.success) {
          setTodos(prev => prev.filter(todo => !todo.completed))
        }
      } catch (err) {
        console.error('Failed to clear completed todos:', err)
        alert('Failed to clear completed todos')
      }
    }
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.completed).length
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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500 flex gap-2 items-center bg-red-50 p-4 rounded-lg border border-red-200">
          <AlertCircle size={20} />
          <span>Error: {error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo App</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        {/* Add Todo Form */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <form onSubmit={handleAddTodo} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="What needs to be done?"
                value={newTodo.title}
                onChange={(e) => setNewTodo(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Description (optional)"
                value={newTodo.description}
                onChange={(e) => setNewTodo(prev => ({ ...prev, description: e.target.value }))}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              
              <select
                value={newTodo.priority}
                onChange={(e) => setNewTodo(prev => ({ ...prev, priority: e.target.value }))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Plus size={20} />
              Add Todo
            </button>
          </form>
        </div>

        {/* Stats and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-4 text-sm text-gray-600">
              <span>{activeCount} active</span>
              <span>{completedCount} completed</span>
              <span>{todos.length} total</span>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filter === 'active' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filter === 'completed' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Completed
              </button>
            </div>
            
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Clear Completed
              </button>
            )}
          </div>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {filteredTodos.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <p className="text-gray-500">
                {filter === 'all' && 'No todos yet. Add one above!'}
                {filter === 'active' && 'No active todos. Great job!'}
                {filter === 'completed' && 'No completed todos yet.'}
              </p>
            </div>
          ) : (
            filteredTodos.map(todo => (
              <div
                key={todo.id}
                className={`bg-white rounded-lg shadow-sm border p-4 transition-all ${
                  todo.completed ? 'opacity-75' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => handleToggleComplete(todo.id, todo.completed)}
                    className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      todo.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {todo.completed && <Check size={14} />}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium ${
                      todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                    }`}>
                      {todo.title}
                    </h3>
                    
                    {todo.description && (
                      <p className={`text-sm mt-1 ${
                        todo.completed ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {todo.description}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        todo.priority === 'high' 
                          ? 'bg-red-100 text-red-700'
                          : todo.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {todo.priority} priority
                      </span>
                      
                      {todo.created_at && (
                        <span className="text-xs text-gray-400">
                          {new Date(todo.created_at).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp