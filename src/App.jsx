import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function NavigationBridge() {
  const navigate = useNavigate()

  // Expose navigate for the preview bridge script
  if (typeof window !== 'undefined') {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
  }

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavigationBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
