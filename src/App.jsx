import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from '@/components/layout/SiteLayout.jsx'
import BlogPage from '@/pages/BlogPage.jsx'
import CaseStudiesPage from '@/pages/CaseStudiesPage.jsx'
import ContactPage from '@/pages/ContactPage.jsx'
import HomePage from '@/pages/HomePage.jsx'
import HowItWorksPage from '@/pages/HowItWorksPage.jsx'
import ProductsPage from '@/pages/ProductsPage.jsx'
import ServicesPage from '@/pages/ServicesPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
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
