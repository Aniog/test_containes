import { CartProvider } from './context/CartContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import Homepage from './pages/Homepage'
import ProductDetail from './components/product/ProductDetail'
import ShopPage from './components/shop/ShopPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/collections" element={<ShopPage />} />
              <Route path="/about" element={<PlaceholderPage title="About Velmora" />} />
              <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
              <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
              <Route path="/shipping" element={<PlaceholderPage title="Shipping & Returns" />} />
              <Route path="/care" element={<PlaceholderPage title="Care Instructions" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms & Conditions" />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  )
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">{title}</h1>
        <div className="hairline w-24 mx-auto mb-8" />
        <p className="text-velmora-stone">This page is coming soon.</p>
      </div>
    </div>
  )
}

export default App
