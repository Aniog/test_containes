import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CartProvider } from '@/components/common/CartContext.jsx'
import Layout from '@/components/common/Layout.jsx'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
