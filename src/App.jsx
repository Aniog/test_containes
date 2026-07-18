import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Shop from './pages/Shop.jsx'
import { CartProvider } from './context/CartContext.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
