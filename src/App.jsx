import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import './App.css'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import HowItWorks from './pages/HowItWorks'
import Products from './pages/Products'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initialize image loading
    const initImages = () => {
      try {
        ImageHelper.loadImages(strkImgConfig, document.getElementById('root'))
      } catch (e) {
        console.log('Image helper not available')
      }
    }
    
    if (document.readyState === 'complete') {
      initImages()
    } else {
      window.addEventListener('load', initImages)
    }
    
    setIsLoaded(true)
  }, [])

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/products" element={<Products />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
