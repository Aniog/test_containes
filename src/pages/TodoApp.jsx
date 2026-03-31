import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Loader2, AlertCircle, ClipboardList } from 'lucide-react'
import TodoInput from '@/components/todos/TodoInput'
import TodoItem from '@/components/todos/TodoItem'
import TodoFooter from '@/components/todos/TodoFooter'

const SCHEMA_NAME = 'Todo Item'

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [mutating, setMutating] = useState(false)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    setLoading(true)
    setError(null)
    const { data: responseData, error: apiError } = await supabase.from(SCHEMA_NAME).select('*')
    if (apiError) {
      setError(apiError.message || 'Failed to load todos')
      setLoading(false)
      return
    }
    const payload = responseData?.data || {}
    setList(payload.list || [])
    setLoading(false)
  }

  const handleAdd = async (title) => {
    setMutating(true)
    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .insert({ data: { title, completed: false } })
      .select()
    setMutating(false)
    if (apiError || !responseData?.success) {
      console.error('Create failed:', apiError)
      return
    }
    setList((prev) => [responseData.data, ...prev])
  }

  const handleToggle = async (item) => {
    const updated = { data: { title: item.data.title, completed: !item.data.completed } }
    const { data: responseData, error: apiError } = await supabase
      .from(SCHEMA_NAME)
      .update(updated)
      .eq('id', item.id)
      .select()
    if (apiError || !responseData?.success) {
      console.error('Update failed:', apiError)
      return
    }
    const updatedItem = responseData.data
    setList((prev) => prev.map((t) => (t.id === item.id ? updatedItem : t)))
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
    setList((prev) => prev.filter((t) => t.id !== deletedId))
  }

  const handleClearCompleted = async () => {
    const completed = list.filter((t) => t.data.completed)
    await Promise.all(completed.map((t) => handleDelete(t.id)))
  }

  const filteredList = list.filter((t) => {
    if (filter === 'Active') return !t.data.completed
    if (filter === 'Completed') return t.data.completed
    return true
  })

  const activeCount = list.filter((t) => !t.data.completed).length
  const completedCount = list.filter((t) => t.data.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-start justify-center pt-16 px-4 pb-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-2xl shadow-lg mb-4">
            <ClipboardList size={28} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">My Tasks</h1>
          <p className="text-sm text-gray-400 mt-1">Stay organized, stay productive</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-5">
          {/* Input */}
          <TodoInput onAdd={handleAdd} loading={mutating} />

          {/* List */}
          {loading ? (
            <div className="flex justify-center py-10">
              <Loader2 className="animate-spin text-emerald-400" size={28} />
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-100 rounded-lg text-red-500 text-sm">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          ) : filteredList.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <p className="text-sm font-medium">
                {filter === 'All' ? 'No tasks yet. Add one above!' : `No ${filter.toLowerCase()} tasks.`}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {filteredList.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}

          {/* Footer */}
          <TodoFooter
            total={list.length}
            activeCount={activeCount}
            completedCount={completedCount}
            filter={filter}
            onFilterChange={setFilter}
            onClearCompleted={handleClearCompleted}
          />
        </div>

        <p className="text-center text-xs text-gray-300 mt-6">
          © {new Date().getFullYear()} My Tasks App
        </p>
      </div>
    </div>
  )
}

export default TodoApp
