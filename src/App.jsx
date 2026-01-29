import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedGames from './components/FeaturedGames'
import NewsSection from './components/NewsSection'
import StoreSection from './components/StoreSection'
import DealsSection from './components/DealsSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      <Hero />
      <FeaturedGames />
      <NewsSection />
      <StoreSection />
      <DealsSection />
      <Footer />
    </div>
  )
}

export default App
