import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import { Toaster } from '@/components/ui/sonner'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import About from '@/pages/About'
import Journal from '@/pages/Journal'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
        <Toaster position="bottom-right" />
      </Router>
    </CartProvider>
  )
}

export default App
