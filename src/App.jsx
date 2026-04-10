import React, { useState, useEffect } from 'react'
import { DataClient } from '@strikingly/sdk'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Checkbox } from './components/ui/checkbox'
import { Trash2, Plus, CheckCircle2 } from 'lucide-react'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './config.jsx'
import './App.css'

// Initialize the database client
const projectUrl = STRK_PROJECT_URL
const projectAnonKey = STRK_PROJECT_ANON_KEY
const client = new DataClient(projectUrl, projectAnonKey)

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Load todos from database on component mount
  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      setLoading(true)
      setError(null)
      const { data, error } = await client
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false })
      
      console.log('API Response:', { data, error }) // Debug log
      
      if (error) throw error
      
      // Ensure data is always an array
      const todosData = Array.isArray(data) ? data : []
      console.log('Setting todos to:', todosData) // Debug log
      setTodos(todosData)
    } catch (err) {
      console.error('Error loading todos:', err)
      setError('Failed to load todos')
      setTodos([]) // Ensure todos is always an array even on error
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
        .from('todos')
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
        .from('todos')
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
      console.error('Error updating todo:', err)
      setError('Failed to update todo')
    }
  }

  const deleteTodo = async (id) => {
    try {
      setError(null)
      const { error } = await client
        .from('todos')
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
      // Ensure todos is an array before filtering
      if (!Array.isArray(todos)) {
        console.error('todos is not an array:', todos)
        return
      }
      
      const completedTodos = todos.filter(todo => todo.completed)
      
      for (const todo of completedTodos) {
        const { error } = await client
          .from('todos')
          .delete()
          .eq('id', todo.id)
        
        if (error) throw error
      }
      
      setTodos(prev => Array.isArray(prev) ? prev.filter(todo => !todo.completed) : [])
    } catch (err) {
      console.error('Error clearing completed todos:', err)
      setError('Failed to clear completed todos')
    }
  }

  // Safe calculations with array validation
  const completedCount = Array.isArray(todos) ? todos.filter(todo => todo.completed).length : 0
  const activeCount = Array.isArray(todos) ? todos.length - completedCount : 0

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Todo App</h1>
          <p className="text-gray-600">Stay organized and get things done!</p>
        </div>

        {/* Add new todo form */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Add a new todo..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="flex-1"
              disabled={loading}
            />
            <Button type="submit" disabled={loading || !newTodo.trim()}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </form>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* Loading state */}
        {loading && Array.isArray(todos) && todos.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Loading todos...
          </div>
        )}

        {/* Todo list */}
        <div className="space-y-2 mb-6">
          {Array.isArray(todos) && todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center gap-3 p-3 rounded-lg border ${
                todo.completed 
                  ? 'bg-gray-50 border-gray-200' 
                  : 'bg-white border-gray-300'
              }`}
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id, todo.completed)}
                className="flex-shrink-0"
              />
              <span
                className={`flex-1 ${
                  todo.completed 
                    ? 'text-gray-500 line-through' 
                    : 'text-gray-800'
                }`}
              >
                {todo.text}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {!loading && Array.isArray(todos) && todos.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No todos yet. Add one above to get started!</p>
          </div>
        )}

        {/* Stats and actions */}
        {Array.isArray(todos) && todos.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
              <span>{activeCount} active, {completedCount} completed</span>
              <span>{todos.length} total</span>
            </div>
            
            {completedCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearCompleted}
                className="w-full text-red-600 border-red-200 hover:bg-red-50"
              >
                Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
