import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from '@/components/shared/Layout'
import BlogPage from '@/pages/BlogPage'
import CaseStudiesPage from '@/pages/CaseStudiesPage'
import ContactPage from '@/pages/ContactPage'
import HomePage from '@/pages/HomePage'
import HowItWorksPage from '@/pages/HowItWorksPage'
import ProductsPage from '@/pages/ProductsPage'
import ServicesPage from '@/pages/ServicesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/products-we-source" element={<ProductsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
