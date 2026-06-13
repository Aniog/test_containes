import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import ServicesPage from '@/pages/ServicesPage'
import HowItWorksPage from '@/pages/HowItWorksPage'
import ProductsPage from '@/pages/ProductsPage'
import CaseStudiesPage from '@/pages/CaseStudiesPage'
import BlogPage from '@/pages/BlogPage'
import ContactPage from '@/pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
