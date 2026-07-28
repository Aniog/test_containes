import { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Layout from '@/components/common/Layout'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import HowItWorks from '@/pages/HowItWorks'
import Products from '@/pages/Products'
import CaseStudies from '@/pages/CaseStudies'
import Blog from '@/pages/Blog'
import Contact from '@/pages/Contact'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

function SiteRoutes() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [location.pathname])

  return (
    <div ref={containerRef}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products-we-source" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteRoutes />
    </BrowserRouter>
  )
}
