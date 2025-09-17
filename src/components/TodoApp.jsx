import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoStats from './TodoStats'

const TodoApp = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed))
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white text-center">
            📝 My Todo List
          </h1>
          <p className="text-purple-100 text-center mt-2">
            Stay organized and get things done
          </p>
        </div>

        {/* Stats */}
        <TodoStats todos={todos} />

        {/* Add Todo Form */}
        <div className="px-8 py-6 border-b border-gray-100">
          <TodoForm onAddTodo={addTodo} />
        </div>

        {/* Todo List */}
        <div className="px-8 py-6">
          <TodoList 
            todos={todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />
          
          {todos.length > 0 && todos.some(todo => todo.completed) && (
            <div className="mt-6 text-center">
              <button
                onClick={clearCompleted}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                Clear Completed Tasks
              </button>
            </div>
          )}
        </div>

        {/* Empty State */}
        {todos.length === 0 && (
          <div className="px-8 py-12 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No tasks yet
            </h3>
            <p className="text-gray-500">
              Add your first task above to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoApp