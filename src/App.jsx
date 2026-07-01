import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import HomePage from './pages/HomePage';
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-velmora-cream">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<div className="pt-32 pb-20 text-center">Shop Page Coming Soon</div>} />
              <Route path="/product/:id" element={<div className="pt-32 pb-20 text-center">Product Page Coming Soon</div>} />
              <Route path="/collections" element={<div className="pt-32 pb-20 text-center">Collections Coming Soon</div>} />
              <Route path="/about" element={<div className="pt-32 pb-20 text-center">About Page Coming Soon</div>} />
              <Route path="/journal" element={<div className="pt-32 pb-20 text-center">Journal Coming Soon</div>} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App

