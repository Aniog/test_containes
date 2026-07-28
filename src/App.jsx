import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './Layout.jsx?ssourcing=20260728'
import Blog from './pages/Blog.jsx?ssourcing=20260728'
import CaseStudies from './pages/CaseStudies.jsx?ssourcing=20260728'
import Contact from './pages/Contact.jsx?ssourcing=20260728'
import Home from './pages/Home.jsx?ssourcing=20260728'
import HowItWorks from './pages/HowItWorks.jsx?ssourcing=20260728'
import Products from './pages/Products.jsx?ssourcing=20260728'
import Services from './pages/Services.jsx?ssourcing=20260728'
import './App.css'

const PreviewNavigationBridge = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <PreviewNavigationBridge />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
