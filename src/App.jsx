import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Stock image loading will be handled when @strikingly/sdk is available
    // For now, the placeholder images will display
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
