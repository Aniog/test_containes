import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';
import { products } from './data/products';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const addToCart = (product) => {
    const cartItem = {
      ...product,
      variant: product.variant || 'Gold',
      quantity: product.quantity || 1,
    };
    setCart(prev => [...prev, cartItem]);
    setIsCartOpen(true);
    toast.success(`${product.name} added to cart`);
  };

  const updateQuantity = (index, newQuantity) => {
    setCart(prev => prev.map((item, i) => i === index ? { ...item, quantity: newQuantity } : item));
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const cartCount = cart.length;

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar 
          cartCount={cartCount} 
          onCartOpen={() => setIsCartOpen(true)} 
          onSearchOpen={() => setIsSearchOpen(true)} 
        />

        <Routes>
          <Route path="/" element={<Home products={products} onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop products={products} onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
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
          <>
            <div className="overlay open" onClick={() => setIsSearchOpen(false)} />
            <div className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-md bg-white p-8 z-[100] shadow-xl">
              <input 
                type="text" 
                placeholder="Search our collection..." 
                className="w-full border-b border-[var(--color-border)] pb-3 text-lg focus:outline-none" 
                autoFocus 
              />
              <p className="text-xs text-[var(--color-text-muted)] mt-4 tracking-[0.1em]">Try: huggies, necklace, earrings</p>
            </div>
          </>
        )}

        <Toaster position="top-center" richColors closeButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
