import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Trash2, Plus, CheckCheck } from 'lucide-react'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add new todo item
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const todo = {
        id: Date.now().toString(),
        title: newTodo.trim(),
        completed: false,
        created_at: new Date().toISOString()
      }
      setTodos([...todos, todo])
      setNewTodo('')
    }
  }

  // Delete todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Clear all completed tasks
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Handle Enter key press in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo App</h1>
          <p className="text-gray-600">Stay organized and get things done!</p>
        </div>

        {/* Add Todo Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Add a new todo..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={addTodo} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{activeCount} active task{activeCount !== 1 ? 's' : ''}</span>
            <span>{completedCount} completed task{completedCount !== 1 ? 's' : ''}</span>
            <span>{todos.length} total task{todos.length !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {todos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-lg">No todos yet!</p>
              <p className="text-sm">Add your first task above to get started.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                    todo.completed ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                  <div className="flex-1">
                    <span
                      className={`${
                        todo.completed
                          ? 'line-through text-gray-500'
                          : 'text-gray-800'
                      } transition-all duration-200`}
                    >
                      {todo.title}
                    </span>
                  </div>
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
          )}
        </div>

        {/* Clear Completed Button */}
        {completedCount > 0 && (
          <div className="mt-6 text-center">
            <Button
              onClick={clearCompleted}
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
            >
              <CheckCheck className="w-4 h-4 mr-2" />
              Clear {completedCount} Completed Task{completedCount !== 1 ? 's' : ''}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp