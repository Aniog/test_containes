import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'

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
              <div className="max-w-7xl mx-auto px-4 py-24 text-center">
                <h1 className="font-serif text-3xl text-ink-950 mb-4">Page Not Found</h1>
                <p className="text-sm text-ink-500 mb-8">This page doesn't exist yet.</p>
                <a href="/" className="btn-accent text-xs inline-flex">Back to Home</a>
              </div>
            } />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
