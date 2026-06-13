import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './HomePage.jsx'
import ServicesPage from './ServicesPage.jsx'
import HowItWorksPage from './HowItWorksPage.jsx'
import ProductsPage from './ProductsPage.jsx'
import CaseStudiesPage from './CaseStudiesPage.jsx'
import BlogPage from './BlogPage.jsx'
import ContactPage from './ContactPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
