import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Collections from '@/pages/Collections'
import About from '@/pages/About'
import Journal from '@/pages/Journal'
import ProductDetail from '@/pages/ProductDetail'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route path="collections" element={<Collections />} />
            <Route path="about" element={<About />} />
            <Route path="journal" element={<Journal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
