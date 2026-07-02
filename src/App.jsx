import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/ui/CartDrawer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import PlaceholderPage from './pages/PlaceholderPage'

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
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/collections" element={<PlaceholderPage title="Collections" subtitle="Curated collections coming soon. Explore our full shop in the meantime." />} />
              <Route path="/about" element={<PlaceholderPage title="Our Story" subtitle="Learn more about Velmora's journey and commitment to sustainable, beautiful jewelry." />} />
              <Route path="/journal" element={<PlaceholderPage title="Journal" subtitle="Styling tips, behind-the-scenes stories, and jewelry care guides coming soon." />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
