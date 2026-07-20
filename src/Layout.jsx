import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, X, Menu, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './lib/utils';

const Layout = ({ children, cart, removeFromCart, updateQuantity }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
          isScrolled || !isHome ? "bg-white/95 backdrop-blur-sm text-velmora-dark shadow-sm" : "bg-transparent text-white"
        )}
      >
        {/* Left: Logo */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-serif tracking-widest font-semibold">VELMORA</Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex flex-[2] items-center justify-center space-x-12 text-sm tracking-widest uppercase">
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <button className="hover:text-velmora-gold transition-colors text-sm tracking-widest uppercase">Collections</button>
          <button className="hover:text-velmora-gold transition-colors text-sm tracking-widest uppercase">About</button>
          <button className="hover:text-velmora-gold transition-colors text-sm tracking-widest uppercase">Journal</button>
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end space-x-6">
          <button className="hidden sm:block hover:text-velmora-gold transition-colors">
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative hover:text-velmora-gold transition-colors border-none bg-transparent p-0"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden hover:text-velmora-gold transition-colors border-none bg-transparent p-0"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-velmora-dark text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-widest font-semibold text-white">VELMORA</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Quiet luxury for every day.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-velmora-gold">All Products</Link></li>
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">Earrings</button></li>
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">Necklaces</button></li>
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">Huggies</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Help</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">Shipping</button></li>
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">Returns</button></li>
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">Care Guide</button></li>
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">FAQ</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">Our Story</button></li>
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">Sustainability</button></li>
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">Wholesale</button></li>
              <li><button className="hover:text-velmora-gold bg-transparent border-none p-0 text-sm text-gray-400">Contact</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 grayscale opacity-50">
            <div className="w-8 h-5 bg-white/20 rounded"></div>
            <div className="w-8 h-5 bg-white/20 rounded"></div>
            <div className="w-8 h-5 bg-white/20 rounded"></div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col text-[#1A1A1A]"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <h2 className="text-xl font-serif tracking-widest uppercase text-[#1A1A1A]">Your Bag</h2>
                <button onClick={() => setIsCartOpen(false)} className="hover:text-velmora-gold transition-colors bg-transparent border-none p-0">
                  <X size={24} className="text-[#1A1A1A]" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-8 no-scrollbar bg-white">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <p className="text-gray-500 font-serif italic text-[#1A1A1A]">Your bag is currently empty.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="px-8 py-3 bg-[#1A1A1A] text-white uppercase text-xs tracking-widest hover:bg-velmora-gold transition-colors"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex space-x-4">
                      <div className="w-24 h-32 bg-[#FAF7F2] flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div className="space-y-1">
                          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#1A1A1A]">{item.name}</h3>
                          <p className="text-sm text-velmora-gold">${item.price}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 border border-gray-200 px-2 py-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-velmora-gold bg-transparent border-none p-0"><Minus size={14} className="text-[#1A1A1A]" /></button>
                            <span className="text-sm w-4 text-center text-[#1A1A1A]">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-velmora-gold bg-transparent border-none p-0"><Plus size={14} className="text-[#1A1A1A]" /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] underline bg-transparent border-none">Remove</button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-100 space-y-6 bg-[#FDFCFB]">
                  <div className="flex justify-between items-center text-sm font-semibold uppercase tracking-widest text-[#1A1A1A]">
                    <span>Subtotal</span>
                    <span>${cartTotal}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center">Shipping & taxes calculated at checkout</p>
                  <button className="w-full py-4 bg-[#1A1A1A] text-white uppercase text-sm tracking-widest hover:bg-velmora-gold transition-colors border-none">
                    Checkout Now
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[100] bg-[#1A1A1A] text-white flex flex-col items-center justify-center space-y-12 p-10"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white/60 hover:text-white bg-transparent border-none p-0"
            >
              <X size={32} />
            </button>
            <Link to="/" className="text-4xl font-serif tracking-widest mb-10 text-white" onClick={() => setIsMobileMenuOpen(false)}>VELMORA</Link>
            <div className="flex flex-col items-center space-y-8 text-xl tracking-[0.3em] uppercase italic serif text-white">
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="bg-transparent border-none text-white italic uppercase tracking-[0.3em] text-xl font-serif">Collections</button>
              <button onClick={() => setIsMobileMenuOpen(false)} className="bg-transparent border-none text-white italic uppercase tracking-[0.3em] text-xl font-serif">About</button>
              <button onClick={() => setIsMobileMenuOpen(false)} className="bg-transparent border-none text-white italic uppercase tracking-[0.3em] text-xl font-serif">Journal</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
