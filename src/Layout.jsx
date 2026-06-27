import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, X, Plus, Minus, Menu } from 'lucide-react';
import { useCart } from './lib/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './lib/utils';

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
    'fixed top-0 left-0 right-0 z-40 transition-all duration-500 h-20 flex items-center justify-between px-6 md:px-12',
    isScrolled || !isHome ? 'bg-brand-champagne border-b border-black/5 text-brand-ebony' : 'bg-transparent text-white'
  );

  return (
    <nav className={navClasses}>
      <div className="flex-1 flex items-center">
        <Link to="/" className="text-2xl font-serif tracking-widest font-medium">VELMORA</Link>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-xs font-sans letter-spacing-wide font-medium flex-1 justify-center">
        <Link to="/shop" className="hover:text-brand-gold transition-colors">SHOP</Link>
        <Link to="/shop?category=Necklaces" className="hover:text-brand-gold transition-colors">COLLECTIONS</Link>
        <Link to="/" className="hover:text-brand-gold transition-colors">ABOUT</Link>
        <Link to="/" className="hover:text-brand-gold transition-colors">JOURNAL</Link>
      </div>

      <div className="flex-1 flex items-center justify-end space-x-6">
        <button className="hover:text-brand-gold transition-colors"><Search size={20} /></button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative hover:text-brand-gold transition-colors"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans">
              {cartCount}
            </span>
          )}
        </button>
        <button className="md:hidden"><Menu size={20} /></button>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-ebony text-white pt-20 pb-10 px-6 md:px-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="space-y-6">
        <h3 className="text-2xl font-serif tracking-widest font-medium">VELMORA</h3>
        <p className="text-white/60 text-sm font-sans max-w-xs">
          Crafting demi-fine gold jewelry for the modern woman. Timeless pieces designed to be treasured for a lifetime.
        </p>
      </div>
      <div>
        <h4 className="text-xs font-sans tracking-widest mb-6 font-semibold uppercase">Shop</h4>
        <ul className="space-y-4 text-sm text-white/60 font-sans">
          <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
          <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
          <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
          <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-sans tracking-widest mb-6 font-semibold uppercase">Help</h4>
        <ul className="space-y-4 text-sm text-white/60 font-sans">
          <li><Link to="/" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Jewelry Care</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Size Guide</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-sans tracking-widest mb-6 font-semibold uppercase">Company</h4>
        <ul className="space-y-4 text-sm text-white/60 font-sans">
          <li><Link to="/" className="hover:text-white transition-colors">Our Story</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Journal</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">In the Press</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Wholesale</Link></li>
        </ul>
      </div>
    </div>
    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-white/40 tracking-widest font-sans">
      <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
      <div className="flex space-x-8 lg:space-x-12">
        <span className="hover:text-white transition-colors cursor-pointer">PRIVACY POLICY</span>
        <span className="hover:text-white transition-colors cursor-pointer">TERMS OF SERVICE</span>
      </div>
    </div>
  </footer>
);

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <h2 className="text-lg font-serif tracking-widest uppercase">Shopping Bag</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6">
                  <p className="text-brand-slate font-sans uppercase text-xs tracking-widest">Your bag is empty</p>
                  <Link 
                    to="/shop" 
                    onClick={() => setIsCartOpen(false)}
                    className="px-8 py-3 bg-brand-ebony text-white text-xs tracking-widest font-sans uppercase hover:bg-brand-ebony/90 transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="w-24 h-32 bg-brand-cream relative overflow-hidden flex-shrink-0">
                      <img 
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-title-${item.id}]`}
                        data-strk-img-ratio="2x3"
                        data-strk-img-width="150"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <span id={`cart-item-title-${item.id}`} className="hidden">{item.name} {item.category}</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-xs font-serif tracking-widest uppercase font-medium">{item.name}</h3>
                          <p className="text-xs font-sans tracking-wide font-semibold">${item.price}</p>
                        </div>
                        <p className="text-[10px] text-brand-slate tracking-widest uppercase mt-1">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 border border-black/10 px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-brand-gold transition-colors">
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-sans w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-brand-gold transition-colors">
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] tracking-widest uppercase underline text-brand-slate hover:text-brand-ebony"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-black/5 bg-brand-champagne space-y-4">
                <div className="flex justify-between items-center px-2">
                  <span className="text-xs font-sans tracking-widest uppercase font-semibold">Subtotal</span>
                  <span className="text-sm font-sans font-semibold">${cartTotal}</span>
                </div>
                <button className="w-full py-4 bg-brand-ebony text-white text-xs tracking-[0.2em] font-sans uppercase hover:bg-brand-ebony/90 transition-all">
                  Checkout
                </button>
                <p className="text-[10px] text-center text-brand-slate font-sans uppercase tracking-widest">
                  Shipping and taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-champagne flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
