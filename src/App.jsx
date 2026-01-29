import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import News from './components/News'
import Store from './components/Store'
import Discounts from './components/Discounts'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <News />
        <Store />
        <Discounts />
      </main>
      <Footer />
    </div>
  )
}

export default App
