import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, Loader2, AlertCircle, ChevronUp, ChevronDown, Minus } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todoApi'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [newTodoPriority, setNewTodoPriority] = useState('medium')
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
        // Sort todos by priority (high -> medium -> low) and then by completion status
        const sortedTodos = result.data.sort((a, b) => {
          // First sort by completion status (incomplete first)
          if (a.data.completed !== b.data.completed) {
            return a.data.completed ? 1 : -1
          }
          // Then sort by priority
          const priorityOrder = { high: 0, medium: 1, low: 2 }
          return priorityOrder[a.data.priority] - priorityOrder[b.data.priority]
        })
        setTodos(sortedTodos)
      } else {
        setError(result.error || 'Failed to load todos')
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
    
    if (!newTodoTitle.trim()) return
    
    try {
      setIsAdding(true)
      
      const result = await createTodo({
        title: newTodoTitle.trim(),
        completed: false,
        priority: newTodoPriority
      })
      
      if (result.success) {
        const newTodos = [result.data, ...todos]
        // Re-sort after adding
        const sortedTodos = newTodos.sort((a, b) => {
          if (a.data.completed !== b.data.completed) {
            return a.data.completed ? 1 : -1
          }
          const priorityOrder = { high: 0, medium: 1, low: 2 }
          return priorityOrder[a.data.priority] - priorityOrder[b.data.priority]
        })
        setTodos(sortedTodos)
        setNewTodoTitle('')
        setNewTodoPriority('medium')
      } else {
        alert('Failed to add todo: ' + result.error)
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
      const todo = todos.find(t => t.id === id)
      if (!todo) return

      const result = await updateTodo(id, {
        title: todo.data.title,
        completed: !currentCompleted,
        priority: todo.data.priority
      })
      
      if (result.success) {
        const updatedTodos = todos.map(item => 
          item.id === id ? result.data : item
        )
        // Re-sort after updating
        const sortedTodos = updatedTodos.sort((a, b) => {
          if (a.data.completed !== b.data.completed) {
            return a.data.completed ? 1 : -1
          }
          const priorityOrder = { high: 0, medium: 1, low: 2 }
          return priorityOrder[a.data.priority] - priorityOrder[b.data.priority]
        })
        setTodos(sortedTodos)
      } else {
        alert('Failed to update todo: ' + result.error)
      }
    } catch (err) {
      console.error('Toggle complete failed:', err)
      alert('Failed to update todo')
    }
  }

  const handleUpdatePriority = async (id, newPriority) => {
    try {
      const todo = todos.find(t => t.id === id)
      if (!todo) return

      const result = await updateTodo(id, {
        title: todo.data.title,
        completed: todo.data.completed,
        priority: newPriority
      })
      
      if (result.success) {
        const updatedTodos = todos.map(item => 
          item.id === id ? result.data : item
        )
        // Re-sort after updating priority
        const sortedTodos = updatedTodos.sort((a, b) => {
          if (a.data.completed !== b.data.completed) {
            return a.data.completed ? 1 : -1
          }
          const priorityOrder = { high: 0, medium: 1, low: 2 }
          return priorityOrder[a.data.priority] - priorityOrder[b.data.priority]
        })
        setTodos(sortedTodos)
      } else {
        alert('Failed to update priority: ' + result.error)
      }
    } catch (err) {
      console.error('Update priority failed:', err)
      alert('Failed to update priority')
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      const result = await deleteTodo(id)
      
      if (result.success) {
        setTodos(prev => prev.filter(item => item.id !== result.data.id))
      } else {
        alert('Failed to delete todo: ' + result.error)
      }
    } catch (err) {
      console.error('Delete todo failed:', err)
      alert('Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter(todo => todo.data.completed)
    
    if (completedTodos.length === 0) return
    
    try {
      // Delete all completed todos
      const deletePromises = completedTodos.map(todo => deleteTodo(todo.id))
      const results = await Promise.all(deletePromises)
      
      // Filter out successfully deleted todos
      const deletedIds = results
        .filter(result => result.success)
        .map(result => result.data.id)
      
      setTodos(prev => prev.filter(item => !deletedIds.includes(item.id)))
      
      if (results.some(result => !result.success)) {
        alert('Some todos could not be deleted')
      }
    } catch (err) {
      console.error('Clear completed failed:', err)
      alert('Failed to clear completed todos')
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-green-600 bg-green-50 border-green-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return <ChevronUp size={12} />
      case 'medium': return <Minus size={12} />
      case 'low': return <ChevronDown size={12} />
      default: return <Minus size={12} />
    }
  }

  const completedCount = todos.filter(todo => todo.data.completed).length
  const totalCount = todos.length

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-purple-600">
          <Loader2 className="animate-spin" size={20} />
          <span>Loading todos...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-gray-50 flex items-center justify-center">
        <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
          <AlertCircle size={20} />
          <span>Error: {error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border">
          {/* Header */}
          <div className="p-6 border-b border-purple-100 bg-gradient-to-r from-purple-50 to-white">
            <h1 className="text-2xl font-bold text-purple-900 mb-2">Todo List</h1>
            <p className="text-purple-700">
              {totalCount === 0 ? 'No todos yet' : `${completedCount} of ${totalCount} completed`}
            </p>
          </div>

          {/* Add Todo Form */}
          <div className="p-6 border-b bg-purple-50">
            <form onSubmit={handleAddTodo} className="flex gap-3">
              <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={isAdding}
              />
              <select
                value={newTodoPriority}
                onChange={(e) => setNewTodoPriority(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={isAdding}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <button
                type="submit"
                disabled={isAdding || !newTodoTitle.trim()}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isAdding ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <Plus size={16} />
                )}
                Add
              </button>
            </form>
          </div>

          {/* Todo List */}
          <div className="divide-y">
            {todos.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p>No todos yet. Add one above to get started!</p>
              </div>
            ) : (
              todos.map((todo) => (
                <div key={todo.id} className="p-4 flex items-center gap-3 hover:bg-gray-50">
                  <button
                    onClick={() => handleToggleComplete(todo.id, todo.data.completed)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      todo.data.completed
                        ? 'bg-purple-500 border-purple-500 text-white'
                        : 'border-gray-300 hover:border-purple-500'
                    }`}
                  >
                    {todo.data.completed && <Check size={14} />}
                  </button>
                  
                  <div className="flex-1 flex items-center gap-2">
                    <span
                      className={`flex-1 ${
                        todo.data.completed
                          ? 'text-gray-500 line-through'
                          : 'text-gray-900'
                      }`}
                    >
                      {todo.data.title}
                    </span>
                    
                    <select
                      value={todo.data.priority}
                      onChange={(e) => handleUpdatePriority(todo.id, e.target.value)}
                      className={`text-xs px-2 py-1 rounded-full border text-center font-medium ${getPriorityColor(todo.data.priority)}`}
                      disabled={todo.data.completed}
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                  
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {completedCount > 0 && (
            <div className="p-4 border-t bg-purple-50 flex justify-between items-center">
              <span className="text-sm text-purple-700">
                {completedCount} completed task{completedCount !== 1 ? 's' : ''}
              </span>
              <button
                onClick={handleClearCompleted}
                className="text-sm text-purple-600 hover:text-purple-700 font-medium"
              >
                Clear completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp