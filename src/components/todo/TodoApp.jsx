import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Plus, Loader2, AlertCircle, CheckCheck, ClipboardList } from 'lucide-react'
import TodoItem from './TodoItem'

const SCHEMA_NAME = 'Todo Item'

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [adding, setAdding] = useState(false)
  const [filter, setFilter] = useState('all') // 'all' | 'active' | 'completed'

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
      console.error('Fetch error:', apiError)
      setError(apiError.message || 'Failed to load todos')
      setLoading(false)
      return
    }

    const dataPayload = responseData?.data || {}
    console.log('Fetched todos:', dataPayload)
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
      console.error('Add error:', apiError)
      setAdding(false)
      return
    }

    console.log('Created todo:', responseData.data)
    setList(prev => [responseData.data, ...prev])
    setInputValue('')
    setAdding(false)
  }

  const handleToggle = async (item) => {
    const newCompleted = !item.data.completed
    const payload = { data: { title: item.data.title, completed: newCompleted } }

    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .update(payload)
      .eq('id', item.id)
      .select()

    if (apiError || !responseData?.success) {
      console.error('Toggle error:', apiError)
      return
    }

    console.log('Updated todo:', responseData.data)
    setList(prev => prev.map(t => t.id === item.id ? responseData.data : t))
  }

  const handleDelete = async (id) => {
    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .delete()
      .eq('id', id)

    if (apiError || !responseData?.success) {
      console.error('Delete error:', apiError)
      return
    }

    console.log('Deleted todo id:', responseData.data.id)
    setList(prev => prev.filter(t => t.id !== responseData.data.id))
  }

  const handleClearCompleted = async () => {
    const completedItems = list.filter(t => t.data?.completed)
    await Promise.all(completedItems.map(item => handleDelete(item.id)))
  }

  const filteredList = list.filter(item => {
    if (filter === 'active') return !item.data?.completed
    if (filter === 'completed') return item.data?.completed
    return true
  })

  const activeCount = list.filter(t => !t.data?.completed).length
  const completedCount = list.filter(t => t.data?.completed).length

  const filterBtnClass = (f) =>
    `px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-150 border-none
    ${filter === f
      ? 'bg-indigo-600 text-white'
      : 'bg-transparent text-gray-400 hover:text-gray-200'
    }`

  return (
    <div className="min-h-screen bg-gray-950 flex items-start justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ClipboardList className="w-7 h-7 text-indigo-400" />
            <h1 className="text-3xl font-bold text-white tracking-tight">My Todos</h1>
          </div>
          <p className="text-gray-500 text-sm">Stay organized, stay productive.</p>
        </div>

        {/* Input */}
        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            disabled={adding}
            className="flex-1 bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500
              rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <button
            type="submit"
            disabled={adding || !inputValue.trim()}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50
              disabled:cursor-not-allowed text-white rounded-xl px-4 py-3 text-sm font-medium
              transition-colors duration-150 border-none"
          >
            {adding
              ? <Loader2 className="w-4 h-4 animate-spin" />
              : <Plus className="w-4 h-4" />
            }
            Add
          </button>
        </form>

        {/* Filter Tabs */}
        {list.length > 0 && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1 bg-gray-800/60 rounded-lg p-1">
              <button className={filterBtnClass('all')} onClick={() => setFilter('all')}>All</button>
              <button className={filterBtnClass('active')} onClick={() => setFilter('active')}>Active</button>
              <button className={filterBtnClass('completed')} onClick={() => setFilter('completed')}>Completed</button>
            </div>
            <span className="text-xs text-gray-500">
              {activeCount} task{activeCount !== 1 ? 's' : ''} left
            </span>
          </div>
        )}

        {/* List */}
        <div className="space-y-2">
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 text-red-400 bg-red-900/20 border border-red-800/40 rounded-xl px-4 py-3 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          ) : filteredList.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              {filter === 'completed'
                ? 'No completed tasks yet.'
                : filter === 'active'
                ? 'No active tasks. Great job!'
                : 'No tasks yet. Add one above!'}
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

        {/* Footer: Clear Completed */}
        {completedCount > 0 && (
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleClearCompleted}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-400
                bg-transparent border-none transition-colors duration-150 px-2 py-1"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              Clear {completedCount} completed
            </button>
          </div>
        )}

        {/* Footer year */}
        <p className="text-center text-gray-700 text-xs mt-10">
          © {new Date().getFullYear()} My Todos
        </p>
      </div>
    </div>
  )
}

export default TodoApp
