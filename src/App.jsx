import { Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext.jsx'
import Layout from '@/components/Layout.jsx'
import ImageLoader from '@/components/ImageLoader.jsx'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import About from '@/pages/About.jsx'
import Journal from '@/pages/Journal.jsx'

function App() {
  return (
    <CartProvider>
      <ImageLoader>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </Layout>
      </ImageLoader>
    </CartProvider>
  )
}

export default App
