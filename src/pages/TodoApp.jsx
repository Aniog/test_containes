import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import TodoInput from '@/components/todo/TodoInput'
import TodoList from '@/components/todo/TodoList'
import TodoFooter from '@/components/todo/TodoFooter'
import { Loader2, AlertCircle, CheckSquare } from 'lucide-react'

const FILTERS = ['All', 'Active', 'Completed']

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
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
    if (apiError) { setError(apiError.message); setLoading(false); return }
    const payload = responseData?.data || {}
    setList(payload.list || [])
    setLoading(false)
  }

  const handleAdd = async (title) => {
    const { data: responseData, error: apiError } = await supabase
      .from('Todo Item')
      .insert({ data: { title, completed: false } })
      .select()
    if (apiError || !responseData?.success) {
      console.error('Add failed:', apiError)
      return
    }
    setList(prev => [responseData.data, ...prev])
  }

  const handleToggle = async (item) => {
    const { data: responseData, error: apiError } = await supabase
      .from('Todo Item')
      .update({ data: { title: item.data.title, completed: !item.data.completed } })
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
      .from('Todo Item')
      .delete()
      .eq('id', id)
    if (apiError || !responseData?.success) {
      console.error('Delete failed:', apiError)
      return
    }
    setList(prev => prev.filter(t => t.id !== responseData.data.id))
  }

  const handleClearCompleted = async () => {
    const completed = list.filter(t => t.data.completed)
    await Promise.all(completed.map(t =>
      supabase.from('Todo Item').delete().eq('id', t.id)
    ))
    setList(prev => prev.filter(t => !t.data.completed))
  }

  const filteredList = list.filter(t => {
    if (filter === 'Active') return !t.data.completed
    if (filter === 'Completed') return t.data.completed
    return true
  })

  const activeCount = list.filter(t => !t.data.completed).length
  const completedCount = list.filter(t => t.data.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex flex-col items-center px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-violet-600 text-white p-2 rounded-xl">
          <CheckSquare size={28} />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">My Todos</h1>
      </div>

      <div className="w-full max-w-lg">
        {/* Input */}
        <TodoInput onAdd={handleAdd} />

        {/* Filter Tabs */}
        <div className="flex gap-1 mt-5 mb-3 bg-gray-100 rounded-xl p-1">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                filter === f
                  ? 'bg-white text-violet-700 shadow-sm font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center py-16 text-violet-500">
              <Loader2 className="animate-spin" size={28} />
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 p-6 text-red-500 bg-red-50">
              <AlertCircle size={20} />
              <span className="text-sm">Error: {error}</span>
            </div>
          ) : (
            <TodoList
              items={filteredList}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </div>

        {/* Footer */}
        {!loading && !error && (
          <TodoFooter
            activeCount={activeCount}
            completedCount={completedCount}
            onClearCompleted={handleClearCompleted}
          />
        )}
      </div>

      <p className="mt-10 text-xs text-gray-400">
        © {new Date().getFullYear()} My Todos App
      </p>
    </div>
  )
}

export default TodoApp
