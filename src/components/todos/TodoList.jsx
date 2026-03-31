import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Loader2, AlertCircle, Plus, Trash2, ClipboardList } from 'lucide-react'
import TodoItem from './TodoItem'

const SCHEMA_NAME = 'Todo Item'
const FILTERS = ['All', 'Active', 'Completed']

const TodoList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [adding, setAdding] = useState(false)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    setLoading(true)
    setError(null)
    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .select('*')
    if (apiError) {
      setError(apiError.message)
      setLoading(false)
      return
    }
    const dataPayload = responseData?.data || {}
    setList(dataPayload.list || [])
    setLoading(false)
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setAdding(true)
    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .insert({ data: { title: trimmed, completed: false } })
      .select()
    if (apiError || !responseData?.success) {
      console.error('Add failed:', apiError)
      setAdding(false)
      return
    }
    setList(prev => [responseData.data, ...prev])
    setInputValue('')
    setAdding(false)
  }

  const handleToggle = async (item) => {
    const updated = { data: { title: item.data.title, completed: !item.data.completed } }
    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .update(updated)
      .eq('id', item.id)
      .select()
    if (apiError || !responseData?.success) {
      console.error('Toggle failed:', apiError)
      return
    }
    setList(prev => prev.map(t => t.id === item.id ? responseData.data : t))
  }

  const handleDelete = async (id) => {
    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .delete()
      .eq('id', id)
    if (apiError || !responseData?.success) {
      console.error('Delete failed:', apiError)
      return
    }
    const deletedId = responseData.data.id
    setList(prev => prev.filter(t => t.id !== deletedId))
  }

  const handleClearCompleted = async () => {
    const completed = list.filter(t => t.data.completed)
    await Promise.all(completed.map(t => handleDelete(t.id)))
  }

  const filteredList = list.filter(t => {
    if (filter === 'Active') return !t.data.completed
    if (filter === 'Completed') return t.data.completed
    return true
  })

  const activeCount = list.filter(t => !t.data.completed).length
  const completedCount = list.filter(t => t.data.completed).length

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-indigo-500" size={32} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 p-4 text-red-600 bg-red-50 rounded-lg border border-red-100">
        <AlertCircle size={18} />
        <span className="text-sm">Error: {error}</span>
      </div>
    )
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Add Todo Form */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent shadow-sm"
          disabled={adding}
        />
        <button
          type="submit"
          disabled={adding || !inputValue.trim()}
          className="flex items-center gap-1.5 px-4 py-3 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
        >
          {adding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
          Add
        </button>
      </form>

      {/* Filter Tabs */}
      {list.length > 0 && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  filter === f
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-400">{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
        </div>
      )}

      {/* Todo List */}
      <div className="flex flex-col gap-2">
        {filteredList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <ClipboardList size={40} className="mb-3 opacity-40" />
            <p className="text-sm">
              {filter === 'All' ? 'No todos yet. Add one above!' : `No ${filter.toLowerCase()} todos.`}
            </p>
          </div>
        ) : (
          filteredList.map(item => (
            <TodoItem
              key={item.id}
              item={item}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Clear Completed */}
      {completedCount > 0 && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleClearCompleted}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={13} />
            Clear completed ({completedCount})
          </button>
        </div>
      )}
    </div>
  )
}

export default TodoList
