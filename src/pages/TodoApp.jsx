import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Plus, Trash2, CheckCircle2, Circle, ClipboardList, Loader2, AlertCircle } from 'lucide-react'

const FILTERS = ['All', 'Active', 'Completed']

const TodoApp = () => {
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
      .from('Todo Item')
      .select('*')
    if (apiError) {
      console.error('Fetch error:', apiError)
      setError(apiError.message || 'Failed to load todos.')
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
      .from('Todo Item')
      .insert(payload)
      .select()
    if (apiError || !responseData?.success) {
      console.error('Add error:', apiError)
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
      .from('Todo Item')
      .update(payload)
      .eq('id', item.id)
      .select()
    if (apiError || !responseData?.success) {
      console.error('Toggle error:', apiError)
      return
    }
    const updated = responseData.data
    setList(prev => prev.map(t => t.id === item.id ? updated : t))
  }

  const handleDelete = async (id) => {
    const { data: responseData, error: apiError } = await supabase
      .from('Todo Item')
      .delete()
      .eq('id', id)
    if (apiError || !responseData?.success) {
      console.error('Delete error:', apiError)
      return
    }
    const deletedId = responseData.data.id
    setList(prev => prev.filter(t => t.id !== deletedId))
  }

  const handleClearCompleted = async () => {
    const completed = list.filter(t => t.data?.completed)
    for (const t of completed) {
      await handleDelete(t.id)
    }
  }

  const filteredList = list.filter(t => {
    if (filter === 'Active') return !t.data?.completed
    if (filter === 'Completed') return t.data?.completed
    return true
  })

  const activeCount = list.filter(t => !t.data?.completed).length
  const completedCount = list.filter(t => t.data?.completed).length

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
        {/* Add Input */}
        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            disabled={adding}
          />
          <button
            type="submit"
            disabled={adding || !inputValue.trim()}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-5 py-3 rounded-xl font-semibold shadow-sm transition-colors"
          >
            {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Add
          </button>
        </form>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {/* Filter Tabs */}
          <div className="flex border-b border-gray-100">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                  filter === f
                    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[200px]">
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <Loader2 className="w-7 h-7 text-indigo-400 animate-spin" />
              </div>
            ) : error ? (
              <div className="flex items-center gap-2 text-red-500 bg-red-50 m-4 p-4 rounded-xl border border-red-100">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            ) : filteredList.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <ClipboardList className="w-10 h-10 mb-3 opacity-40" />
                <p className="text-sm">
                  {filter === 'All' ? 'No tasks yet. Add one above!' : `No ${filter.toLowerCase()} tasks.`}
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-50">
                {filteredList.map(item => (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 px-5 py-4 group hover:bg-gray-50 transition-colors"
                  >
                    <button
                      onClick={() => handleToggle(item)}
                      className="flex-shrink-0 text-gray-300 hover:text-indigo-500 transition-colors"
                      aria-label="Toggle complete"
                    >
                      {item.data?.completed
                        ? <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                        : <Circle className="w-5 h-5" />}
                    </button>
                    <span
                      className={`flex-1 text-sm leading-relaxed ${
                        item.data?.completed ? 'line-through text-gray-400' : 'text-gray-700'
                      }`}
                    >
                      {item.data?.title}
                    </span>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition-all"
                      aria-label="Delete task"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {!loading && !error && list.length > 0 && (
            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50">
              <span className="text-xs text-gray-400">
                {activeCount} {activeCount === 1 ? 'item' : 'items'} left
              </span>
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="text-xs text-gray-400 hover:text-red-500 transition-colors font-medium"
                >
                  Clear completed ({completedCount})
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} My Todo App
        </p>
      </div>
    </div>
  )
}

export default TodoApp
