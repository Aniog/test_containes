import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/shared/Layout'
import Home from '@/pages/Home'
import ServicesPage from '@/pages/Services'
import HowItWorks from '@/pages/HowItWorks'
import ProductsPage from '@/pages/Products'
import CaseStudiesPage from '@/pages/CaseStudies'
import BlogPage from '@/pages/Blog'
import ContactPage from '@/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
