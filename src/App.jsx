import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from '@/components/layout/SiteLayout'
import ScrollToTop from '@/components/shared/ScrollToTop'
import { CartProvider } from '@/context/CartContext'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import About from '@/pages/About'
import Journal from '@/pages/Journal'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
