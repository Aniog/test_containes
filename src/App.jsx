import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import './index.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<AboutPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#faf8f5',
              border: 'none',
              borderRadius: '0',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8125rem',
            },
          }}
        />
      </CartProvider>
    </Router>
  )
}

export default App
