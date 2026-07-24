import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteHeader from '@/components/store/SiteHeader'
import SiteFooter from '@/components/store/SiteFooter'
import CartDrawer from '@/components/store/CartDrawer'
import { CartProvider } from '@/context/CartContext'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velmora-bg text-velmora-ivory">
          <SiteHeader />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
            </Routes>
          </main>
          <SiteFooter />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
