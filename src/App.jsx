import React from 'react'
import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import Products from '@/components/home/Products'
import About from '@/components/home/About'
import Contact from '@/components/home/Contact'
import Footer from '@/components/home/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
