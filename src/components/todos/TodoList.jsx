import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Loader2, AlertCircle, Plus, CheckCheck, ClipboardList } from 'lucide-react'
import TodoItem from './TodoItem'

const SCHEMA_NAME = 'Todo Item'

const TodoList = () => {
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

  const handleAdd = async (e) => {
    e.preventDefault()
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
    const updated = responseData.data
    setList(prev => prev.map(t => t.id === item.id ? updated : t))
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

  const filtered = list.filter(t => {
    if (filter === 'active') return !t.data?.completed
    if (filter === 'completed') return t.data?.completed
    return true
  })

  const activeCount = list.filter(t => !t.data?.completed).length
  const completedCount = list.filter(t => t.data?.completed).length

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-emerald-500" size={32} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex gap-2 items-center p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
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
          className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent shadow-sm"
          disabled={adding}
        />
        <button
          type="submit"
          disabled={adding || !inputValue.trim()}
          className="flex items-center gap-1.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-200 disabled:text-slate-400 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
        >
          {adding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
          Add
        </button>
      </form>

      {/* Filter Tabs */}
      {list.length > 0 && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
            {['all', 'active', 'completed'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md capitalize transition-colors ${
                  filter === f
                    ? 'bg-white text-slate-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-400 font-medium">
            {activeCount} item{activeCount !== 1 ? 's' : ''} left
          </span>
        </div>
      )}

      {/* Todo List */}
      <div className="flex flex-col gap-2">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 text-slate-400">
            <ClipboardList size={40} strokeWidth={1.5} />
            <p className="text-sm font-medium">
              {filter === 'completed' ? 'No completed tasks yet' :
               filter === 'active' ? 'All tasks are done!' :
               'No tasks yet — add one above!'}
            </p>
          </div>
        ) : (
          filtered.map(item => (
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
        <div className="mt-5 flex justify-center">
          <button
            onClick={handleClearCompleted}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-slate-200 hover:border-red-200"
          >
            <CheckCheck size={14} />
            Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
          </button>
        </div>
      )}
    </div>
  )
}

export default TodoList
