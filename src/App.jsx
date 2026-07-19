import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/cart/CartContext'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import './App.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/about" element={<div className="pt-28 px-4 max-w-3xl mx-auto py-20"><h1 className="font-serif text-3xl tracking-wide text-espresso">Our Story</h1><p className="mt-4 text-taupe font-sans">Coming soon.</p></div>} />
            <Route path="/journal" element={<div className="pt-28 px-4 max-w-3xl mx-auto py-20"><h1 className="font-serif text-3xl tracking-wide text-espresso">Journal</h1><p className="mt-4 text-taupe font-sans">Coming soon.</p></div>} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="font-serif text-4xl text-espresso tracking-wide mb-4">Page Not Found</h1>
                  <p className="text-taupe font-sans text-sm">The page you're looking for doesn't exist.</p>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  )
}

export default App
