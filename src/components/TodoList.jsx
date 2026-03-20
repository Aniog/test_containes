import React, { useState, useEffect } from 'react'
import { Plus, Trash2, CheckCircle, AlertCircle, Loader2, X } from 'lucide-react'
import TodoItem from './TodoItem'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '../api/todos'

const TodoList = () => {
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
        const dataPayload = result.data || {}
        setTodos(dataPayload.list || [])
      } else {
        setError(result.error || 'Failed to load todos')
      }
    } catch (err) {
      console.error('Load todos failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    
    if (!newTodoTitle.trim()) return

    try {
      setIsAdding(true)
      
      const todoData = {
        title: newTodoTitle.trim(),
        completed: false,
        priority: newTodoPriority
      }

      const result = await createTodo(todoData)
      
      if (result.success) {
        // Add the new todo to the beginning of the list
        setTodos(prev => [result.data, ...prev])
        setNewTodoTitle('')
        setNewTodoPriority('medium')
      } else {
        setError(result.error || 'Failed to add todo')
      }
    } catch (err) {
      console.error('Add todo failed:', err)
      setError(err.message || 'Failed to add todo')
    } finally {
      setIsAdding(false)
    }
  }

  const handleToggleComplete = async (id, completed) => {
    try {
      const result = await updateTodo(id, { completed })
      
      if (result.success) {
        // Update the todo in the local state
        setTodos(prev => prev.map(todo => 
          todo.id === id ? result.data : todo
        ))
      } else {
        setError(result.error || 'Failed to update todo')
      }
    } catch (err) {
      console.error('Toggle complete failed:', err)
      setError(err.message || 'Failed to update todo')
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      const result = await deleteTodo(id)
      
      if (result.success) {
        // Remove the todo from the local state
        setTodos(prev => prev.filter(todo => todo.id !== id))
      } else {
        setError(result.error || 'Failed to delete todo')
      }
    } catch (err) {
      console.error('Delete todo failed:', err)
      setError(err.message || 'Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    try {
      const result = await deleteCompletedTodos()
      
      if (result.success) {
        // Remove all completed todos from the local state
        setTodos(prev => prev.filter(todo => !todo.completed))
      } else {
        setError(result.error || 'Failed to clear completed todos')
      }
    } catch (err) {
      console.error('Clear completed failed:', err)
      setError(err.message || 'Failed to clear completed todos')
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

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Todo List</h1>
        <p className="text-gray-600">
          {totalCount === 0 ? 'No todos yet' : `${completedCount} of ${totalCount} completed`}
        </p>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
          <AlertCircle size={20} />
          <span>{error}</span>
          <button 
            onClick={() => setError(null)}
            className="ml-auto text-red-500 hover:text-red-700"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} className="mb-6">
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isAdding}
          />
          <select
            value={newTodoPriority}
            onChange={(e) => setNewTodoPriority(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isAdding}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button
            type="submit"
            disabled={!newTodoTitle.trim() || isAdding}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isAdding ? <Loader2 className="animate-spin w-4 h-4" /> : <Plus size={16} />}
            Add
          </button>
        </div>
      </form>

      {/* Actions Bar */}
      {totalCount > 0 && (
        <div className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">
            {totalCount} {totalCount === 1 ? 'item' : 'items'}
          </span>
          {completedCount > 0 && (
            <button
              onClick={handleClearCompleted}
              className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
            >
              <Trash2 size={14} />
              Clear completed ({completedCount})
            </button>
          )}
        </div>
      )}

      {/* Todo List */}
      <div className="space-y-2">
        {todos.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <CheckCircle size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">No todos yet</p>
            <p className="text-sm">Add your first todo above to get started!</p>
          </div>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTodo}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList