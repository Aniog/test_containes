import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Collection from '@/pages/Collection'
import ProductDetail from '@/pages/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
