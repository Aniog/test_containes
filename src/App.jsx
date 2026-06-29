import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/hooks/useCart'
import { Navbar } from '@/components/Navbar'
import { CartDrawer } from '@/components/CartDrawer'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { ProductDetail } from '@/pages/ProductDetail'
import { Collection } from '@/pages/Collection'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Collection />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
