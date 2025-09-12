import { useState, useEffect } from 'react'
import { CheckCircle, ListTodo } from 'lucide-react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { Button } from './components/ui/button'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      return JSON.parse(savedTodos)
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <div className="flex items-center justify-center gap-2 mb-8">
        <ListTodo className="h-8 w-8 text-blue-400" />
        <h1 className="text-3xl font-bold text-gray-100">Todo App</h1>
      </div>
      
      <TodoForm onAdd={addTodo} />
      
      <TodoList 
        todos={todos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />
      
      {todos.length > 0 && (
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>{completedCount} of {totalCount} completed</span>
          </div>
          
          {completedCount > 0 && (
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={clearCompleted}
              className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-200"
            >
              Clear completed
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export default App
