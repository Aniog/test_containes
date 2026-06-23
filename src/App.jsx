import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import './App.css'

// Layout Components
import Header from './components/layout/Header'
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
  const appRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, appRef.current)
  }, [])

  return (
    <Router>
      <div ref={appRef} className="min-h-screen flex flex-col">
        <Header />
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
