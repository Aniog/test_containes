import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Loader2, AlertCircle, Plus, Trash2, CheckCircle2, Circle, ClipboardList } from 'lucide-react'

const FILTERS = ['All', 'Active', 'Completed']

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('All')
  const [adding, setAdding] = useState(false)

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
    const payload = responseData?.data || {}
    setList(payload.list || [])
    setLoading(false)
  }

  const handleAdd = async () => {
    const title = inputValue.trim()
    if (!title) return
    setAdding(true)
    const { data: responseData, error: apiError } = await supabase
      .from('Todo Item')
      .insert({ data: { title, completed: false } })
      .select()
    setAdding(false)
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
    const updated = responseData.data
    setList(prev => prev.map(t => t.id === item.id ? updated : t))
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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  const filtered = list.filter(t => {
    if (filter === 'Active') return !t.data.completed
    if (filter === 'Completed') return t.data.completed
    return true
  })

  const activeCount = list.filter(t => !t.data.completed).length
  const completedCount = list.filter(t => t.data.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-violet-600 text-white p-2.5 rounded-xl shadow-md">
          <ClipboardList size={26} />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">My Todos</h1>
      </div>

      {/* Input */}
      <div className="w-full max-w-lg flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
        />
        <button
          onClick={handleAdd}
          disabled={adding || !inputValue.trim()}
          className="flex items-center gap-1.5 px-5 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white font-semibold rounded-xl shadow-sm transition-colors"
        >
          {adding ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
          Add
        </button>
      </div>

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        {/* Filter Tabs */}
        <div className="flex border-b border-gray-100">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                filter === f
                  ? 'text-violet-600 border-b-2 border-violet-600 bg-violet-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="min-h-[200px]">
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 size={28} className="animate-spin text-violet-400" />
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 text-red-500 bg-red-50 m-4 p-4 rounded-lg border border-red-100">
              <AlertCircle size={18} />
              <span className="text-sm">Error: {error}</span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400 gap-2">
              <ClipboardList size={36} className="opacity-30" />
              <p className="text-sm">
                {filter === 'All' ? 'No todos yet. Add one above!' : `No ${filter.toLowerCase()} tasks.`}
              </p>
            </div>
          ) : (
            <ul>
              {filtered.map((item, idx) => (
                <li
                  key={item.id}
                  className={`flex items-center gap-3 px-5 py-4 group transition-colors hover:bg-gray-50 ${
                    idx !== filtered.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <button
                    onClick={() => handleToggle(item)}
                    className="flex-shrink-0 text-gray-300 hover:text-violet-500 transition-colors"
                    aria-label="Toggle complete"
                  >
                    {item.data.completed
                      ? <CheckCircle2 size={22} className="text-violet-500" />
                      : <Circle size={22} />}
                  </button>
                  <span className={`flex-1 text-sm leading-relaxed ${
                    item.data.completed ? 'line-through text-gray-400' : 'text-gray-700'
                  }`}>
                    {item.data.title}
                  </span>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition-all"
                    aria-label="Delete todo"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {!loading && !error && list.length > 0 && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-500">
            <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="text-gray-400 hover:text-red-500 transition-colors font-medium"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        )}
      </div>

      <p className="mt-8 text-xs text-gray-400">© {new Date().getFullYear()} My Todos App</p>
    </div>
  )
}

export default TodoApp
