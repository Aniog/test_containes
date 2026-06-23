import { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import Layout from './Layout'
import Blog from './pages/Blog'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Services from './pages/Services'
import strkImgConfig from './strk-img-config.json'

const ScrollAndImageHandler = () => {
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    return ImageHelper.loadImages(strkImgConfig, container)
  }, [location.pathname])

  return (
    <div ref={containerRef}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="products-we-source" element={<Products />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

const App = () => (
  <BrowserRouter>
    <ScrollAndImageHandler />
  </BrowserRouter>
)

export default App
