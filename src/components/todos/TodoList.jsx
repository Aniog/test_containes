import React, { useEffect, useState } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Loader2, AlertCircle, Filter, CheckCircle, Clock, AlertTriangle } from 'lucide-react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
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

  const formatPayload = (rawData) => {
    return {
      title: String(rawData.title || ''),
      description: String(rawData.description || ''),
      completed: typeof rawData.completed === 'boolean' ? rawData.completed : rawData.completed === 'true',
      priority: String(rawData.priority || 'medium'),
      due_date: rawData.due_date || null
    }
  }

  const handleAdd = async (rawTodoData) => {
    const formattedPayload = formatPayload(rawTodoData)

    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .insert(formattedPayload)
      .select()

    if (error || !responseData?.success) {
      console.error("Create failed:", error)
      alert("Failed to add todo")
      return
    }

    const createdTodo = responseData.data
    setTodos(prev => [createdTodo, ...prev])
  }

  const handleUpdate = async (id, rawUpdates) => {
    const formattedPayload = formatPayload(rawUpdates)

    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .update(formattedPayload)
      .eq('id', id)
      .select()

    if (error || !responseData?.success) {
      console.error("Update failed:", error)
      alert("Failed to update todo")
      return
    }

    const updatedTodo = responseData.data
    setTodos(prev => prev.map(todo => todo.id === id ? updatedTodo : todo))
  }

  const handleDelete = async (id) => {
    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .delete()
      .eq('id', id)

    if (error || !responseData?.success) {
      console.error("Delete failed:", error)
      alert("Failed to delete todo")
      return
    }

    const deletedId = responseData.data.id
    setTodos(prev => prev.filter(todo => todo.id !== deletedId))
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  const getStats = () => {
    const total = todos.length
    const completed = todos.filter(todo => todo.completed).length
    const active = total - completed
    const overdue = todos.filter(todo => 
      todo.due_date && 
      new Date(todo.due_date) < new Date() && 
      !todo.completed
    ).length

    return { total, completed, active, overdue }
  }

  const stats = getStats()
  const filteredTodos = getFilteredTodos()

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
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
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Todo List</h1>
        <p className="text-gray-600">Stay organized and get things done</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Total</span>
          </div>
          <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-600">Active</span>
          </div>
          <p className="text-2xl font-bold text-yellow-900">{stats.active}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-600">Completed</span>
          </div>
          <p className="text-2xl font-bold text-green-900">{stats.completed}</p>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-sm font-medium text-red-600">Overdue</span>
          </div>
          <p className="text-2xl font-bold text-red-900">{stats.overdue}</p>
        </div>
      </div>

      <TodoForm onAdd={handleAdd} />

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All ({stats.total})
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'active'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Active ({stats.active})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'completed'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Completed ({stats.completed})
        </button>
      </div>

      {/* Todo List */}
      <div className="space-y-3">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <CheckCircle className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              {filter === 'completed' ? 'No completed todos yet' :
               filter === 'active' ? 'No active todos' :
               'No todos yet'}
            </h3>
            <p className="text-gray-400">
              {filter === 'all' ? 'Add your first todo above to get started!' :
               filter === 'active' ? 'All your todos are completed!' :
               'Complete some todos to see them here.'}
            </p>
          </div>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList