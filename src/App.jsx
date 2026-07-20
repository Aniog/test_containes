import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPlaceholder />} />
          <Route path="/journal" element={<JournalPlaceholder />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function AboutPlaceholder() {
  return (
    <div className="pt-32 pb-16 max-w-3xl mx-auto px-4 md:px-8 text-center">
      <h1 className="font-serif text-4xl md:text-5xl text-charcoal">Our Story</h1>
      <p className="mt-6 text-sm text-muted-fg font-sans leading-relaxed">
        Velmora was founded with a simple belief: that beautiful, lasting jewelry shouldn't require a luxury price tag. Every piece in our collection is designed in London and crafted with 18K gold plating over sterling silver — bridging the gap between costume and fine jewelry.
      </p>
    </div>
  )
}

function JournalPlaceholder() {
  return (
    <div className="pt-32 pb-16 max-w-3xl mx-auto px-4 md:px-8 text-center">
      <h1 className="font-serif text-4xl md:text-5xl text-charcoal">Journal</h1>
      <p className="mt-6 text-sm text-muted-fg font-sans leading-relaxed">
        Stories of style, craftsmanship, and the women who wear Velmora. Coming soon.
      </p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
