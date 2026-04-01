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
    const dataPayload = responseData?.data || {}
    setList(dataPayload.list || [])
    setLoading(false)
  }

  const handleAdd = async () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setAdding(true)
    const payload = { data: { title: trimmed, completed: false } }
    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .insert(payload)
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
    const payload = { data: { title: item.data.title, completed: !item.data.completed } }
    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .update(payload)
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
    const completed = list.filter(t => t.data?.completed)
    await Promise.all(completed.map(t => handleDelete(t.id)))
  }

  const filteredList = list.filter(t => {
    if (filter === 'active') return !t.data?.completed
    if (filter === 'completed') return t.data?.completed
    return true
  })

  const activeCount = list.filter(t => !t.data?.completed).length
  const completedCount = list.filter(t => t.data?.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow">
          <ClipboardList className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Todo List</h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Input Area */}
        <div className="p-5 border-b border-slate-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm transition"
            />
            <button
              onClick={handleAdd}
              disabled={adding || !inputValue.trim()}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition shadow-sm"
            >
              {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
              Add
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-slate-100 bg-slate-50">
          {['all', 'active', 'completed'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2.5 text-xs font-semibold uppercase tracking-wide transition border-b-2 ${
                filter === f
                  ? 'border-blue-500 text-blue-600 bg-white'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List Body */}
        <div className="divide-y divide-slate-100 min-h-[120px]">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 text-red-500 p-6 bg-red-50">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          ) : filteredList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400 gap-2">
              <ClipboardList className="w-8 h-8 opacity-40" />
              <p className="text-sm">
                {filter === 'completed' ? 'No completed tasks yet.' : filter === 'active' ? 'No active tasks!' : 'No todos yet. Add one above!'}
              </p>
            </div>
          ) : (
            filteredList.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-3 px-5 py-3.5 group hover:bg-slate-50 transition"
              >
                <button
                  onClick={() => handleToggle(item)}
                  className="flex-shrink-0 text-slate-300 hover:text-blue-500 transition p-0 border-0 bg-transparent"
                >
                  {item.data?.completed
                    ? <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    : <Circle className="w-5 h-5" />
                  }
                </button>
                <span className={`flex-1 text-sm ${item.data?.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                  {item.data?.title}
                </span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition p-0 border-0 bg-transparent"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {!loading && !error && list.length > 0 && (
          <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-t border-slate-100">
            <span className="text-xs text-slate-400">
              {activeCount} item{activeCount !== 1 ? 's' : ''} left
            </span>
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="text-xs text-slate-400 hover:text-red-500 transition border-0 bg-transparent p-0"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        )}
      </div>

      <p className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} My Todo App</p>
    </div>
  )
}

export default TodoApp
