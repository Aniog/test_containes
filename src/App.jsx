import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={
              <main className="min-h-screen flex items-center justify-center pt-24">
                <div className="text-center">
                  <h1 className="font-serif text-4xl text-velvet-text mb-4">Page not found</h1>
                  <p className="text-velvet-muted font-sans text-sm mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="btn-primary inline-block">Back to Home</a>
                </div>
              </main>
            } />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
