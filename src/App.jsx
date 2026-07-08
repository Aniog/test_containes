import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'
import CartDrawer from './components/cart/CartDrawer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-velmora-cream text-velmora-text">
      <Header />
      <main className="flex-1 pt-20 lg:pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections/:category" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
