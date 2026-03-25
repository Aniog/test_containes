import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, AlertCircle, Loader2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '@/api/todos'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [newTodoPriority, setNewTodoPriority] = useState('medium')
  const [filter, setFilter] = useState('all') // all, active, completed

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    setLoading(true)
    setError(null)
    
    const result = await fetchTodos()
    
    if (result.success) {
      setTodos(result.data)
    } else {
      setError(result.error)
    }
    
    setLoading(false)
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    
    if (!newTodoTitle.trim()) return

    const todoData = {
      title: newTodoTitle.trim(),
      completed: false,
      priority: newTodoPriority
    }

    const result = await createTodo(todoData)
    
    if (result.success) {
      setTodos(prev => [result.data, ...prev])
      setNewTodoTitle('')
      setNewTodoPriority('medium')
    } else {
      setError(result.error)
    }
  }

  const handleToggleComplete = async (id, currentCompleted) => {
    const result = await updateTodo(id, { completed: !currentCompleted })
    
    if (result.success) {
      setTodos(prev => prev.map(todo => 
        todo.id === id ? result.data : todo
      ))
    } else {
      setError(result.error)
    }
  }

  const handleDeleteTodo = async (id) => {
    const result = await deleteTodo(id)
    
    if (result.success) {
      setTodos(prev => prev.filter(todo => todo.id !== result.data.id))
    } else {
      setError(result.error)
    }
  }

  const handleClearCompleted = async () => {
    const result = await deleteCompletedTodos()
    
    if (result.success) {
      setTodos(prev => prev.filter(todo => !todo.data?.completed))
    } else {
      setError(result.error)
    }
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.data?.completed
    if (filter === 'completed') return todo.data?.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.data?.completed).length
  const activeCount = todos.length - completedCount

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500'
      case 'medium': return 'border-l-yellow-500'
      case 'low': return 'border-l-green-500'
      default: return 'border-l-gray-300'
    }
  }

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
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Todo App
            </h1>
            <p className="text-gray-600 text-center">
              Stay organized and get things done
            </p>
          </div>

          {/* Add Todo Form */}
          <div className="p-6 border-b bg-gray-50">
            <form onSubmit={handleAddTodo} className="flex gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={newTodoTitle}
                  onChange={(e) => setNewTodoTitle(e.target.value)}
                  placeholder="What needs to be done?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={newTodoPriority}
                onChange={(e) => setNewTodoPriority(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
              >
                <Plus size={16} />
                Add
              </button>
            </form>
          </div>

          {/* Error Display */}
          {error && (
            <div className="p-4 bg-red-50 border-b border-red-100">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle size={16} />
                <span>Error: {error}</span>
              </div>
            </div>
          )}

          {/* Filter Tabs */}
          <div className="p-4 border-b bg-gray-50">
            <div className="flex gap-1">
              {['all', 'active', 'completed'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                    filter === filterType
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filterType}
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
              filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={`p-4 flex items-center gap-3 hover:bg-gray-50 border-l-4 ${getPriorityColor(todo.data?.priority)}`}
                >
                  <button
                    onClick={() => handleToggleComplete(todo.id, todo.data?.completed)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      todo.data?.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {todo.data?.completed && <Check size={14} />}
                  </button>
                  
                  <div className="flex-1">
                    <span
                      className={`block ${
                        todo.data?.completed
                          ? 'line-through text-gray-500'
                          : 'text-gray-900'
                      }`}
                    >
                      {todo.data?.title}
                    </span>
                    <span className="text-xs text-gray-400 capitalize">
                      {todo.data?.priority} priority
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="p-4 bg-gray-50 flex items-center justify-between text-sm text-gray-600">
              <span>
                {activeCount} active, {completedCount} completed
              </span>
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Clear completed
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