import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import HowItWorks from '@/pages/HowItWorks'
import Products from '@/pages/Products'
import CaseStudies from '@/pages/CaseStudies'
import Blog from '@/pages/Blog'
import Contact from '@/pages/Contact'

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neutral-200 mb-4">404</h1>
        <p className="text-lg text-neutral-500 mb-1">Page not found</p>
        <p className="text-sm text-neutral-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-600">
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
