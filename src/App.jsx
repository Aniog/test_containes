import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SiteLayout from '@/components/site/SiteLayout.jsx?v=ssourcing-20260727'
import Home from '@/pages/Home.jsx?v=ssourcing-20260727'
import Services from '@/pages/Services.jsx?v=ssourcing-20260727'
import HowItWorks from '@/pages/HowItWorks.jsx?v=ssourcing-20260727'
import ProductsWeSource from '@/pages/ProductsWeSource.jsx?v=ssourcing-20260727'
import CaseStudies from '@/pages/CaseStudies.jsx?v=ssourcing-20260727'
import Blog from '@/pages/Blog.jsx?v=ssourcing-20260727'
import Contact from '@/pages/Contact.jsx?v=ssourcing-20260727'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

function AppRoutes() {
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, [location.pathname])

  return (
    <div ref={containerRef}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products-we-source" element={<ProductsWeSource />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
