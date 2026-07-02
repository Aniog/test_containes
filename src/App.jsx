import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import SiteHeader from '@/components/layout/SiteHeader'
import { CartProvider } from '@/context/CartContext'
import CollectionsPage from '@/pages/CollectionsPage'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velmora-parchment text-velmora-ink">
          <SiteHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:productId" element={<ProductPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
