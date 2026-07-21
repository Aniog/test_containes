import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductDetailPage from '@/pages/ProductDetailPage'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route
              path="*"
              element={
                <main className="min-h-screen flex items-center justify-center pt-20">
                  <div className="text-center">
                    <h1 className="font-serif text-4xl text-dark-500 mb-4">Page not found</h1>
                    <p className="text-dark-400 mb-6">The page you're looking for doesn't exist.</p>
                    <a href="/" className="btn-primary inline-block text-sm">Go Home</a>
                  </div>
                </main>
              }
            />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
