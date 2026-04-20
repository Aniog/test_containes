import React, { useState, useEffect, useCallback } from 'react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../api/todos.js'
import TodoInput from './TodoInput.jsx'
import TodoList from './TodoList.jsx'
import TodoFooter from './TodoFooter.jsx'
import TodoHeader from './TodoHeader.jsx'

const FILTERS = ['all', 'active', 'completed']

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchTodos()
      console.log('Loaded todos:', rows.length)
      setTodos(rows)
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (title) => {
    if (!title.trim()) return
    try {
      const newItem = await createTodo(title)
      console.log('Created todo:', newItem)
      setTodos((prev) => [newItem, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError(err.message)
    }
  }

  const handleToggle = async (item) => {
    const optimistic = todos.map((t) =>
      t.id === item.id ? { ...t, data: { ...t.data, completed: !t.data.completed } } : t
    )
    setTodos(optimistic)
    try {
      const updated = await updateTodo(item, { completed: !item.data.completed })
      console.log('Toggled todo:', updated)
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setTodos(todos)
      setError(err.message)
    }
  }

  const handleEdit = async (item, newTitle) => {
    try {
      const updated = await updateTodo(item, { title: newTitle })
      console.log('Edited todo:', updated)
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to edit todo:', err)
      setError(err.message)
    }
  }

  const handleDelete = async (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
      console.log('Deleted todo:', id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError(err.message)
      loadTodos()
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data.completed)
    setTodos((prev) => prev.filter((t) => !t.data.completed))
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
      console.log('Cleared', completed.length, 'completed todos')
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError(err.message)
      loadTodos()
    }
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.data.completed
    if (filter === 'completed') return t.data.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.data.completed).length
  const completedCount = todos.filter((t) => t.data.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-lg">
        <TodoHeader />

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <TodoInput onAdd={handleAdd} />

          {error && (
            <div className="mx-4 mt-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
              <button
                onClick={() => setError(null)}
                className="ml-2 text-red-400 hover:text-red-600 font-bold"
              >
                ×
              </button>
            </div>
          )}

          <TodoList
            todos={filteredTodos}
            loading={loading}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />

          {todos.length > 0 && (
            <TodoFooter
              activeCount={activeCount}
              completedCount={completedCount}
              filter={filter}
              filters={FILTERS}
              onFilterChange={setFilter}
              onClearCompleted={handleClearCompleted}
            />
          )}
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          Double-click a task to edit • Click checkbox to complete
        </p>
      </div>
    </div>
  )
}
