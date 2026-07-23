import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartDrawer from '@/components/store/CartDrawer.jsx'
import SiteHeader from '@/components/store/SiteHeader.jsx'
import { CartProvider } from '@/context/CartContext.jsx'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <SiteHeader />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Shop />} path="/shop" />
          <Route element={<ProductDetail />} path="/product/:productId" />
        </Routes>
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
