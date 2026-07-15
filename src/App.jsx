import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Navigation from '@/components/layout/Navigation'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'
import About from '@/pages/About'
import Journal from '@/pages/Journal'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-cream flex flex-col">
          <Navigation />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
