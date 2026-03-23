import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Plus, Trash2, Check, X, AlertCircle, Loader2 } from 'lucide-react'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState('all') // all, active, completed

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('TodoItem')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setTodos(dataPayload.list || [])
    } catch (err) {
      console.error('Fetch failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const formatPayload = (data) => {
    return {
      data: {
        title: String(data.title || ''),
        description: String(data.description || ''),
        completed: Boolean(data.completed),
        priority: String(data.priority || 'medium'),
        due_date: data.due_date || null
      }
    }
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    try {
      const payload = formatPayload({
        title: newTodo.trim(),
        completed: false,
        priority: 'medium'
      })

      const { data: responseData, error } = await supabase
        .from('TodoItem')
        .insert(payload)
        .select()

      if (error || !responseData?.success) {
        console.error('Create failed:', error)
        setError('Failed to add todo item')
        return
      }

      const createdItem = responseData.data
      setTodos(prev => [createdItem, ...prev])
      setNewTodo('')
    } catch (err) {
      console.error('Add todo failed:', err)
      setError('Failed to add todo item')
    }
  }

  const handleToggleComplete = async (id, currentCompleted) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id)
      if (!todoToUpdate) return

      const payload = formatPayload({
        ...todoToUpdate.data,
        completed: !currentCompleted
      })

      const { data: responseData, error } = await supabase
        .from('TodoItem')
        .update(payload)
        .eq('id', id)
        .select()

      if (error || !responseData?.success) {
        console.error('Update failed:', error)
        setError('Failed to update todo item')
        return
      }

      const updatedItem = responseData.data
      setTodos(prev => prev.map(todo => todo.id === id ? updatedItem : todo))
    } catch (err) {
      console.error('Toggle complete failed:', err)
      setError('Failed to update todo item')
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      const { data: responseData, error } = await supabase
        .from('TodoItem')
        .delete()
        .eq('id', id)

      if (error || !responseData?.success) {
        console.error('Delete failed:', error)
        setError('Failed to delete todo item')
        return
      }

      const deletedId = responseData.data.id
      setTodos(prev => prev.filter(todo => todo.id !== deletedId))
    } catch (err) {
      console.error('Delete todo failed:', err)
      setError('Failed to delete todo item')
    }
  }

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter(todo => todo.data?.completed)
    
    try {
      for (const todo of completedTodos) {
        await handleDeleteTodo(todo.id)
      }
    } catch (err) {
      console.error('Clear completed failed:', err)
      setError('Failed to clear completed todos')
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
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="animate-spin" size={24} />
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
              Todo App
            </h1>
            
            {/* Add Todo Form */}
            <form onSubmit={handleAddTodo} className="flex gap-2">
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
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
              >
                <Plus size={20} />
                Add
              </button>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
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

          {/* Filter Tabs */}
          <div className="px-6 py-4 border-b bg-gray-50">
            <div className="flex gap-1">
              {[
                { key: 'all', label: 'All', count: todos.length },
                { key: 'active', label: 'Active', count: activeTodosCount },
                { key: 'completed', label: 'Completed', count: completedTodosCount }
              ].map(({ key, label, count }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filter === key
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
                {filter === 'active' && 'No active todos. Great job!'}
                {filter === 'completed' && 'No completed todos yet.'}
              </div>
            ) : (
              filteredTodos.map(todo => (
                <div
                  key={todo.id}
                  className={`p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                    todo.data?.completed ? 'opacity-75' : ''
                  }`}
                >
                  <button
                    onClick={() => handleToggleComplete(todo.id, todo.data?.completed)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      todo.data?.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {todo.data?.completed && <Check size={14} />}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium ${
                      todo.data?.completed 
                        ? 'line-through text-gray-500' 
                        : 'text-gray-900'
                    }`}>
                      {todo.data?.title}
                    </div>
                    {todo.data?.description && (
                      <div className={`text-sm mt-1 ${
                        todo.data?.completed 
                          ? 'line-through text-gray-400' 
                          : 'text-gray-600'
                      }`}>
                        {todo.data.description}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="flex-shrink-0 p-2 text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="p-4 bg-gray-50 border-t flex items-center justify-between text-sm text-gray-600">
              <span>
                {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
              </span>
              
              {completedTodosCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  Clear completed ({completedTodosCount})
                </button>
              )}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Todo App - Stay organized and productive!
        </div>
      </div>
    </div>
  )
}

export default TodoApp