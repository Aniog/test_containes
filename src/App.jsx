
import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage on initial render
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add a new todo
  const addTodo = (text) => {
    const todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    }
    
    setTodos([...todos, todo])
  }

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle todo completion status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  return (
    <div className="todo-app">
      <div className="todo-header">
        <h1>Todo App</h1>
      </div>
      
      <TodoForm onAddTodo={addTodo} />
      
      <ul className="todo-list">
        {todos.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <TodoItem 
              key={todo.id}
              todo={todo}
              onToggle={toggleComplete}
              onDelete={deleteTodo}
            />
          ))
        )}
      </ul>
      
      {todos.some(todo => todo.completed) && (
        <button 
          className="clear-completed"
          onClick={clearCompleted}
        >
          Clear Completed Tasks
        </button>
      )}
    </div>
  )
}

export default App

