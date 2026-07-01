import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/cart/CartContext'
import CartDrawer from './components/cart/CartDrawer'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetail from './pages/ProductDetail'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-surface text-base font-sans">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<AboutPage />} />
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
