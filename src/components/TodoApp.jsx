import React, { useState, useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

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

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  const activeTodosCount = todos.filter(todo => !todo.completed).length
  const completedTodosCount = todos.filter(todo => todo.completed).length

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold text-center">Todo App</h1>
          <p className="text-center text-blue-100 mt-2">
            Stay organized and get things done
          </p>
        </div>

        {/* Todo Input */}
        <div className="p-6 border-b border-gray-200">
          <TodoInput onAddTodo={addTodo} />
        </div>

        {/* Stats */}
        {todos.length > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{activeTodosCount} active tasks</span>
              <span>{completedTodosCount} completed tasks</span>
            </div>
          </div>
        )}

        {/* Filter */}
        {todos.length > 0 && (
          <div className="px-6 py-4 border-b border-gray-200">
            <TodoFilter 
              currentFilter={filter} 
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
              hasCompletedTodos={completedTodosCount > 0}
            />
          </div>
        )}

        {/* Todo List */}
        <div className="min-h-[200px]">
          {todos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-lg font-medium mb-2">No todos yet</h3>
              <p>Add your first todo above to get started!</p>
            </div>
          ) : (
            <TodoList 
              todos={getFilteredTodos()} 
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp