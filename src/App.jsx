import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
