import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { StoreProvider } from '@/components/storefront/StoreProvider'
import PreviewRouteBridge from '@/components/storefront/PreviewRouteBridge'
import ScrollManager from '@/components/storefront/ScrollManager'
import SiteShell from '@/components/storefront/SiteShell'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import NotFoundPage from '@/pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <PreviewRouteBridge />
        <ScrollManager />
        <Routes>
          <Route element={<SiteShell />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="collections" element={<Navigate to="/shop" replace />} />
            <Route path="product/:slug" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
