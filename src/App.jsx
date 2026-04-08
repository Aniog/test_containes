import React, { useState, useEffect } from 'react'
import { DataClient } from '@strikingly/sdk'
import { Plus, Trash2, Check, X } from 'lucide-react'
import './App.css'

const projectUrl = import.meta.env.STRK_PROJECT_URL
const projectAnonKey = import.meta.env.STRK_PROJECT_ANON_KEY
const client = new DataClient(projectUrl, projectAnonKey)

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Load todos on component mount
  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      setLoading(true)
      setError(null)
      const { data, error } = await client
        .from('TodoItem')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setTodos(data || [])
    } catch (err) {
      console.error('Error loading todos:', err)
      setError('Failed to load todos')
    } finally {
      setLoading(false)
    }
  }

  const addTodo = async (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    try {
      setLoading(true)
      setError(null)
      const { data, error } = await client
        .from('TodoItem')
        .insert([{
          text: newTodo.trim(),
          completed: false
        }])
        .select('*')
      
      if (error) throw error
      if (data && data.length > 0) {
        setTodos(prev => [data[0], ...prev])
        setNewTodo('')
      }
    } catch (err) {
      console.error('Error adding todo:', err)
      setError('Failed to add todo')
    } finally {
      setLoading(false)
    }
  }

  const toggleTodo = async (id, completed) => {
    try {
      setError(null)
      const { data, error } = await client
        .from('TodoItem')
        .update({ completed: !completed })
        .eq('id', id)
        .select('*')
      
      if (error) throw error
      if (data && data.length > 0) {
        setTodos(prev => prev.map(todo => 
          todo.id === id ? { ...todo, completed: !completed } : todo
        ))
      }
    } catch (err) {
      console.error('Error toggling todo:', err)
      setError('Failed to update todo')
    }
  }

  const deleteTodo = async (id) => {
    try {
      setError(null)
      const { error } = await client
        .from('TodoItem')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      setTodos(prev => prev.filter(todo => todo.id !== id))
    } catch (err) {
      console.error('Error deleting todo:', err)
      setError('Failed to delete todo')
    }
  }

  const clearCompleted = async () => {
    try {
      setError(null)
      const completedTodos = todos.filter(todo => todo.completed)
      
      for (const todo of completedTodos) {
        const { error } = await client
          .from('TodoItem')
          .delete()
          .eq('id', todo.id)
        
        if (error) throw error
      }
      
      setTodos(prev => prev.filter(todo => !todo.completed))
    } catch (err) {
      console.error('Error clearing completed todos:', err)
      setError('Failed to clear completed todos')
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl font-bold text-center">Todo App</h1>
            <p className="text-blue-100 text-center mt-1">
              {activeCount} active, {completedCount} completed
            </p>
          </div>

          {/* Add Todo Form */}
          <form onSubmit={addTodo} className="p-4 border-b border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !newTodo.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400">
              <div className="flex">
                <X className="w-5 h-5 text-red-400" />
                <p className="ml-3 text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          {/* Todo List */}
          <div className="max-h-96 overflow-y-auto">
            {loading && todos.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-2">Loading todos...</p>
              </div>
            ) : todos.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p>No todos yet. Add one above!</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {todos.map((todo) => (
                  <li key={todo.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleTodo(todo.id, todo.completed)}
                        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          todo.completed
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {todo.completed && <Check className="w-3 h-3" />}
                      </button>
                      
                      <span className={`flex-1 ${
                        todo.completed 
                          ? 'text-gray-500 line-through' 
                          : 'text-gray-900'
                      }`}>
                        {todo.text}
                      </span>
                      
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {activeCount} item{activeCount !== 1 ? 's' : ''} left
                </span>
                
                {completedCount > 0 && (
                  <button
                    onClick={clearCompleted}
                    className="text-sm text-red-600 hover:text-red-800 transition-colors"
                  >
                    Clear completed ({completedCount})
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
