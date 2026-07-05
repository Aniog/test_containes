import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Nav from '@/components/Nav'
import CartDrawer from '@/components/CartDrawer'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-velvet text-velvet-50 flex flex-col">
      <Nav />
      <CartDrawer />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
