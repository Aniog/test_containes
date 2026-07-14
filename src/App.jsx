import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartDrawer from '@/components/CartDrawer'
import { CartProvider } from '@/components/CartContext'
import ImageLoader from '@/components/ImageLoader'
import PreviewBridge from '@/components/PreviewBridge'
import ScrollToTop from '@/components/ScrollToTop'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function AppShell() {
  return (
    <ImageLoader>
      <PreviewBridge />
      <ScrollToTop />
      <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
        </Routes>
        <SiteFooter />
        <CartDrawer />
      </div>
    </ImageLoader>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
