import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, AlertCircle, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '../api/todoApi'

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
    
    if (!newTodo.title.trim()) {
      alert('Please enter a todo title')
      return
    }

    try {
      const todoData = {
        ...newTodo,
        completed: false
      }
      
      const result = await createTodo(todoData)
      
      if (result.success) {
        setTodos(prev => [result.data, ...prev])
        setNewTodo({ title: '', description: '', priority: 'medium' })
      } else {
        alert('Failed to add todo: ' + result.error)
      }
    } catch (err) {
      console.error('Add todo error:', err)
      alert('Failed to add todo')
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
        alert('Failed to update todo: ' + result.error)
      }
    } catch (err) {
      console.error('Toggle complete error:', err)
      alert('Failed to update todo')
    }
  }

  const handleDeleteTodo = async (id) => {
    if (!confirm('Are you sure you want to delete this todo?')) {
      return
    }

    try {
      const result = await deleteTodo(id)
      
      if (result.success) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
      } else {
        alert('Failed to delete todo: ' + result.error)
      }
    } catch (err) {
      console.error('Delete todo error:', err)
      alert('Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    const completedCount = todos.filter(todo => todo.data?.completed).length
    
    if (completedCount === 0) {
      alert('No completed todos to clear')
      return
    }

    if (!confirm(`Are you sure you want to delete ${completedCount} completed todo(s)?`)) {
      return
    }

    try {
      const result = await deleteCompletedTodos()
      
      if (result.success) {
        setTodos(prev => prev.filter(todo => !todo.data?.completed))
      } else {
        alert('Failed to clear completed todos: ' + result.error)
      }
    } catch (err) {
      console.error('Clear completed error:', err)
      alert('Failed to clear completed todos')
    }
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.data?.completed
    if (filter === 'completed') return todo.data?.completed
    return true
  })

  const activeTodosCount = todos.filter(todo => !todo.data?.completed).length
  const completedTodosCount = todos.filter(todo => todo.data?.completed).length

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

          {/* Add Todo Form */}
          <div className="p-6 border-b bg-gray-50">
            <form onSubmit={handleAddTodo} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="What needs to be done?"
                  value={newTodo.title}
                  onChange={(e) => setNewTodo(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Description (optional)"
                  value={newTodo.description}
                  onChange={(e) => setNewTodo(prev => ({ ...prev, description: e.target.value }))}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <select
                  value={newTodo.priority}
                  onChange={(e) => setNewTodo(prev => ({ ...prev, priority: e.target.value }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
                >
                  <Plus size={20} />
                  Add
                </button>
              </div>
            </form>
          </div>

          {/* Stats and Filters */}
          <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
            <div className="flex gap-4 text-sm text-gray-600">
              <span>{activeTodosCount} active</span>
              <span>{completedTodosCount} completed</span>
              <span>{todos.length} total</span>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded text-sm ${
                  filter === 'all' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-3 py-1 rounded text-sm ${
                  filter === 'active' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-3 py-1 rounded text-sm ${
                  filter === 'completed' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Completed
              </button>
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
                <div key={todo.id} className="p-4 hover:bg-gray-50 flex items-center gap-4">
                  <button
                    onClick={() => handleToggleComplete(todo.id, todo.data?.completed)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      todo.data?.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {todo.data?.completed && <Check size={16} />}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium ${
                      todo.data?.completed ? 'line-through text-gray-500' : 'text-gray-900'
                    }`}>
                      {todo.data?.title}
                    </div>
                    {todo.data?.description && (
                      <div className={`text-sm mt-1 ${
                        todo.data?.completed ? 'line-through text-gray-400' : 'text-gray-600'
                      }`}>
                        {todo.data?.description}
                      </div>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded ${
                        todo.data?.priority === 'high' 
                          ? 'bg-red-100 text-red-700'
                          : todo.data?.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {todo.data?.priority}
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
                    className="flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {completedTodosCount > 0 && (
            <div className="p-4 border-t bg-gray-50">
              <button
                onClick={handleClearCompleted}
                className="w-full px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Clear {completedTodosCount} Completed Todo{completedTodosCount !== 1 ? 's' : ''}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp