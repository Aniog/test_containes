import React, { useState, useEffect, useMemo } from 'react'
import { Loader2, AlertCircle, ClipboardList } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import TodoInput from '@/components/todos/TodoInput'
import TodoItem from '@/components/todos/TodoItem'
import TodoFooter from '@/components/todos/TodoFooter'

const TodoPage = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('All')
  const [mutating, setMutating] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchTodos()
        setList(data)
      } catch (err) {
        console.error('Failed to fetch todos:', err)
        setError(err.message || 'Failed to load todos')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const handleAdd = async (title) => {
    setMutating(true)
    try {
      const newItem = await createTodo(title)
      setList((prev) => [newItem, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
    } finally {
      setMutating(false)
    }
  }

  const handleToggle = async (item) => {
    const updated = { ...item.data, completed: !item.data.completed }
    try {
      const result = await updateTodo(item.id, updated)
      setList((prev) => prev.map((t) => (t.id === item.id ? result : t)))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
    }
  }

  const handleDelete = async (id) => {
    try {
      const deletedId = await deleteTodo(id)
      setList((prev) => prev.filter((t) => t.id !== deletedId))
    } catch (err) {
      console.error('Failed to delete todo:', err)
    }
  }

  const handleClearCompleted = async () => {
    const completed = list.filter((t) => t.data?.completed)
    for (const item of completed) {
      try {
        const deletedId = await deleteTodo(item.id)
        setList((prev) => prev.filter((t) => t.id !== deletedId))
      } catch (err) {
        console.error('Failed to delete completed todo:', err)
      }
    }
  }

  const filteredList = useMemo(() => {
    if (filter === 'Active') return list.filter((t) => !t.data?.completed)
    if (filter === 'Completed') return list.filter((t) => t.data?.completed)
    return list
  }, [list, filter])

  const completedCount = useMemo(() => list.filter((t) => t.data?.completed).length, [list])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-100 flex flex-col items-center px-4 py-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500 shadow-lg mb-4">
            <ClipboardList size={28} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          <p className="text-slate-400 text-sm mt-1">Stay organised, get things done.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex flex-col gap-5">
          <TodoInput onAdd={handleAdd} disabled={mutating || loading} />

          {loading && (
            <div className="flex justify-center py-8">
              <Loader2 size={28} className="animate-spin text-indigo-400" />
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {!loading && !error && (
            <>
              {filteredList.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-sm">
                  {filter === 'All' ? 'No tasks yet — add one above!' : `No ${filter.toLowerCase()} tasks.`}
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
          © {new Date().getFullYear()} My Tasks App
        </p>
      </div>
    </div>
  )
}

export default TodoPage
