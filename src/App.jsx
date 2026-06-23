import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'

// Temporary page placeholders
const CaseStudies = () => (
  <div className="py-24 text-center container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
    <p className="text-slate-600">Real success stories from our global clients. (Coming Soon)</p>
  </div>
)

const Blog = () => (
  <div className="py-24 text-center container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-4">Blog & Industry Insights</h1>
    <p className="text-slate-600">Latest news about China manufacturing and sourcing tips. (Coming Soon)</p>
  </div>
)

const NotFound = () => (
  <div className="py-24 text-center container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-slate-600 mb-8">The page you are looking for doesn't exist.</p>
    <a href="/" className="text-blue-600 font-bold hover:underline">Back to Home</a>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="products" element={<Products />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
