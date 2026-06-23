import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import CartDrawer from '@/components/CartDrawer'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AboutPage from '@/pages/AboutPage'
import CollectionsPage from '@/pages/CollectionsPage'
import HomePage from '@/pages/HomePage'
import JournalPage from '@/pages/JournalPage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-brand-ivory text-brand-espresso">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
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
