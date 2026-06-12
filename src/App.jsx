import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Layout from './Layout'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const Products = lazy(() => import('./pages/Products'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))

function NavigateBridge() {
  const navigate = useNavigate()
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      navigate(path, opts)
    }
    return () => { window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined }
  }, [navigate])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <NavigateBridge />
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><p className="text-lg text-slate-600">Loading...</p></div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/products" element={<Products />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
