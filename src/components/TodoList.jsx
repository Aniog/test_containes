import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Plus, Loader2, AlertCircle, CheckCircle, Filter, Search } from 'lucide-react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [filter, setFilter] = useState('all') // all, completed, pending
  const [searchTerm, setSearchTerm] = useState('')

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
        .order('created_at', { ascending: false })

      if (apiError) throw apiError

      console.log('Fetched todos:', responseData)
      const dataPayload = responseData?.data || {}
      setTodos(dataPayload.list || [])

    } catch (err) {
      console.error('Fetch failed:', err)
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }

  const formatPayload = (data) => {
    return {
      data: {
        ...data,
        completed: typeof data.completed === 'boolean' ? data.completed : data.completed === 'true',
        tags: Array.isArray(data.tags) ? data.tags : []
      }
    }
  }

  const handleCreate = async (todoData) => {
    try {
      const formattedPayload = formatPayload(todoData)
      console.log('Creating todo with payload:', formattedPayload)

      const { data: responseData, error } = await supabase
        .from('TodoItem')
        .insert(formattedPayload)
        .select()

      if (error || !responseData?.success) {
        console.error('Create failed:', error)
        alert('Failed to create todo')
        return
      }

      console.log('Created todo:', responseData.data)
      const createdItem = responseData.data
      setTodos(prev => [createdItem, ...prev])

    } catch (err) {
      console.error('Create error:', err)
      alert('Failed to create todo')
    }
  }

  const handleUpdate = async (id, updates) => {
    try {
      const formattedPayload = formatPayload(updates)
      console.log('Updating todo with payload:', formattedPayload)

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

      console.log('Updated todo:', responseData.data)
      const updatedItem = responseData.data
      setTodos(prev => prev.map(item => item.id === id ? updatedItem : item))

    } catch (err) {
      console.error('Update error:', err)
      alert('Failed to update todo')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this todo?')) return

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

      console.log('Deleted todo:', responseData.data)
      const deletedId = responseData.data.id
      setTodos(prev => prev.filter(item => item.id !== deletedId))

    } catch (err) {
      console.error('Delete error:', err)
      alert('Failed to delete todo')
    }
  }

  const handleToggleComplete = async (id, completed) => {
    const todo = todos.find(t => t.id === id)
    if (!todo) return

    const updatedData = {
      ...todo.data,
      completed
    }

    await handleUpdate(id, updatedData)
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    setIsFormOpen(true)
  }

  const handleFormSubmit = async (todoData) => {
    if (editingItem) {
      await handleUpdate(editingItem.id, todoData)
      setEditingItem(null)
    } else {
      await handleCreate(todoData)
    }
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingItem(null)
  }

  // Filter and search todos
  const filteredTodos = todos.filter(todo => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'completed' && todo.data?.completed) ||
      (filter === 'pending' && !todo.data?.completed)

    const matchesSearch = 
      !searchTerm ||
      todo.data?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.data?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.data?.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesFilter && matchesSearch
  })

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.data?.completed).length,
    pending: todos.filter(t => !t.data?.completed).length
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
        <span className="ml-2 text-gray-600">Loading todos...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
        <AlertCircle size={20} />
        <span>Error: {error}</span>
        <button 
          onClick={fetchTodos}
          className="ml-auto px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Todo List</h1>
        <p className="text-gray-600">Organize your tasks and stay productive</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{stats.total}</span>
            </div>
            <span className="text-blue-800 font-medium">Total Tasks</span>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <span className="text-green-800 font-medium">{stats.completed} Completed</span>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{stats.pending}</span>
            </div>
            <span className="text-yellow-800 font-medium">Pending</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Tasks</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Add Button */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 font-medium"
        >
          <Plus size={16} />
          Add Todo
        </button>
      </div>

      {/* Todo List */}
      <div className="space-y-3">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <CheckCircle size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm || filter !== 'all' ? 'No matching todos' : 'No todos yet'}
            </h3>
            <p className="text-gray-500 mb-4">
              {searchTerm || filter !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Get started by adding your first todo item'
              }
            </p>
            {!searchTerm && filter === 'all' && (
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Add Your First Todo
              </button>
            )}
          </div>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              item={todo}
              onToggle={handleToggleComplete}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Form Modal */}
      <TodoForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        editingItem={editingItem}
      />
    </div>
  )
}

export default TodoList