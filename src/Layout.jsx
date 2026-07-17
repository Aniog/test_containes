import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from './lib/CartContext';
import { cn } from './lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const { cart, cartCount, cartTotal, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname, setIsCartOpen]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?collection=all' },
    { name: 'About', path: '#' },
    { name: 'Journal', path: '#' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between",
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border py-3" : "bg-transparent text-[#1a1a1a]"
        )}
      >
        <div className="flex-1 flex items-center lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="hidden lg:flex flex-1 items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xs uppercase tracking-widest hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link to="/" className="flex-1 text-center font-serif text-2xl tracking-[0.2em] font-medium transition-luxury">
          VELMORA
        </Link>

        <div className="flex-1 flex items-center justify-end gap-6">
          <button className="hidden sm:block hover:text-accent transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="flex items-center gap-2 hover:text-accent transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background lg:hidden p-8 flex flex-col"
          >
            <button 
              className="self-end mb-12"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-serif text-3xl tracking-widest hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-md bg-background shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h2 className="font-serif text-xl tracking-widest uppercase">Shopping Bag ({cartCount})</h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground stroke-1" />
                    <p className="text-muted-foreground uppercase tracking-widest text-sm">Your bag is empty</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="bg-accent text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors"
                    >
                      Shop All
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-secondary overflow-hidden">
                        <img 
                          src={item.images[0]} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.category}</p>
                          <h3 className="font-serif text-sm tracking-widest uppercase mb-1">{item.name}</h3>
                          <p className="text-sm">${item.price}</p>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center border border-border">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 px-2 hover:bg-secondary transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs px-2 w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 px-2 hover:bg-secondary transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Subtotal</span>
                    <span className="font-serif text-lg tracking-widest">${cartTotal}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                    Shipping & taxes calculated at checkout
                  </p>
                  <button className="w-full bg-accent text-white py-4 text-xs uppercase tracking-widest hover:bg-accent/90 transition-luxury">
                    Checkout Now
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-16 lg:pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-16 px-6 sm:px-12 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium">VELMORA</Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Timeless demi-fine jewelry designed for the modern woman. Crafted with intention to be treasured for a lifetime.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Help</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Connect</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">Instagram</Link></li>
              <li><Link to="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">Pinterest</Link></li>
              <li><Link to="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">Pinterest</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4 grayscale opacity-50">
             {/* Payment Icons Placeholder */}
             <div className="w-8 h-5 bg-muted rounded-sm"></div>
             <div className="w-8 h-5 bg-muted rounded-sm"></div>
             <div className="w-8 h-5 bg-muted rounded-sm"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;