import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Plus, Trash2, Check, X, AlertCircle, Loader2 } from 'lucide-react'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodo, setNewTodo] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newPriority, setNewPriority] = useState('medium')

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
      ...data,
      completed: typeof data.completed === 'boolean' ? data.completed : data.completed === 'true'
    }
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    const rawPayload = {
      title: newTodo.trim(),
      description: newDescription.trim() || undefined,
      completed: false,
      priority: newPriority
    }

    const formattedPayload = formatPayload(rawPayload)

    try {
      const { data: responseData, error } = await supabase
        .from('TodoItem')
        .insert(formattedPayload)
        .select()

      if (error || !responseData?.success) {
        console.error('Create failed:', error)
        alert('Failed to add todo')
        return
      }

      const createdItem = responseData.data
      setTodos(prev => [createdItem, ...prev])
      setNewTodo('')
      setNewDescription('')
      setNewPriority('medium')
    } catch (err) {
      console.error('Add todo error:', err)
      alert('Failed to add todo')
    }
  }

  const handleToggleComplete = async (id, currentCompleted) => {
    const todo = todos.find(t => t.id === id)
    if (!todo) return

    const rawPayload = {
      ...todo,
      completed: !currentCompleted
    }

    const formattedPayload = formatPayload(rawPayload)

    try {
      const { data: responseData, error } = await supabase
        .from('TodoItem')
        .update(formattedPayload)
        .eq('id', id)
        .select()

      if (error || !responseData?.success) {
        console.error('Update failed:', error)
        alert('Failed to update todo')
        return
      }

      const updatedItem = responseData.data
      setTodos(prev => prev.map(item => item.id === id ? updatedItem : item))
    } catch (err) {
      console.error('Toggle complete error:', err)
      alert('Failed to update todo')
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
        alert('Failed to delete todo')
        return
      }

      const deletedId = responseData.data.id
      setTodos(prev => prev.filter(item => item.id !== deletedId))
    } catch (err) {
      console.error('Delete todo error:', err)
      alert('Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter(todo => todo.completed)
    if (completedTodos.length === 0) return

    try {
      for (const todo of completedTodos) {
        const { data: responseData, error } = await supabase
          .from('TodoItem')
          .delete()
          .eq('id', todo.id)

        if (error || !responseData?.success) {
          console.error('Delete failed:', error)
          continue
        }
      }

      setTodos(prev => prev.filter(item => !item.completed))
    } catch (err) {
      console.error('Clear completed error:', err)
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

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Todo List</h1>
        <p className="text-gray-600">
          {totalCount} total, {completedCount} completed
        </p>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new todo..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Description (optional)"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-3">
            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
            >
              <Plus size={16} />
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
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center gap-2"
          >
            <Trash2 size={16} />
            Clear Completed ({completedCount})
          </button>
        </div>
      )}

      {/* Todo List */}
      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-gray-500 text-center p-8">
            <p className="text-lg">No todos yet!</p>
            <p className="text-sm">Add your first todo above to get started.</p>
          </div>
        ) : (
          todos.map(todo => (
            <div
              key={todo.id}
              className={`p-4 border rounded-lg transition-all duration-200 ${
                todo.completed 
                  ? 'bg-gray-50 border-gray-200 opacity-75' 
                  : 'bg-white border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => handleToggleComplete(todo.id, todo.completed)}
                  className={`mt-1 p-1 rounded-full transition-colors ${
                    todo.completed
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'border-2 border-gray-300 hover:border-green-500 hover:bg-green-50'
                  }`}
                >
                  {todo.completed ? <Check size={16} /> : <div className="w-4 h-4" />}
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
                    <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(todo.priority)}`}>
                      {todo.priority}
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
                  className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                >
                  <Trash2 size={16} />
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