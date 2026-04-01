import React, { useState, useEffect } from 'react'
import { Loader2, AlertCircle, Plus, Trash2, CheckCircle2, Circle, ClipboardList } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'

const FILTERS = ['All', 'Active', 'Completed']

const TodoApp = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [adding, setAdding] = useState(false)
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

  const handleAdd = async () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setAdding(true)
    const newItem = await createTodo(trimmed)
    setList(prev => [newItem, ...prev])
    setInputValue('')
    setAdding(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  const handleToggle = async (item) => {
    const updated = await updateTodo(item.id, {
      title: item.data.title,
      completed: !item.data.completed,
    })
    setList(prev => prev.map(t => t.id === item.id ? updated : t))
  }

  const handleDelete = async (id) => {
    const deletedId = await deleteTodo(id)
    setList(prev => prev.filter(t => t.id !== deletedId))
  }

  const handleClearCompleted = async () => {
    const completed = list.filter(t => t.data.completed)
    await Promise.all(completed.map(t => deleteTodo(t.id)))
    setList(prev => prev.filter(t => !t.data.completed))
  }

  const filtered = list.filter(t => {
    if (filter === 'Active') return !t.data.completed
    if (filter === 'Completed') return t.data.completed
    return true
  })

  const activeCount = list.filter(t => !t.data.completed).length
  const completedCount = list.filter(t => t.data.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex flex-col items-center py-12 px-4">
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
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition"
            >
              {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
              Add
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-slate-100 bg-slate-50">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2.5 text-sm font-medium transition border-b-2 ${
                filter === f
                  ? 'border-blue-500 text-blue-600 bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
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
              <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 text-red-500 p-5 bg-red-50 m-4 rounded-lg border border-red-100">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400 gap-2">
              <ClipboardList className="w-8 h-8 opacity-40" />
              <p className="text-sm">
                {filter === 'Completed' ? 'No completed tasks yet.' : filter === 'Active' ? 'No active tasks.' : 'No tasks yet. Add one above!'}
              </p>
            </div>
          ) : (
            filtered.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-3 px-5 py-3.5 group hover:bg-slate-50 transition"
              >
                <button
                  onClick={() => handleToggle(item)}
                  className="shrink-0 text-slate-400 hover:text-blue-500 transition p-0 border-0 bg-transparent"
                >
                  {item.data.completed
                    ? <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    : <Circle className="w-5 h-5" />}
                </button>
                <span className={`flex-1 text-sm ${item.data.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                  {item.data.title}
                </span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition p-0 border-0 bg-transparent"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {!loading && !error && list.length > 0 && (
          <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-500">
            <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="text-slate-500 hover:text-red-500 transition text-xs border-0 bg-transparent p-0 font-medium"
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
