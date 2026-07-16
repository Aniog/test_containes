import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import AppErrorBoundary from '@/components/layout/AppErrorBoundary'
import SiteLayout from '@/components/layout/SiteLayout'
import { PreviewRouteBridge, ScrollManager } from '@/components/layout/ScrollManager'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function App() {
  return (
    <AppErrorBoundary>
      <BrowserRouter>
        <CartProvider>
          <PreviewRouteBridge />
          <ScrollManager />
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </AppErrorBoundary>
  )
}

export default App
