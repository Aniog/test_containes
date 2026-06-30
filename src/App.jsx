import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import CartDrawer from './components/cart/CartDrawer'
import HomePage from './components/home/HomePage'
import ShopPage from './components/shop/ShopPage'
import ProductPage from './components/product/ProductPage'
import './App.css'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={
              <div className="pt-24 pb-16 max-w-3xl mx-auto px-4">
                <h1 className="velmora-heading text-4xl md:text-5xl mb-8 text-center">Our Story</h1>
                <div className="velmora-divider mb-8" />
                <p className="text-[#8a8279] leading-relaxed mb-6">
                  Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
                  Founded in 2024, we set out to create demi-fine pieces that feel as good as they look — 
                  crafted with care, priced with honesty, and designed to become part of your everyday story.
                </p>
                <p className="text-[#8a8279] leading-relaxed mb-6">
                  Every piece in our collection is made with 18K gold plating over recycled brass, 
                  ensuring both quality and sustainability. We work with artisans who share our commitment 
                  to ethical production and fair wages.
                </p>
                <p className="text-[#8a8279] leading-relaxed">
                  From the first sketch to the final polish, each Velmora piece is designed to be treasured — 
                  not just for its beauty, but for the moments it accompanies.
                </p>
              </div>
            } />
            <Route path="/journal" element={
              <div className="pt-24 pb-16 max-w-3xl mx-auto px-4">
                <h1 className="velmora-heading text-4xl md:text-5xl mb-8 text-center">Journal</h1>
                <div className="velmora-divider mb-8" />
                <p className="text-[#8a8279] leading-relaxed text-center">
                  Styling tips, behind-the-scenes stories, and jewelry care guides coming soon.
                </p>
              </div>
            } />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  )
}

export default App
