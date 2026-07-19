import { Component, useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'
import { CartProvider } from '@/context/CartContext.jsx'
import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'

function AppShell() {
  const navigate = useNavigate()
  const location = useLocation()
  const pageRef = useRef(null)

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => navigate(path, options)
    return () => { delete window.__STRIKINGLY_PREVIEW_NAVIGATE__ }
  }, [navigate])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      const loaderCleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
      cleanup = typeof loaderCleanup === 'function' ? loaderCleanup : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname, location.search])

  return (
    <div ref={pageRef} className="min-h-screen bg-velmora-ivory font-body text-velmora-ink">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
      <CartDrawer />
    </div>
  )
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <main className="min-h-screen bg-velmora-ivory p-8 text-velmora-ink">
          <h1 className="font-display text-4xl">Preview render error</h1>
          <pre className="mt-4 whitespace-pre-wrap text-sm text-velmora-ink">{String(this.state.error?.message || this.state.error)}</pre>
        </main>
      )
    }

    return this.props.children
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CartProvider>
          <AppShell />
        </CartProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
