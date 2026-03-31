import React, { useState, useEffect } from 'react'
import { Loader2, AlertCircle, CheckSquare } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import TodoForm from '@/components/todos/TodoForm'
import TodoList from '@/components/todos/TodoList'
import TodoFooter from '@/components/todos/TodoFooter'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [adding, setAdding] = useState(false)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    setLoading(true)
    setError(null)
    const list = await fetchTodos()
    setTodos(list)
    setLoading(false)
  }

  const handleAdd = async (title) => {
    setAdding(true)
    const newItem = await createTodo(title)
    setTodos((prev) => [newItem, ...prev])
    setAdding(false)
  }

  const handleToggle = async (id, completed) => {
    const existing = todos.find((t) => t.id === id)
    const updatedItem = await updateTodo(id, {
      title: existing?.data?.title,
      completed,
    })
    setTodos((prev) => prev.map((t) => (t.id === id ? updatedItem : t)))
  }

  const handleDelete = async (id) => {
    const deletedId = await deleteTodo(id)
    setTodos((prev) => prev.filter((t) => t.id !== deletedId))
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data?.completed)
    await Promise.all(completed.map((t) => deleteTodo(t.id)))
    setTodos((prev) => prev.filter((t) => !t.data?.completed))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-100 flex flex-col items-center px-4 py-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-indigo-600 text-white p-2 rounded-xl shadow">
          <CheckSquare size={24} />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Todos</h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex flex-col gap-5">
        {/* Add Form */}
        <TodoForm onAdd={handleAdd} loading={adding} />

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-indigo-500" size={28} />
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3 text-sm">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        ) : (
          <>
            <TodoList
              todos={todos}
              filter={filter}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
            {todos.length > 0 && (
              <TodoFooter
                todos={todos}
                filter={filter}
                onFilterChange={setFilter}
                onClearCompleted={handleClearCompleted}
              />
            )}
          </>
        )}
      </div>

      <p className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} My Todos App</p>
    </div>
  )
}

export default App
