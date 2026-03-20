import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, AlertCircle, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteMultipleTodos } from '@/api/todoApi'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    priority: 'medium'
  })
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    loadTodos()
  }, [])

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
      setIsAdding(true)
      
      const todoData = {
        ...newTodo,
        completed: false
      }
      
      const result = await createTodo(todoData)
      
      if (result.success) {
        setTodos(prev => [result.data, ...prev])
        setNewTodo({ title: '', description: '', priority: 'medium' })
      } else {
        alert(`Failed to add todo: ${result.error}`)
      }
    } catch (err) {
      console.error('Add todo failed:', err)
      alert('Failed to add todo')
    } finally {
      setIsAdding(false)
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
        alert(`Failed to update todo: ${result.error}`)
      }
    } catch (err) {
      console.error('Toggle complete failed:', err)
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
        setTodos(prev => prev.filter(todo => todo.id !== result.data.id))
      } else {
        alert(`Failed to delete todo: ${result.error}`)
      }
    } catch (err) {
      console.error('Delete todo failed:', err)
      alert('Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter(todo => todo.completed)
    
    if (completedTodos.length === 0) {
      alert('No completed todos to clear')
      return
    }

    if (!confirm(`Are you sure you want to delete ${completedTodos.length} completed todo(s)?`)) {
      return
    }

    try {
      const completedIds = completedTodos.map(todo => todo.id)
      const result = await deleteMultipleTodos(completedIds)
      
      if (result.success) {
        setTodos(prev => prev.filter(todo => !todo.completed))
      } else {
        alert(`Failed to clear completed todos: ${result.error}`)
      }
    } catch (err) {
      console.error('Clear completed failed:', err)
      alert('Failed to clear completed todos')
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50'
      case 'medium': return 'border-yellow-200 bg-yellow-50'
      case 'low': return 'border-green-200 bg-green-50'
      default: return 'border-gray-200 bg-gray-50'
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
        <span className="ml-2 text-gray-600">Loading todos...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
        <AlertCircle size={20} />
        <span>Error: {error}</span>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Todo List</h1>
        <p className="text-gray-600">
          {totalCount} total, {completedCount} completed
        </p>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} className="mb-6 p-4 bg-gray-50 rounded-lg border">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter todo title..."
            value={newTodo.title}
            onChange={(e) => setNewTodo(prev => ({ ...prev, title: e.target.value }))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isAdding}
          />
          
          <textarea
            placeholder="Enter description (optional)..."
            value={newTodo.description}
            onChange={(e) => setNewTodo(prev => ({ ...prev, description: e.target.value }))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="2"
            disabled={isAdding}
          />
          
          <div className="flex gap-3 items-center">
            <select
              value={newTodo.priority}
              onChange={(e) => setNewTodo(prev => ({ ...prev, priority: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isAdding}
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            
            <button
              type="submit"
              disabled={isAdding || !newTodo.title.trim()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAdding ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
              Add Todo
            </button>
          </div>
        </div>
      </form>

      {/* Clear Completed Button */}
      {completedCount > 0 && (
        <div className="mb-4">
          <button
            onClick={handleClearCompleted}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            <Trash2 className="w-4 h-4" />
            Clear {completedCount} Completed
          </button>
        </div>
      )}

      {/* Todo List */}
      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p className="text-lg">No todos yet!</p>
            <p className="text-sm">Add your first todo above to get started.</p>
          </div>
        ) : (
          todos.map(todo => (
            <div
              key={todo.id}
              className={`p-4 rounded-lg border-2 transition-all ${getPriorityColor(todo.priority)} ${
                todo.completed ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <button
                    onClick={() => handleToggleComplete(todo.id, todo.completed)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      todo.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {todo.completed && <Check className="w-3 h-3" />}
                  </button>
                  
                  <div className="flex-1">
                    <h3 className={`font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {todo.title}
                    </h3>
                    {todo.description && (
                      <p className={`text-sm mt-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                        {todo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        todo.priority === 'high' ? 'bg-red-100 text-red-700' :
                        todo.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
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
                </div>
                
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList