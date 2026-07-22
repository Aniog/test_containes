import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { Toaster } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-pearl">
        <ScrollToTop />
        <Navbar cartCount={cart.reduce((s, i) => s + i.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" />

        <AnimatePresence>
          {isCartOpen && (
            <div className="fixed inset-0 z-[100] flex justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setIsCartOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative w-full max-w-md bg-pearl h-full shadow-2xl p-8 flex flex-col"
              >
                <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
                  <h2 className="serif-uppercase text-xl">Your Cart</h2>
                  <button onClick={() => setIsCartOpen(false)} className="text-stone">Close</button>
                </div>

                <div className="flex-grow overflow-y-auto no-scrollbar">
                  {cart.length === 0 ? (
                    <div className="text-center py-20">
                      <p className="text-stone mb-4">Your cart is empty.</p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="serif-uppercase text-sm underline underline-offset-4"
                      >
                        Start Shopping
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-20 h-24 bg-stone-100 flex-shrink-0" />
                          <div className="flex-grow">
                            <h3 className="serif-uppercase text-xs tracking-wider">{item.name}</h3>
                            <p className="text-stone text-sm mb-2">${item.price}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center border border-border">
                                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1">-</button>
                                <span className="px-3 text-xs">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1">+</button>
                              </div>
                              <button onClick={() => removeFromCart(item.id)} className="text-xs underline text-stone">Remove</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="border-t border-border pt-6 mt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="serif-uppercase text-sm">Total</span>
                      <span className="text-lg font-medium">
                        ${cart.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full bg-onyx text-pearl py-4 serif-uppercase text-sm tracking-widest hover:bg-gold transition-colors">
                      Checkout
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
