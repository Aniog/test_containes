import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Footer } from '@/components/layout/Layout'
import { HomePage } from '@/components/home/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { HowItWorksPage } from '@/pages/HowItWorksPage'
import { ProductsPage } from '@/pages/ProductsPage'
import { CaseStudiesPage } from '@/pages/CaseStudiesPage'
import { BlogPage } from '@/pages/BlogPage'
import { ContactPage } from '@/pages/ContactPage'
import { Toaster } from '@/components/ui/sonner'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
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
        <Toaster />
      </div>
    </Router>
  )
}

export default App
