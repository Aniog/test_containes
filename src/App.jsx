import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import ProductsWeSource from './pages/ProductsWeSource.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function PreviewNavigator() {
  const navigate = useNavigate()
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__ === navigate) {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
      }
    }
  }, [navigate])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <PreviewNavigator />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products-we-source" element={<ProductsWeSource />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
