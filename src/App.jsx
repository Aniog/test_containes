import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import Hero from './components/home/Hero'
import TrustBar from './components/home/TrustBar'
import Bestsellers from './components/home/Bestsellers'
import UGCRow from './components/home/UGCRow'
import CategoryTiles from './components/home/CategoryTiles'
import BrandStory from './components/home/BrandStory'
import Testimonials from './components/home/Testimonials'
import Newsletter from './components/home/Newsletter'
import ProductDetail from './components/product/ProductDetail'
import ShopPage from './components/shop/ShopPage'
import products from './data/products'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <CartDrawer />

          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <TrustBar />
                    <Bestsellers products={products} />
                    <UGCRow />
                    <CategoryTiles />
                    <BrandStory />
                    <Testimonials />
                    <Newsletter />
                  </>
                }
              />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/shop" element={<ShopPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
