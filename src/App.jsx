import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import ScrollToTop from '@/components/ScrollToTop'
import HomePage from '@/pages/Home'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import AboutPage from '@/pages/AboutPage'
import CollectionsPage from '@/pages/CollectionsPage'
import JournalPage from '@/pages/JournalPage'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
