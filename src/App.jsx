import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Products from './pages/Products.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'

function ImageLoader() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return (
    <div ref={containerRef} className="contents">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <ImageLoader />
      </Layout>
    </Router>
  )
}

export default App
