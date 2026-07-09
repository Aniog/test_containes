import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import ShopPage from './pages/ShopPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collections" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
          <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-ink tracking-wide mb-4">{title}</h1>
        <p className="text-ink-muted text-sm">This page is coming soon.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
