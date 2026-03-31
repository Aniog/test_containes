import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Plus, Trash2, CheckCircle2, Circle, ClipboardList, Loader2, AlertCircle } from 'lucide-react'

const SCHEMA_NAME = 'Todo Item'

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [adding, setAdding] = useState(false)
  const [filter, setFilter] = useState('all') // all | active | completed

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
      setError(apiError.message || 'Failed to load todos')
      setLoading(false)
      return
    }
    const payload = responseData?.data || {}
    setList(payload.list || [])
    setLoading(false)
  }

  const handleAdd = async () => {
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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  const handleToggle = async (item) => {
    const newCompleted = !item.data.completed
    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .update({ data: { title: item.data.title, completed: newCompleted } })
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
    if (filter === 'active') return !t.data.completed
    if (filter === 'completed') return t.data.completed
    return true
  })

  const activeCount = list.filter(t => !t.data.completed).length
  const completedCount = list.filter(t => t.data.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-md">
          <ClipboardList className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">My Todo List</h1>
      </div>

      <div className="w-full max-w-lg">
        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
          <button
            onClick={handleAdd}
            disabled={adding || !inputValue.trim()}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-5 py-3 rounded-xl font-semibold shadow-sm transition-colors"
          >
            {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Add
          </button>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {/* Filter Tabs */}
          <div className="flex border-b border-gray-100">
            {['all', 'active', 'completed'].map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`flex-1 py-3 text-sm font-medium capitalize transition-colors ${
                  filter === tab
                    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* List Body */}
          <div className="divide-y divide-gray-50">
            {loading ? (
              <div className="flex justify-center items-center py-16 text-indigo-400">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className="text-sm text-gray-500">Loading todos...</span>
              </div>
            ) : error ? (
              <div className="flex items-center gap-2 p-6 text-red-500 bg-red-50">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Error: {error}</span>
              </div>
            ) : filteredList.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <ClipboardList className="w-10 h-10 mb-3 opacity-30" />
                <p className="text-sm">
                  {filter === 'completed' ? 'No completed tasks yet.' : filter === 'active' ? 'No active tasks.' : 'No tasks yet. Add one above!'}
                </p>
              </div>
            ) : (
              filteredList.map(item => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors group"
                >
                  <button
                    onClick={() => handleToggle(item)}
                    className="flex-shrink-0 text-gray-300 hover:text-indigo-500 transition-colors"
                    aria-label="Toggle complete"
                  >
                    {item.data.completed
                      ? <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                      : <Circle className="w-5 h-5" />
                    }
                  </button>
                  <span className={`flex-1 text-sm leading-relaxed ${item.data.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {item.data.title}
                  </span>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition-all"
                    aria-label="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {!loading && !error && list.length > 0 && (
            <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-400">
              <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="hover:text-red-500 transition-colors font-medium"
                >
                  Clear completed ({completedCount})
                </button>
              )}
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} My Todo App
        </p>
      </div>
    </div>
  )
}

export default TodoApp
