import React from 'react'
import AIHero from './components/AIHero'
import UserForm from './components/UserForm'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <AIHero />
      <UserForm />
    </div>
  )
}

export default App
