import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, AlertCircle, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '../api/todoApi'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodo, setNewTodo] = useState('')
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
    if (!newTodo.trim()) return

    try {
      const todoData = {
        title: newTodo.trim(),
        completed: false,
        priority: 'medium'
      }

      const response = await createTodo(todoData)
      if (response.success) {
        setTodos(prev => [response.data, ...prev])
        setNewTodo('')
      }
    } catch (err) {
      console.error('Failed to add todo:', err)
      setError('Failed to add todo')
    }
  }

  const handleToggleComplete = async (id, completed) => {
    try {
      const response = await updateTodo(id, { completed: !completed })
      if (response.success) {
        setTodos(prev => prev.map(todo => 
          todo.id === id ? response.data : todo
        ))
      }
    } catch (err) {
      console.error('Failed to update todo:', err)
      setError('Failed to update todo')
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
      setError('Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    try {
      const response = await deleteCompletedTodos()
      if (response.success) {
        setTodos(prev => prev.filter(todo => !todo.completed))
      }
    } catch (err) {
      console.error('Failed to clear completed todos:', err)
      setError('Failed to clear completed todos')
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
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo App</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        {/* Error Message */}
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
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!newTodo.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              Add
            </button>
          </div>
        </form>

        {/* Filter Tabs */}
        <div className="flex gap-1 mb-6 bg-white rounded-lg p-1 shadow-sm">
          {[
            { key: 'all', label: 'All', count: todos.length },
            { key: 'active', label: 'Active', count: activeCount },
            { key: 'completed', label: 'Completed', count: completedCount }
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === key
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {filteredTodos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              {filter === 'all' && todos.length === 0 && (
                <>
                  <div className="text-4xl mb-2">📝</div>
                  <p>No todos yet. Add one above to get started!</p>
                </>
              )}
              {filter === 'active' && activeCount === 0 && (
                <>
                  <div className="text-4xl mb-2">✅</div>
                  <p>All tasks completed! Great job!</p>
                </>
              )}
              {filter === 'completed' && completedCount === 0 && (
                <>
                  <div className="text-4xl mb-2">⏳</div>
                  <p>No completed tasks yet.</p>
                </>
              )}
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={`p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                    todo.completed ? 'opacity-60' : ''
                  }`}
                >
                  <button
                    onClick={() => handleToggleComplete(todo.id, todo.completed)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
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
                  </div>

                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {todos.length > 0 && (
          <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
            <span>
              {activeCount} {activeCount === 1 ? 'item' : 'items'} left
            </span>
            
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp