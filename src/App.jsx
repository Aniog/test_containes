import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const addToCart = (product, variant = 'Gold') => {
    const cartItem = { ...product, variant, quantity: 1 };
    setCart(prev => [...prev, cartItem]);
  };

  const updateQuantity = (index, newQuantity) => {
    setCart(prev => prev.map((item, i) => 
      i === index ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar 
        cartCount={cartCount} 
        onCartOpen={() => setIsCartOpen(true)}
        onSearchOpen={() => setIsSearchOpen(true)}
      />
      
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductPage onAddToCart={addToCart} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 bg-black/40" onClick={() => setIsSearchOpen(false)}>
          <div className="bg-white w-full max-w-lg mx-4 p-8" onClick={e => e.stopPropagation()}>
            <input 
              type="text" 
              placeholder="Search our collection..." 
              className="input text-lg"
              autoFocus
            />
            <div className="mt-4 text-xs text-[#6B6B6B] tracking-[0.1em]">Try: earrings, necklaces, huggies, sets</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
