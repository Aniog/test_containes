import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
