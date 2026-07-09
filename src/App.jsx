import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import { Nav } from '@/components/Nav'
import { CartDrawer } from '@/components/CartDrawer'
import { Footer } from '@/components/Footer'
import Home from '@/pages/Home'
import Product from '@/pages/Product'
import Collection from '@/pages/Collection'
import './App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-velmora-bg">
          <Nav />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Collection />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
