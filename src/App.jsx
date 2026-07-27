import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import HowItWorks from './pages/HowItWorks'
import Products from './pages/Products'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PreviewNavigate() {
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => {
      window.history[options?.replace ? 'replaceState' : 'pushState']({}, '', path)
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }))
    }
  }, [])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PreviewNavigate />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="products" element={<Products />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
