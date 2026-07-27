import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout.jsx'
import Blog from './pages/Blog.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import ProductsWeSource from './pages/ProductsWeSource.jsx'
import Services from './pages/Services.jsx'
import strkImgConfig from './strk-img-config.json'
import './App.css'

function WebsiteShell() {
  const pageRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') {
        cleanupImages()
      }
    }
  }, [location.pathname])

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-slate-900">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products-we-source" element={<ProductsWeSource />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <WebsiteShell />
    </BrowserRouter>
  )
}

export default App
