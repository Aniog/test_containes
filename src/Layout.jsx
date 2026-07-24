import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between',
    isScrolled || !isHome ? 'bg-[#121212] py-4 border-b border-white/10' : 'bg-transparent'
  );

  const linkClasses = "text-sm uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors";

  return (
    <nav className={navClasses}>
      <div className="flex-1 flex items-center md:hidden">
        <Menu className="w-5 h-5 cursor-pointer" />
      </div>

      <div className="hidden md:flex flex-1 items-center gap-8">
        <Link to="/shop" className={linkClasses}>Shop</Link>
        <Link to="/collections" className={linkClasses}>Collections</Link>
      </div>

      <div className="flex-1 flex justify-center">
        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest text-[#F9F7F2]">VELMORA</Link>
      </div>

      <div className="flex-1 flex items-center justify-end gap-6">
        <div className="hidden md:flex items-center gap-8 mr-8">
          <Link to="/about" className={linkClasses}>About</Link>
          <Link to="/journal" className={linkClasses}>Journal</Link>
        </div>
        <Search className="w-5 h-5 cursor-pointer hover:text-[#C5A059] transition-colors" />
        <button onClick={() => setIsCartOpen(true)} className="relative">
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-[#C5A059] transition-colors" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#C5A059] text-[#121212] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

const CartDrawer = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#121212] z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-serif uppercase tracking-widest">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="w-6 h-6 hover:text-[#C5A059] transition-colors" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag className="w-12 h-12 text-white/20" />
                  <p className="text-white/60">Your cart is empty.</p>
                  <Link 
                    to="/shop" 
                    onClick={() => setIsCartOpen(false)}
                    className="px-8 py-3 bg-[#C5A059] text-[#121212] uppercase text-xs tracking-widest font-bold"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-white/5 overflow-hidden">
                      <img 
                        src={item.data?.image_url} 
                        alt={item.data?.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm font-serif uppercase tracking-wider">{item.data?.name}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-white/40 hover:text-white transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-[#C5A059] mt-1">${item.data?.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center border border-white/10 hover:border-[#C5A059] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center border border-white/10 hover:border-[#C5A059] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/10 flex flex-col gap-6">
                <div className="flex justify-between items-end">
                  <span className="text-xs uppercase tracking-widest text-white/60">Subtotal</span>
                  <span className="text-xl font-serif text-[#C5A059]">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-4 bg-[#C5A059] text-[#121212] uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#B38D48] transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t border-white/10 pt-20 pb-12 px-6 md:px-12 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-2xl font-serif tracking-widest text-[#F9F7F2]">VELMORA</Link>
          <p className="text-sm text-white/50 max-w-xs leading-relaxed">
            Curated demi-fine jewelry designed for the modern woman. Quiet luxury crafted to be treasured.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Shop</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/60">
            <li><Link to="/shop" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Huggies</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Help</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/60">
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/materials" className="hover:text-white transition-colors">Material & Care</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
        <p className="text-[10px] uppercase tracking-widest text-white/40">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          {/* Social Icons would go here */}
          <span className="text-[10px] uppercase tracking-widest text-white/40 cursor-pointer hover:text-white transition-colors">Instagram</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40 cursor-pointer hover:text-white transition-colors">Pinterest</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40 cursor-pointer hover:text-white transition-colors">TikTok</span>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#F9F7F2] font-sans selection:bg-[#C5A059] selection:text-[#121212]">
      <Navbar />
      <CartDrawer />
      <main className="pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
