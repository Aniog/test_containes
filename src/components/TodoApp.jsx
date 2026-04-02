import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, Loader2, AlertCircle } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todoApi'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodoTitle, setNewTodoTitle] = useState('')
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
        completed: false
      })
      
      if (result.success) {
        setTodos(prev => [result.data, ...prev])
        setNewTodoTitle('')
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
        completed: !currentCompleted
      })
      
      if (result.success) {
        setTodos(prev => prev.map(item => 
          item.id === id ? result.data : item
        ))
      } else {
        alert('Failed to update todo: ' + result.error)
      }
    } catch (err) {
      console.error('Toggle complete failed:', err)
      alert('Failed to update todo')
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

  const completedCount = todos.filter(todo => todo.data.completed).length
  const totalCount = todos.length

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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Todo List</h1>
            <p className="text-gray-600">
              {totalCount === 0 ? 'No todos yet' : `${completedCount} of ${totalCount} completed`}
            </p>
          </div>

          {/* Add Todo Form */}
          <div className="p-6 border-b bg-gray-50">
            <form onSubmit={handleAddTodo} className="flex gap-3">
              <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isAdding}
              />
              <button
                type="submit"
                disabled={isAdding || !newTodoTitle.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
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
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {todo.data.completed && <Check size={14} />}
                  </button>
                  
                  <span
                    className={`flex-1 ${
                      todo.data.completed
                        ? 'text-gray-500 line-through'
                        : 'text-gray-900'
                    }`}
                  >
                    {todo.data.title}
                  </span>
                  
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
            <div className="p-4 border-t bg-gray-50 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {completedCount} completed task{completedCount !== 1 ? 's' : ''}
              </span>
              <button
                onClick={handleClearCompleted}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
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