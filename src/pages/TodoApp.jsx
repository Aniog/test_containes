import React, { useState, useEffect } from 'react'
import { Loader2, AlertCircle, ClipboardList } from 'lucide-react'
import TodoInput from '@/components/todo/TodoInput'
import TodoItem from '@/components/todo/TodoItem'
import TodoFooter from '@/components/todo/TodoFooter'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'

const FILTERS = { All: () => true, Active: (i) => !i.data?.completed, Completed: (i) => i.data?.completed }

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [busy, setBusy] = useState(false)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    setLoading(true)
    setError(null)
    const data = await fetchTodos()
    setList(data)
    setLoading(false)
  }

  const handleAdd = async (title) => {
    setBusy(true)
    const newItem = await createTodo(title)
    setList((prev) => [newItem, ...prev])
    setBusy(false)
  }

  const handleToggle = async (id, updates) => {
    setBusy(true)
    const updated = await updateTodo(id, updates)
    setList((prev) => prev.map((item) => (item.id === id ? updated : item)))
    setBusy(false)
  }

  const handleDelete = async (id) => {
    setBusy(true)
    const deletedId = await deleteTodo(id)
    setList((prev) => prev.filter((item) => item.id !== deletedId))
    setBusy(false)
  }

  const handleClearCompleted = async () => {
    const completed = list.filter((item) => item.data?.completed)
    setBusy(true)
    await Promise.all(completed.map((item) => deleteTodo(item.id)))
    setList((prev) => prev.filter((item) => !item.data?.completed))
    setBusy(false)
  }

  const filtered = list.filter(FILTERS[filter] || FILTERS.All)
  const completedCount = list.filter((i) => i.data?.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-500 rounded-2xl shadow-lg mb-4">
            <ClipboardList size={28} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Todos</h1>
          <p className="text-slate-400 text-sm mt-1">Stay organised, get things done.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 flex flex-col gap-5">
          <TodoInput onAdd={handleAdd} disabled={busy || loading} />

          {loading ? (
            <div className="flex justify-center py-10">
              <Loader2 size={28} className="animate-spin text-indigo-400" />
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                {filtered.length === 0 ? (
                  <div className="text-center py-10 text-slate-400 text-sm">
                    {filter === 'All' ? 'No todos yet — add one above!' : `No ${filter.toLowerCase()} todos.`}
                  </div>
                ) : (
                  filtered.map((item) => (
                    <TodoItem
                      key={item.id}
                      item={item}
                      onToggle={handleToggle}
                      onDelete={handleDelete}
                      disabled={busy}
                    />
                  ))
                )}
              </div>

              {list.length > 0 && (
                <TodoFooter
                  total={list.length}
                  completedCount={completedCount}
                  filter={filter}
                  onFilterChange={setFilter}
                  onClearCompleted={handleClearCompleted}
                />
              )}
            </>
          )}
        </div>

        <p className="text-center text-xs text-slate-300 mt-6">
          © {new Date().getFullYear()} My Todos App
        </p>
      </div>
    </div>
  )
}

export default TodoApp
