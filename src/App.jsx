import React, { useState, useEffect } from 'react'
import { Trash2, CheckCircle, Circle, Plus } from 'lucide-react'
import './App.css'

const STORAGE_KEY = 'todo-list-items'

function loadItems() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveItems(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // localStorage not available
  }
}

function App() {
  const [items, setItems] = useState(loadItems)
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    saveItems(items)
  }, [items])

  const handleAdd = (e) => {
    e.preventDefault()
    const title = newTitle.trim()
    if (!title) return

    const newItem = {
      id: Date.now(),
      title,
      completed: false,
    }
    setItems((current) => [newItem, ...current])
    setNewTitle('')
  }

  const handleToggle = (item) => {
    setItems((current) =>
      current.map((entry) =>
        entry.id === item.id ? { ...entry, completed: !entry.completed } : entry
      )
    )
  }

  const handleDelete = (itemId) => {
    setItems((current) => current.filter((entry) => entry.id !== itemId))
  }

  const handleClearCompleted = () => {
    setItems((current) => current.filter((entry) => !entry.completed))
  }

  const activeCount = items.filter((item) => !item.completed).length
  const completedCount = items.filter((item) => item.completed).length

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-12 px-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Todo List
          </h1>

          <form onSubmit={handleAdd} className="flex gap-2 mb-6">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
            />
            <button
              type="submit"
              disabled={!newTitle.trim()}
              className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1 font-medium"
            >
              <Plus className="w-5 h-5" />
              Add
            </button>
          </form>

          {items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No tasks yet. Add one above!</p>
            </div>
          )}

          {items.length > 0 && (
            <>
              <ul className="divide-y divide-gray-100">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 py-3 group"
                  >
                    <button
                      onClick={() => handleToggle(item)}
                      className="flex-shrink-0 text-gray-400 hover:text-blue-600 transition-colors"
                      title={item.completed ? 'Mark incomplete' : 'Mark complete'}
                    >
                      {item.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </button>
                    <span
                      className={`flex-1 text-base ${
                        item.completed
                          ? 'line-through text-gray-400'
                          : 'text-gray-800'
                      }`}
                    >
                      {item.title}
                    </span>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex-shrink-0 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  {activeCount} item{activeCount !== 1 ? 's' : ''} remaining
                </p>
                {completedCount > 0 && (
                  <button
                    onClick={handleClearCompleted}
                    className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
                  >
                    Clear completed ({completedCount})
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
