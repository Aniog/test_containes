import { useState } from 'react'
import TodoApp from './components/TodoApp'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo App
        </h1>
        <TodoApp />
      </div>
    </div>
  )
}

export default App
