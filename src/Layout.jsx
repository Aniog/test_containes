import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const cartContainerRef = useRef(null);
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'VIVID AURA JEWELS', price: 42, quantity: 1, imgId: "cart-item-1", titleId: "cart-item-1-title" },
  ]);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        if (ImageHelper && ImageHelper.loadImages && cartContainerRef.current) {
          ImageHelper.loadImages(strkImgConfig, cartContainerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen]);

  const updateQuantity = (id, delta) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };
  
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isHomepage ? "bg-transparent text-foreground hover:bg-background/90 hover:backdrop-blur-md" : "bg-background/90 backdrop-blur-md border-b"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 relative">
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden z-10">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 -ml-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8 z-10 w-1/3">
              <Link to="/shop" className="text-sm tracking-wide lowercase hover:text-primary transition-colors">Shop</Link>
              <Link to="/collections" className="text-sm tracking-wide lowercase hover:text-primary transition-colors">Collections</Link>
              <Link to="/about" className="text-sm tracking-wide lowercase hover:text-primary transition-colors">About</Link>
              <Link to="/journal" className="text-sm tracking-wide lowercase hover:text-primary transition-colors">Journal</Link>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center z-10 absolute left-0 right-0 pointer-events-none">
              <Link to="/" className="font-serif text-3xl tracking-widest uppercase pointer-events-auto">
                Velmora
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6 z-10 w-1/3 sm:justify-end justify-end ml-auto">
              <button className="p-2 hover:text-primary transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:text-primary transition-colors relative" onClick={() => setIsCartOpen(true)}>
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-background border-t">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/shop" className="block px-3 py-3 text-base tracking-wide border-b border-border/50">Shop</Link>
              <Link to="/collections" className="block px-3 py-3 text-base tracking-wide border-b border-border/50">Collections</Link>
              <Link to="/about" className="block px-3 py-3 text-base tracking-wide border-b border-border/50">About</Link>
              <Link to="/journal" className="block px-3 py-3 text-base tracking-wide">Journal</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity" onClick={() => setIsCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-md w-full flex bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out" ref={cartContainerRef}>
            <div className="flex w-full h-full flex-col p-6">
              <div className="flex items-start justify-between">
                <h2 className="font-serif text-2xl">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:text-primary">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8 flex-1 overflow-y-auto">
                {cartItems.length === 0 ? (
                  <div className="text-center text-muted-foreground mt-20">
                    <ShoppingBag className=" mx-auto h-12 w-12 mb-4 opacity-50" />
                    <p className="font-serif text-xl">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex py-2">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-muted">
                          <img
                            data-strk-img-id={item.imgId}
                            data-strk-img={`[${item.titleId}] gold jewelry`}
                            data-strk-img-ratio="1x1"
                            data-strk-img-width="100"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium">
                              <h3 id={item.titleId} className="uppercase tracking-widest text-sm text-muted-foreground">
                                <a href="#">{item.name}</a>
                              </h3>
                              <p className="ml-4">${item.price}</p>
                            </div>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center border rounded-md">
                              <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:text-primary"><Minus className="h-3 w-3" /></button>
                              <span className="px-2">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:text-primary"><Plus className="h-3 w-3" /></button>
                            </div>
                            <button type="button" onClick={() => updateQuantity(item.id, -item.quantity)} className="font-medium text-muted-foreground hover:text-foreground underline underline-offset-4">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t pt-6 mt-6">
                  <div className="flex justify-between text-base font-medium mb-4">
                    <p>Subtotal</p>
                    <p>${cartTotal.toFixed(2)}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
                  <button className="w-full bg-foreground text-background py-4 flex items-center justify-center font-medium hover:bg-primary transition-colors uppercase tracking-widest text-sm">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted py-16 border-t font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
            <div className="md:col-span-1">
              <h3 className="font-serif text-3xl tracking-widest uppercase mb-6 text-foreground">Velmora</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Fine jewelry crafted to be treasured. Ethically sourced, designed for everyday luxury.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 uppercase tracking-widest text-xs">Shop</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link to="/shop" className="hover:text-primary transition-colors">All Jewelry</Link></li>
                <li><Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
                <li><Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
                <li><Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
                <li><Link to="/shop?category=rings" className="hover:text-primary transition-colors">Rings</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 uppercase tracking-widest text-xs">Help</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Jewelry Care</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                <li><Link to="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary">Terms</a>
              <a href="#" className="hover:text-primary">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
