import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomePage from '@/pages/HomePage'
import ServicesPage from '@/pages/ServicesPage'
import HowItWorksPage from '@/pages/HowItWorksPage'
import ProductsPage from '@/pages/ProductsPage'
import CaseStudiesPage from '@/pages/CaseStudiesPage'
import BlogPage from '@/pages/BlogPage'
import ContactPage from '@/pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
