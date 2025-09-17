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

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Todo App
          </h1>
          <p className="text-gray-600">
            Stay organized and get things done
          </p>
        </div>

        <TodoForm onAddTodo={addTodo} />
        
        <TodoStats 
          todos={todos} 
          onClearCompleted={clearCompleted}
        />
        
        <TodoList 
          todos={todos}
          onDeleteTodo={deleteTodo}
          onToggleTodo={toggleTodo}
        />

        {todos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
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
  )
}

export default TodoApp