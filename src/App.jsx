import React, { useState, useEffect } from 'react';
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

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant, quantity = 1) => {
    const cartItem = {
      ...product,
      variant,
      quantity
    };

    setCart(prev => {
      // Check if item with same id and variant exists
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.variant === variant
      );

      if (existingIndex !== -1) {
        // Update quantity
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [...prev, cartItem];
      }
    });

    toast.success(`${product.name} added to cart`, {
      description: `${quantity} × ${variant}`,
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true)
      }
    });

    setIsCartOpen(true);
  };

  const updateCartQuantity = (index, newQuantity) => {
    setCart(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], quantity: newQuantity };
      return updated;
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bg)]">
        <Navbar 
          cartCount={cartCount} 
          onCartOpen={() => setIsCartOpen(true)}
          onSearchOpen={() => setIsSearchOpen(true)}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={<Home products={products} onAddToCart={addToCart} />} 
          />
          <Route 
            path="/shop" 
            element={<Shop products={products} onAddToCart={addToCart} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetail onAddToCart={addToCart} />} 
          />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>

        <Footer />

        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQuantity={updateCartQuantity}
          onRemove={removeFromCart}
        />

        <Toaster position="top-center" richColors closeButton />

        {/* Search Modal */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 bg-black/50" onClick={() => setIsSearchOpen(false)}>
            <div className="bg-[var(--color-surface)] w-full max-w-lg mx-4 rounded-lg p-8" onClick={e => e.stopPropagation()}>
              <input 
                type="text" 
                placeholder="Search our collection..." 
                className="w-full text-2xl serif border-b border-[var(--color-border)] pb-4 focus:outline-none placeholder:text-[var(--color-text-muted)]"
                autoFocus
              />
              <p className="text-xs text-[var(--color-text-muted)] mt-4 tracking-[0.1em]">Press ESC to close</p>
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App
