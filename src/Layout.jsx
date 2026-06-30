import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Minus, Plus } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useCart } from './components/CartProvider';
import { cn } from './lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, isOpen, setIsOpen, items, updateQuantity, cartTotal } = useCart();
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
  }, [location]);

  useEffect(() => {
    if (isOpen) {
        const frameId = window.requestAnimationFrame(() => {
            // Need a ref on the cart drawer for this to work correctly
            const cartDrawer = document.getElementById('cart-drawer');
            if (cartDrawer) {
                ImageHelper.loadImages(strkImgConfig, cartDrawer);
            }
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <div className="flex flex-col min-h-screen relative font-sans">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          (isScrolled || !isHome || isMobileMenuOpen) ? "bg-background text-foreground shadow-sm py-4" : "bg-transparent text-white py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 w-1/3 text-sm tracking-wide">
            <Link to="/collections">Shop</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/">About</Link>
            <Link to="/">Journal</Link>
          </nav>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center">
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest uppercase">
              Velmora
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end gap-4 md:gap-6 w-1/3">
            <button className="hidden md:block hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="relative hover:opacity-70 transition-opacity p-2 -mr-2"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-t border-border flex flex-col p-4 md:hidden shadow-lg">
            <Link to="/collections" className="py-3 uppercase tracking-wider text-sm border-b border-border text-foreground">Shop All</Link>
            <Link to="/collections" className="py-3 uppercase tracking-wider text-sm border-b border-border text-foreground">Collections</Link>
            <Link to="/" className="py-3 uppercase tracking-wider text-sm border-b border-border text-foreground">About</Link>
            <Link to="/" className="py-3 uppercase tracking-wider text-sm text-foreground">Journal</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm leading-relaxed">
            <div className="md:col-span-1">
              <h2 className="font-serif text-2xl tracking-widest uppercase mb-6">Velmora</h2>
              <p className="text-secondary-foreground/70 text-balance">
                Crafted to be treasured. Demi-fine jewelry designed for the modern editorial aesthetic.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium uppercase tracking-widest mb-6">Shop</h3>
              <ul className="space-y-4 text-secondary-foreground/80">
                <li><Link to="/collections" className="hover:text-primary transition-colors">All Jewelry</Link></li>
                <li><Link to="/collections" className="hover:text-primary transition-colors">Earrings</Link></li>
                <li><Link to="/collections" className="hover:text-primary transition-colors">Necklaces</Link></li>
                <li><Link to="/collections" className="hover:text-primary transition-colors">Huggies</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium uppercase tracking-widest mb-6">Help</h3>
              <ul className="space-y-4 text-secondary-foreground/80">
                <li><Link to="/" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium uppercase tracking-widest mb-6">Company</h3>
              <ul className="space-y-4 text-secondary-foreground/80">
                <li><Link to="/" className="hover:text-primary transition-colors">Our Story</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors">Journal</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors">Sustainability</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between text-xs text-secondary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/" className="hover:text-primary">Terms</Link>
              <Link to="/" className="hover:text-primary">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
      <div 
        id="cart-drawer"
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background z-[70] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl tracking-wider uppercase">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 hover:opacity-70 text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 text-foreground">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground space-y-4">
              <ShoppingBag className="w-12 h-12 stroke-[1px]" />
              <p>Your cart is empty.</p>
              <button 
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-primary hover:underline underline-offset-4 mt-2 uppercase tracking-widest text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary flex-shrink-0">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img={`[cart-item-${item.id}-img]`}
                      data-strk-img-id={`cart-thumb-${item.id}`}
                      data-strk-img-ratio="1x1"
                      className="w-full h-full object-cover"
                      alt={item.name}
                    />
                    <span id={`cart-item-${item.id}-img`} className="hidden">{item.name} gold jewelry on model</span>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif uppercase tracking-wider text-sm pr-4">{item.name}</h3>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, 0)}
                          className="text-muted-foreground hover:text-foreground p-1 -mr-1 -mt-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 capitalize">{item.variant || 'Gold'}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                       <div className="flex items-center border border-border rounded-none w-min">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-muted-foreground hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-muted-foreground hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm tracking-widest">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background space-y-4">
            <div className="flex justify-between items-center text-sm font-medium tracking-widest uppercase">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground italic">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 uppercase tracking-widest text-sm transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}