import { Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/Home'
import ShopPage from '@/pages/Shop'
import ProductPage from '@/pages/ProductDetail'
import CollectionsPage from '@/pages/Collections'
import AboutPage from '@/pages/About'
import JournalPage from '@/pages/Journal'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}

export default App
