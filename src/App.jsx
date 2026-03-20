import React from 'react'
import TodoList from './components/todo/TodoList'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <TodoList />
      </div>
    </div>
  )
}

export default App
