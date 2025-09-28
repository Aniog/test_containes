import { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoStats from './TodoStats'

const TodoApp = () => {
  const [todos, setTodos] = useState([])

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

  // Add new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos(prev => [newTodo, ...prev])
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Todo App
          </h1>
          <p className="text-indigo-100 text-center mt-2">
            Stay organized and get things done
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Add Todo Form */}
          <TodoForm onAddTodo={addTodo} />

          {/* Stats */}
          <TodoStats 
            totalCount={totalCount}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />

          {/* Todo List */}
          <TodoList 
            todos={todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />

          {/* Empty State */}
          {todos.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No todos yet
              </h3>
              <p className="text-gray-500">
                Add your first todo above to get started!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp