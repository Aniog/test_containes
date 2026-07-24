import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import About from '@/pages/About'
import Journal from '@/pages/Journal'
import Shipping from '@/pages/Shipping'
import Care from '@/pages/Care'
import FAQ from '@/pages/FAQ'
import Contact from '@/pages/Contact'
import Sustainability from '@/pages/Sustainability'
import Careers from '@/pages/Careers'
import './App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="about" element={<About />} />
            <Route path="journal" element={<Journal />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="care" element={<Care />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="careers" element={<Careers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
