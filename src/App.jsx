import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import SiteHeader from './components/layout/SiteHeader'
import SiteFooter from './components/layout/SiteFooter'
import AppErrorBoundary from './components/layout/AppErrorBoundary'
import { CartProvider } from './components/store/CartContext'
import CartDrawer from './components/store/CartDrawer'
import PreviewNavigationBridge from './components/layout/PreviewNavigationBridge'

function App() {
  return (
    <BrowserRouter>
      <AppErrorBoundary>
        <CartProvider>
          <PreviewNavigationBridge />
          <div className="min-h-screen bg-shell text-ink">
            <SiteHeader />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
            </Routes>
            <SiteFooter />
            <CartDrawer />
          </div>
        </CartProvider>
      </AppErrorBoundary>
    </BrowserRouter>
  )
}

export default App
