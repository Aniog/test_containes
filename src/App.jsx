import React from 'react'
import Dashboard from './pages/Dashboard'
import { ToastProvider } from './components/ui/Toast'
import './App.css'

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <Dashboard />
      </div>
    </ToastProvider>
  )
}

export default App
