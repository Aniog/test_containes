import { Routes, Route } from 'react-router-dom'
import './App.css'
import { CartProvider } from '@/context/CartContext'
import { Navbar } from '@/components/Navbar'
import { CartDrawer } from '@/components/CartDrawer'
import { Footer } from '@/components/Footer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-velvet text-cream flex flex-col">
        <Navbar />
        <CartDrawer />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
