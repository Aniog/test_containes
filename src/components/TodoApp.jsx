




import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, ClipboardList } from 'lucide-react'

let nextId = 1

function loadTodos() {
  try {
    const saved = localStorage.getItem('todos')
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length > 0) {
        nextId = Math.max(...parsed.map((t) => t.id)) + 1
        return parsed
      }
    }
  } catch {
    // ignore
  }
  return []
}

function saveTodos(todos) {
  try {
    localStorage.setItem('todos', JSON.stringify(todos))
  } catch {
    // ignore
  }
}

export default function TodoApp() {
  const [todos, setTodos] = useState(() => loadTodos())
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const handleAdd = (e) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return

    setError(null)
    const newTodo = {
      id: nextId++,
      data: {
        title: trimmed,
        completed: false,
      },
    }
    setTodos((current) => [newTodo, ...current])
    setInputValue('')
  }

  const handleToggle = (todo) => {
    setTodos((current) =>
      current.map((t) =>
        t.id === todo.id
          ? { ...t, data: { ...t.data, completed: !t.data.completed } }
          : t
      )
    )
  }

  const handleDelete = (todoId) => {
    setTodos((current) => current.filter((t) => t.id !== todoId))
  }

  const handleClearCompleted = () => {
    setTodos((current) => current.filter((t) => !t.data.completed))
  }

  const activeCount = todos.filter((t) => !t.data.completed).length
  const completedCount = todos.filter((t) => t.data.completed).length

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 flex items-center gap-3">
          <ClipboardList className="w-6 h-6 text-emerald-400" />
          <h1 className="text-xl font-semibold text-white tracking-tight">Todo List</h1>
        </div>

        {/* Add Form */}
        <form onSubmit={handleAdd} className="px-6 pt-5 pb-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white rounded-lg font-medium transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </form>

        {/* Error */}
        {error && (
          <div className="px-6 py-2">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-lg text-sm flex items-center gap-2">
              <X className="w-4 h-4" />
              {error}
            </div>
          </div>
        )}

        {/* Empty State */}
        {todos.length === 0 && (
          <div className="px-6 py-10 text-center">
            <ClipboardList className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">No todos yet. Add one above!</p>
          </div>
        )}

        {/* Todo List */}
        {todos.length > 0 && (
          <ul className="px-6 pb-2">
            {todos.map((todo) => {
              const fields = todo.data
              return (
                <li
                  key={todo.id}
                  className="group flex items-center gap-3 py-3 border-b border-slate-100 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(todo)}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                      fields.completed
                        ? 'bg-emerald-500 border-emerald-500 text-white'
                        : 'border-slate-300 hover:border-emerald-400 text-transparent'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                  </button>

                  <span
                    className={`flex-1 text-sm transition-all ${
                      fields.completed
                        ? 'text-slate-400 line-through'
                        : 'text-slate-700'
                    }`}
                  >
                    {fields.title}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleDelete(todo.id)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all"
                    aria-label="Delete todo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {/* Footer */}
        {todos.length > 0 && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              {activeCount} active · {completedCount} completed
            </span>
            {completedCount > 0 && (
              <button
                type="button"
                onClick={handleClearCompleted}
                className="text-xs font-medium text-slate-500 hover:text-red-600 transition-colors"
              >
                Clear completed
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}





