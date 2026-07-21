import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/cart/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Journal from './pages/Journal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageWrapper({ children }) {
  const location = useLocation()
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(8px)'
      requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
          ref.current.style.opacity = '1'
          ref.current.style.transform = 'translateY(0)'
        }
      })
    }
  }, [location.pathname])

  return <div ref={ref}>{children}</div>
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </PageWrapper>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-velmora-cream font-sans">
          <AppContent />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
