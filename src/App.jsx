import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import { CartProvider } from '@/context/CartContext'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/about" element={<div className="pt-24 text-center py-20"><h1 className="font-serif text-3xl">Our Story</h1><p className="text-velvet-500 mt-4">Coming soon.</p></div>} />
            <Route path="/journal" element={<div className="pt-24 text-center py-20"><h1 className="font-serif text-3xl">Journal</h1><p className="text-velvet-500 mt-4">Coming soon.</p></div>} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  )
}

export default App
