import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from './components/cart/CartContext.jsx';
import { cn } from './lib/utils.js';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, cartTotal, cartCount, isOpen, setIsOpen, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 lg:px-12 py-4 flex items-center justify-between",
          isScrolled || !isHome ? "bg-white text-primary border-b border-border shadow-sm" : "bg-transparent text-white"
        )}
      >
        <div className="flex items-center gap-8">
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
            VELMORA
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/shop" className={({isActive}) => cn("uppercase-spaced text-xs hover:opacity-70 transition-opacity", isActive && "underline underline-offset-4")}>Shop</NavLink>
            <NavLink to="/collections" className="uppercase-spaced text-xs hover:opacity-70 transition-opacity">Collections</NavLink>
            <NavLink to="/about" className="uppercase-spaced text-xs hover:opacity-70 transition-opacity">About</NavLink>
            <NavLink to="/journal" className="uppercase-spaced text-xs hover:opacity-70 transition-opacity">Journal</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 hover:opacity-70 transition-opacity" onClick={() => setIsOpen(true)}>
            <ShoppingBag className="w-5 h-5" />
            <span className="text-sm font-medium">{cartCount}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white text-primary p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-serif tracking-widest">VELMORA</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              <Link to="/shop" className="text-2xl font-serif uppercase tracking-widest border-b border-border pb-4">Shop</Link>
              <Link to="/collections" className="text-2xl font-serif uppercase tracking-widest border-b border-border pb-4">Collections</Link>
              <Link to="/about" className="text-2xl font-serif uppercase tracking-widest border-b border-border pb-4">About</Link>
              <Link to="/journal" className="text-2xl font-serif uppercase tracking-widest border-b border-border pb-4">Journal</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-[70] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[80] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-border flex justify-between items-center">
                <h2 className="text-xl font-serif uppercase tracking-widest">Your Bag</h2>
                <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center gap-4 text-muted-foreground uppercase-spaced">
                    <ShoppingBag className="w-12 h-12 stroke-[1px]" />
                    <p>Your bag is empty</p>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="mt-4 bg-primary text-white px-8 py-3 text-sm hover:opacity-90 transition-opacity"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-border/50 pb-6 last:border-0">
                      <div className="w-24 h-32 bg-secondary overflow-hidden shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="uppercase tracking-wider text-xs font-semibold">{item.name}</h3>
                            <p className="text-muted-foreground text-sm mt-1">${item.price}</p>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center border border-border">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 px-2 hover:bg-secondary transition-colors">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs w-8 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 px-2 hover:bg-secondary transition-colors">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 bg-secondary/50 border-t border-border mt-auto">
                  <div className="flex justify-between mb-4">
                    <span className="uppercase-spaced text-xs font-semibold">Subtotal</span>
                    <span className="text-lg font-serif tracking-wide">${cartTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-6">Free shipping applied at checkout</p>
                  <button className="w-full bg-primary text-white py-4 uppercase tracking-[0.3em] text-xs font-bold hover:opacity-95 transition-all shadow-lg">
                    Check out
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-primary text-secondary py-16 px-6 lg:px-12 mt-20 border-t border-border/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-serif tracking-widest font-bold mb-6 block">VELMORA</Link>
            <p className="text-secondary/70 text-sm max-w-xs leading-relaxed italic">
              "Crafted to be treasured, designed for the modern woman who values quiet luxury and timeless elegance."
            </p>
          </div>
          
          <div>
            <h4 className="uppercase-spaced text-xs font-bold mb-6">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm text-secondary/60">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase-spaced text-xs font-bold mb-6">Help</h4>
            <ul className="flex flex-col gap-4 text-sm text-secondary/60">
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase-spaced text-xs font-bold mb-6">Connect</h4>
            <div className="flex gap-6 mb-8">
              <a href="#" className="hover:text-white transition-colors opacity-60 hover:opacity-100 italic font-serif">Instagram</a>
              <a href="#" className="hover:text-white transition-colors opacity-60 hover:opacity-100 italic font-serif">Pinterest</a>
              <a href="#" className="hover:text-white transition-colors opacity-60 hover:opacity-100 italic font-serif">TikTok</a>
            </div>
            <p className="text-[10px] tracking-widest uppercase opacity-40">© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;