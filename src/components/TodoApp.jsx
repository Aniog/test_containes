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
    
    if (!newTodoTitle.trim()) {
      alert('Please enter a todo title')
      return
    }

    try {
      const todoData = {
        title: newTodoTitle.trim(),
        description: newTodoDescription.trim(),
        completed: false,
        priority: 'medium'
      }

      const result = await createTodo(todoData)
      
      if (result.success) {
        setTodos(prev => [result.data, ...prev])
        setNewTodoTitle('')
        setNewTodoDescription('')
      } else {
        alert('Failed to add todo: ' + (result.error || 'Unknown error'))
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
        alert('Failed to update todo: ' + (result.error || 'Unknown error'))
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
        alert('Failed to delete todo: ' + (result.error || 'Unknown error'))
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
        alert('Failed to clear completed todos: ' + (result.error || 'Unknown error'))
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

  const completedCount = todos.filter(todo => todo.data?.completed).length
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
                  value={newTodoTitle}
                  onChange={(e) => setNewTodoTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Add a description (optional)"
                  value={newTodoDescription}
                  onChange={(e) => setNewTodoDescription(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
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
          <div className="p-4 border-b bg-gray-50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-4 text-sm text-gray-600">
              <span>{activeCount} active</span>
              <span>{completedCount} completed</span>
              <span>{todos.length} total</span>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  filter === 'all' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  filter === 'active' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  filter === 'completed' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Completed
              </button>
            </div>

            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
              >
                Clear Completed
              </button>
            )}
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
              filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={`p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors ${
                    todo.data?.completed ? 'opacity-75' : ''
                  }`}
                >
                  <button
                    onClick={() => handleToggleComplete(todo.id, todo.data?.completed)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      todo.data?.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {todo.data?.completed && <Check size={12} />}
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
                      <span className={`px-2 py-1 rounded ${
                        todo.data?.priority === 'high' ? 'bg-red-100 text-red-700' :
                        todo.data?.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {todo.data?.priority || 'medium'}
                      </span>
                      {todo.created_at && (
                        <span>
                          {new Date(todo.created_at).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Todo App. Stay productive!</p>
        </div>
      </div>
    </div>
  )
}

export default TodoApp