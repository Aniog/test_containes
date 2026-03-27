import React, { useState, useEffect } from 'react'
import { Loader2, AlertCircle, Plus, CheckCheck, ClipboardList } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos.js'
import TodoItem from './TodoItem'

const FILTERS = ['All', 'Active', 'Completed']

const TodoList = () => {
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

  const handleAdd = async (e) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setAdding(true)
    const newItem = await createTodo(trimmed)
    setList(prev => [newItem, ...prev])
    setInputValue('')
    setAdding(false)
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
    const completed = list.filter(t => t.data?.completed)
    await Promise.all(completed.map(t => deleteTodo(t.id)))
    setList(prev => prev.filter(t => !t.data?.completed))
  }

  const filteredList = list.filter(t => {
    if (filter === 'Active') return !t.data?.completed
    if (filter === 'Completed') return t.data?.completed
    return true
  })

  const activeCount = list.filter(t => !t.data?.completed).length
  const completedCount = list.filter(t => t.data?.completed).length

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-indigo-500" size={32} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex gap-2 items-center p-4 bg-red-50 border border-red-100 rounded-lg text-red-600">
        <AlertCircle size={18} />
        <span className="text-sm">Error: {error}</span>
      </div>
    )
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-2xl mb-4 shadow-lg shadow-indigo-200">
          <CheckCheck className="text-white" size={24} />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Todos</h1>
        <p className="text-slate-500 text-sm mt-1">
          {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
        </p>
      </div>

      {/* Input */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent shadow-sm transition"
          disabled={adding}
        />
        <button
          type="submit"
          disabled={adding || !inputValue.trim()}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white text-sm font-medium rounded-lg shadow-sm transition-colors"
        >
          {adding ? <Loader2 size={15} className="animate-spin" /> : <Plus size={15} />}
          Add
        </button>
      </form>

      {/* Filter Tabs */}
      <div className="flex gap-1 mb-4 bg-slate-100 p-1 rounded-lg">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
              filter === f
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Todo List */}
      <div className="flex flex-col gap-2">
        {filteredList.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-slate-400">
            <ClipboardList size={36} className="mb-3 opacity-40" />
            <p className="text-sm">
              {filter === 'Completed' ? 'No completed tasks yet.' : filter === 'Active' ? 'No active tasks.' : 'No tasks yet. Add one above!'}
            </p>
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

      {/* Footer */}
      {completedCount > 0 && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleClearCompleted}
            className="text-xs text-slate-400 hover:text-red-500 transition-colors font-medium"
          >
            Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
          </button>
        </div>
      )}
    </div>
  )
}

export default TodoList
