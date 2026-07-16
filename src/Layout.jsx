import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Layout = ({ children, cart, removeFromCart, updateQuantity }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Re-load images when route changes or cart opens
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [location.pathname, isCartOpen]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream" ref={containerRef}>
      {/* Sticky Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4 flex items-center justify-between",
          isScrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-stone" : "bg-transparent"
        )}
      >
        <div className="flex-1 hidden lg:flex gap-8">
          <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors">Shop</Link>
          <Link to="#" className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors">Collections</Link>
        </div>

        <div className="lg:hidden flex-1">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X strokeWidth={1.2} /> : <Menu strokeWidth={1.2} />}
          </button>
        </div>

        <Link to="/" className="flex-1 text-center">
          <h1 className="text-2xl lg:text-3xl font-serif tracking-[0.2em] font-medium">VELMORA</h1>
        </Link>

        <div className="flex-1 flex justify-end gap-6 items-center">
          <div className="hidden lg:flex gap-8 mr-8">
            <Link to="#" className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors">About</Link>
            <Link to="#" className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors">Journal</Link>
          </div>
          <button className="hover:text-brand-gold transition-colors">
            <Search size={20} strokeWidth={1.2} />
          </button>
          <button className="relative hover:text-brand-gold transition-colors" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} strokeWidth={1.2} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden animate-fade-in">
          <div className="flex flex-col gap-6 text-center">
            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-serif">Shop</Link>
            <Link to="#" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-serif">Collections</Link>
            <Link to="#" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-serif">About</Link>
            <Link to="#" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-serif">Journal</Link>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <div 
        className={cn(
          "fixed inset-0 z-[60] transition-opacity duration-300",
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
        <div 
          className={cn(
            "absolute top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-out p-8 flex flex-col",
            isCartOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-serif uppercase tracking-widest">Your Bag</h2>
            <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform duration-300">
              <X strokeWidth={1.2} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-brand-secondary opacity-60">
                <ShoppingBag size={48} strokeWidth={0.5} className="mb-4" />
                <p className="uppercase tracking-widest text-sm">Your bag is empty</p>
                <Link 
                  to="/shop" 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 border-b border-brand-black text-brand-black uppercase tracking-widest text-xs py-1"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-brand-stone last:border-0">
                    <div className="w-24 h-32 bg-stone-100 overflow-hidden">
                      <img 
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-${item.id}-title] jewelry close up`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 id={`cart-item-${item.id}-title`} className="text-sm uppercase tracking-widest font-medium mb-1">{item.name}</h3>
                        <p className="text-sm text-stone-500 font-serif">${item.price}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-brand-stone">
                          <button 
                            className="px-2 py-1 text-stone-400 hover:text-brand-black"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            -
                          </button>
                          <span className="px-3 text-xs">{item.quantity}</span>
                          <button 
                            className="px-2 py-1 text-stone-400 hover:text-brand-black"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                        <button 
                          className="text-xs uppercase tracking-widest text-stone-400 hover:text-brand-black underline decoration-stone-200 underline-offset-4"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="pt-8 border-t border-brand-stone bg-white">
              <div className="flex justify-between items-center mb-6">
                <span className="uppercase tracking-widest text-sm font-medium">Subtotal</span>
                <span className="font-serif text-lg">${totalPrice}</span>
              </div>
              <button className="w-full bg-brand-black text-white py-4 uppercase tracking-widest text-sm hover:bg-stone-800 transition-colors">
                Checkout
              </button>
              <p className="text-[10px] text-center mt-4 text-stone-400 uppercase tracking-widest">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-20 px-6 lg:px-20 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-serif tracking-[0.2em] mb-4">VELMORA</h2>
            <p className="text-stone-400 text-sm max-w-xs leading-relaxed">
              Timeless demi-fine jewelry designed for the modern woman. Quiet luxury crafted to be treasured.
            </p>
            <div className="flex gap-4">
              <Instagram size={18} strokeWidth={1} className="text-stone-400 hover:text-white transition-colors cursor-pointer" />
              <Facebook size={18} strokeWidth={1} className="text-stone-400 hover:text-white transition-colors cursor-pointer" />
              <Twitter size={18} strokeWidth={1} className="text-stone-400 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-2">Shop</h3>
            <Link to="/shop" className="text-stone-400 hover:text-white transition-colors text-sm">All Jewelry</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">Earrings</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">Necklaces</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">Best Sellers</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-2">Help</h3>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">Shipping & Returns</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">Materials & Care</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">Size Guide</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">FAQ</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-2">Company</h3>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">Our Story</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">Journal</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 text-[10px] uppercase tracking-widest">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 grayscale opacity-50">
            {/* Payment Icons Placeholder */}
            <span className="text-[10px] tracking-widest uppercase text-stone-500">VISA</span>
            <span className="text-[10px] tracking-widest uppercase text-stone-500">MASTERCARD</span>
            <span className="text-[10px] tracking-widest uppercase text-stone-500">AMEX</span>
            <span className="text-[10px] tracking-widest uppercase text-stone-500">APPLE PAY</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;