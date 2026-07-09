import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import About from '@/pages/About'
import Journal from '@/pages/Journal'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-ivory">
          <Nav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
