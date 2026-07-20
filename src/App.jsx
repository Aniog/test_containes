import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { CartProvider } from '@/lib/cart'
import HomePage from '@/pages/HomePage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import ShopPage from '@/pages/ShopPage'
import './App.css'

function AppShell() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-velmora-pearl text-velmora-espresso">
      <Header onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="/product/:productId"
          element={<ProductDetailPage onCartOpen={() => setCartOpen(true)} />}
        />
      </Routes>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
