import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import Blog from './pages/Blog.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import ProductsWeSource from './pages/ProductsWeSource.jsx'
import Services from './pages/Services.jsx'

function PreviewRouteBridge() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-ink">
      <PreviewRouteBridge />
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/products-we-source" element={<ProductsWeSource />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}

export default App
