import { useState, useCallback } from 'react'
import './App.css'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <TodoApp />
    </div>
  )
}

export default App
