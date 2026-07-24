import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteLayout from './components/layout/SiteLayout'
import { CartProvider } from './context/CartContext'
import About from './pages/About'
import Collections from './pages/Collections'
import Home from './pages/Home'
import Journal from './pages/Journal'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
