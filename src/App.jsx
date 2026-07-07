import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import Home from '@/pages/Home'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import AboutPage from '@/pages/AboutPage'
import JournalPage from '@/pages/JournalPage'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-warm-white">
          <Nav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
