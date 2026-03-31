import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Plus, Trash2, CheckCircle2, Circle, ClipboardList } from 'lucide-react'

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [filter, setFilter] = useState('all') // all | active | completed

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    setLoading(true)
    setError(null)
    const { data: responseData, error: apiError } = await supabase
      .from('Todo Item')
      .select('*')
    if (apiError) { setError(apiError.message); setLoading(false); return }
    const dataPayload = responseData?.data || {}
    setList(dataPayload.list || [])
    setLoading(false)
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setSubmitting(true)
    const { data: responseData, error: apiError } = await supabase
      .from('Todo Item')
      .insert({ data: { title: trimmed, completed: false } })
      .select()
    setSubmitting(false)
    if (apiError || !responseData?.success) { console.error('Add failed:', apiError); return }
    setList(prev => [responseData.data, ...prev])
    setInputValue('')
  }

  const handleToggle = async (item) => {
    const newCompleted = !item.data.completed
    const { data: responseData, error: apiError } = await supabase
      .from('Todo Item')
      .update({ data: { title: item.data.title, completed: newCompleted } })
      .eq('id', item.id)
      .select()
    if (apiError || !responseData?.success) { console.error('Toggle failed:', apiError); return }
    setList(prev => prev.map(t => t.id === item.id ? responseData.data : t))
  }

  const handleDelete = async (id) => {
    const { data: responseData, error: apiError } = await supabase
      .from('Todo Item')
      .delete()
      .eq('id', id)
    if (apiError || !responseData?.success) { console.error('Delete failed:', apiError); return }
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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-violet-600 text-white p-2.5 rounded-xl shadow-md">
          <ClipboardList className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">My Todo List</h1>
      </div>

      <div className="w-full max-w-lg">
        {/* Input Form */}
        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
          />
          <button
            type="submit"
            disabled={submitting || !inputValue.trim()}
            className="bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white px-4 py-3 rounded-xl shadow-sm transition flex items-center gap-1.5 font-medium"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </form>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Filter Tabs */}
          <div className="flex border-b border-gray-100">
            {['all', 'active', 'completed'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-3 text-sm font-medium capitalize transition ${
                  filter === f
                    ? 'text-violet-600 border-b-2 border-violet-600 bg-violet-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* List Body */}
          <div className="divide-y divide-gray-50">
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <div className="w-8 h-8 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin" />
              </div>
            ) : error ? (
              <div className="text-red-500 text-sm text-center py-10 px-4">
                Failed to load todos: {error}
              </div>
            ) : filteredList.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <ClipboardList className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="text-sm">
                  {filter === 'completed' ? 'No completed tasks yet.' : filter === 'active' ? 'No active tasks.' : 'No tasks yet. Add one above!'}
                </p>
              </div>
            ) : (
              filteredList.map(item => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 px-5 py-4 group hover:bg-gray-50 transition"
                >
                  <button
                    onClick={() => handleToggle(item)}
                    className="flex-shrink-0 text-gray-300 hover:text-violet-500 transition"
                    aria-label="Toggle complete"
                  >
                    {item.data.completed
                      ? <CheckCircle2 className="w-5 h-5 text-violet-500" />
                      : <Circle className="w-5 h-5" />
                    }
                  </button>
                  <span className={`flex-1 text-sm leading-relaxed ${item.data.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {item.data.title}
                  </span>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition p-1 rounded-lg hover:bg-red-50"
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
                  className="hover:text-red-500 transition font-medium"
                >
                  Clear completed ({completedCount})
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <p className="mt-10 text-xs text-gray-400">© {new Date().getFullYear()} My Todo App</p>
    </div>
  )
}

export default TodoApp
