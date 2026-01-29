import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AboutAI from './pages/AboutAI'
import Applications from './pages/Applications'
import Future from './pages/Future'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutAI />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/future" element={<Future />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
