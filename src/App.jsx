import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/components/cart/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-cream text-stone-800 font-sans">
          <Navbar />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
