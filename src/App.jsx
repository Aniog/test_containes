import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Trash2, Plus, CheckCheck } from 'lucide-react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Learn React hooks', completed: false },
    { id: '2', text: 'Build a todo app', completed: true },
    { id: '3', text: 'Deploy to production', completed: false }
  ])
  const [newTodo, setNewTodo] = useState('')

  // Add new todo
  const addTodo = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    const newTodoItem = {
      id: Date.now().toString(),
      text: newTodo.trim(),
      completed: false
    }
    
    setTodos(prev => [newTodoItem, ...prev])
    setNewTodo('')
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo App
        </h1>

        {/* Add new todo form */}
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <Input
            type="text"
            placeholder="Add a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={!newTodo.trim()}>
            <Plus className="w-4 h-4" />
          </Button>
        </form>

        {/* Todo list */}
        <div className="space-y-2 mb-6">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
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
        {todos.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No todos yet. Add one above!
          </div>
        )}

        {/* Stats and actions */}
        {todos.length > 0 && (
          <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
            <span>
              {activeCount} active, {completedCount} completed
            </span>
            {completedCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCompleted}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <CheckCheck className="w-4 h-4 mr-1" />
                Clear completed
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
