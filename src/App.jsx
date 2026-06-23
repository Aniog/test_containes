import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext'
import CartDrawer from './components/cart/CartDrawer'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'
import './index.css'

function Header() {
  const { itemCount, toggleCart } = useCart();
  
  return (
    <header className="sticky top-0 z-40 bg-velmora-cream shadow-sm transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-serif tracking-widest uppercase">VELMORA</h1>
        <nav className="hidden md:flex space-x-8">
          <Link to="/shop" className="text-sm uppercase tracking-wide hover:text-velmora-gold transition-colors">Shop</Link>
          <a href="#collections" className="text-sm uppercase tracking-wide hover:text-velmora-gold transition-colors">Collections</a>
          <a href="#about" className="text-sm uppercase tracking-wide hover:text-velmora-gold transition-colors">About</a>
          <a href="#journal" className="text-sm uppercase tracking-wide hover:text-velmora-gold transition-colors">Journal</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hover:text-velmora-gold transition-colors">
            <span className="sr-only">Search</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button 
            onClick={toggleCart}
            className="hover:text-velmora-gold transition-colors relative"
          >
            <span className="sr-only">Cart</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-velmora-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl uppercase tracking-widest mb-6">VELMORA</h3>
          <p className="text-sm opacity-80 leading-relaxed">Premium demi-fine jewelry crafted to be treasured. Each piece designed for the modern woman who appreciates understated elegance.</p>
        </div>
        <div>
          <h4 className="uppercase tracking-wider text-sm mb-4">Shop</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
            <li><a href="#" className="hover:text-velmora-gold transition-colors">Earrings</a></li>
            <li><a href="#" className="hover:text-velmora-gold transition-colors">Necklaces</a></li>
            <li><a href="#" className="hover:text-velmora-gold transition-colors">Huggies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-wider text-sm mb-4">Help</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#" className="hover:text-velmora-gold transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-velmora-gold transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-velmora-gold transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-velmora-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-wider text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#" className="hover:text-velmora-gold transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-velmora-gold transition-colors">Journal</a></li>
            <li><a href="#" className="hover:text-velmora-gold transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-velmora-gold transition-colors">Press</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm opacity-60">© 2024 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-sm opacity-60">✦ Visa</span>
          <span className="text-sm opacity-60">✦ Mastercard</span>
          <span className="text-sm opacity-60">✦ Amex</span>
          <span className="text-sm opacity-60">✦ PayPal</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-velmora-cream">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
