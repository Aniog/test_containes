import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement('div', {className: "min-h-screen bg-white"},
      React.createElement(Routes, null,
        React.createElement(Route, {path: "/", element: React.createElement(HomePage)})
      )
    )
  )
}

export default App
