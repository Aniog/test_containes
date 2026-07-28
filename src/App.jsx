import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import SiteLayout from '@/components/layout/SiteLayout'
import { siteMeta } from '@/data/siteContent'
import Blog from '@/pages/Blog'
import CaseStudies from '@/pages/CaseStudies'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import HowItWorks from '@/pages/HowItWorks'
import ProductsWeSource from '@/pages/ProductsWeSource'
import Services from '@/pages/Services'

const routeTitles = {
  '/': siteMeta.title,
  '/services': `Services | ${siteMeta.company}`,
  '/how-it-works': `How It Works | ${siteMeta.company}`,
  '/products-we-source': `Products We Source | ${siteMeta.company}`,
  '/case-studies': `Case Studies | ${siteMeta.company}`,
  '/blog': `Blog | ${siteMeta.company}`,
  '/contact': `Contact | ${siteMeta.company}`,
}

const RouteSync = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
    }
  }, [navigate])

  useEffect(() => {
    document.title = routeTitles[location.pathname] || siteMeta.title

    let description = document.querySelector('meta[name="description"]')

    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.appendChild(description)
    }

    description.content = siteMeta.description
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <RouteSync />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products-we-source" element={<ProductsWeSource />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}

export default App
