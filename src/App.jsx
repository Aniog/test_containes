import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import PreviewBridge from '@/components/PreviewBridge'
import ScrollManager from '@/components/ScrollManager'
import { CartProvider, useCart } from '@/context/CartContext'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'

function AppShell() {
  const { addItem } = useCart()

  const handleAddToCart = (product, quantity = 1, variant = 'Gold Tone', imageSrc = '') => {
    addItem(product, quantity, variant, imageSrc)
  }

  return (
    <div className="min-h-screen bg-velmora-espresso">
      <Navbar />
      <ScrollManager />
      <PreviewBridge />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
        <Route
          path="/product/:slug"
          element={<ProductPage onAddToCart={handleAddToCart} />}
        />
      </Routes>
      <Footer />
      <CartDrawer />
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
