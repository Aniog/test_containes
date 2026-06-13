import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import SiteLayout from './components/layout/SiteLayout.jsx'
import Blog from './pages/Blog.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import ProductsWeSource from './pages/ProductsWeSource.jsx'
import Services from './pages/Services.jsx'
import { routeDescriptions, routeTitles } from './siteContent.js'

function RouteBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    document.title = routeTitles[location.pathname] || routeTitles['/']

    const description = routeDescriptions[location.pathname] || routeDescriptions['/']
    let descriptionTag = document.querySelector('meta[name="description"]')

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }

    descriptionTag.setAttribute('content', description)
  }, [location.pathname])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (to, options = {}) => {
      navigate(to, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <RouteBridge />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products-we-source" element={<ProductsWeSource />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
