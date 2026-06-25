import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/Home'
import ServicesPage from './pages/Services'
import HowItWorksPage from './pages/HowItWorks'
import ProductsPage from './pages/Products'
import CaseStudiesPage from './pages/CaseStudies'
import BlogPage from './pages/Blog'
import ContactPage from './pages/Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
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