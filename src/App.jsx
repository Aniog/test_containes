import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import SeoController from '@/components/site/SeoController'
import SiteLayout from '@/components/site/SiteLayout'
import Blog from '@/pages/Blog'
import CaseStudies from '@/pages/CaseStudies'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import HowItWorks from '@/pages/HowItWorks'
import ProductsWeSource from '@/pages/ProductsWeSource'
import Services from '@/pages/Services'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

const PreviewRouterBridge = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

const RoutedApp = () => {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [location.pathname])

  return (
    <div ref={containerRef}>
      <SeoController />
      <PreviewRouterBridge />
      <ScrollToTop />
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
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <RoutedApp />
    </BrowserRouter>
  )
}

export default App
