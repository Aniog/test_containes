import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/layout/Layout'
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import AboutPage from './pages/About'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
