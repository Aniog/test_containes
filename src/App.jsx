import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { CartProvider } from '@/contexts/CartContext'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CartDrawer } from '@/components/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-velmora-bg">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route
                path="*"
                element={
                  <div className="pt-32 text-center">
                    <h1 className="font-serif text-3xl">Page not found</h1>
                  </div>
                }
              />
            </Routes>
          </div>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1c1c1c',
                color: '#fff',
                border: '1px solid #333',
              },
            }}
          />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
