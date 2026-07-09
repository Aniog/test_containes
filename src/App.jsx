import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/ui/Navbar'
import CartDrawer from '@/components/ui/CartDrawer'
import Footer from '@/components/ui/Footer'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import './App.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-velmora-cream font-sans text-velmora-base">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1a1a1a',
                color: '#fff',
                fontSize: '13px',
                fontFamily: 'Inter, system-ui, sans-serif',
              },
            }}
          />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
