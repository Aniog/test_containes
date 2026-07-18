import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Trash2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  
  // Basic mock cart state
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([
    { id: 'vivid-aura', name: 'Vivid Aura Jewels', price: 42, quantity: 1, img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E" }
  ]);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleOpenCart = () => setIsCartOpen(true);
    window.addEventListener('open-cart', handleOpenCart);
    return () => window.removeEventListener('open-cart', handleOpenCart);
  }, []);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, cartRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cartItems]);

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isHome ? 'bg-transparent text-white hover:bg-background hover:text-foreground hover:shadow-sm' : 'bg-background text-foreground shadow-sm'}`}>
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex-1">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 -ml-2">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="font-serif text-2xl tracking-widest text-left mt-4 uppercase">Velmora</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-12 text-lg font-medium">
                  <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors tracking-widest uppercase text-sm">Shop All</Link>
                  <Link to="/shop?category=earrings" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors tracking-widest uppercase text-sm">Earrings</Link>
                  <Link to="/shop?category=necklaces" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors tracking-widest uppercase text-sm">Necklaces</Link>
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors tracking-widest uppercase text-sm border-t border-border pt-6 mt-2">About</Link>
                  <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors tracking-widest uppercase text-sm">Journal</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Links (Left) */}
          <nav className="hidden md:flex flex-1 gap-8 text-sm uppercase tracking-wider font-medium">
            <Link to="/shop" className="hover:text-primary/70 transition-colors">Shop</Link>
            <Link to="/collections" className="hover:text-primary/70 transition-colors">Collections</Link>
          </nav>

          {/* Logo (Center) */}
          <Link to="/" className="font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase shrink-0">
            Velmora
          </Link>

          {/* Desktop Links & Icons (Right) */}
          <div className="flex-1 flex justify-end items-center gap-4 md:gap-8">
            <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-medium mr-4">
              <Link to="/about" className="hover:text-primary/70 transition-colors">About</Link>
              <Link to="/journal" className="hover:text-primary/70 transition-colors">Journal</Link>
            </nav>
            <button className="p-2 hover:text-primary/70 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:text-primary/70 transition-colors relative">
                  <ShoppingBag className="w-5 h-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartItems.length}</span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col pt-12" ref={cartRef}>
                <SheetHeader className="mb-8">
                  <SheetTitle className="font-serif text-2xl lowercase tracking-wider flex items-center gap-2">Your Bag <span className="text-muted-foreground text-sm tracking-normal">({cartItems.length})</span></SheetTitle>
                </SheetHeader>
                
                <div className="flex-grow flex flex-col gap-6 overflow-y-auto w-full no-scrollbar pr-2">
                  {cartItems.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-muted-foreground font-light text-sm">
                      Your bag is currently empty.
                    </div>
                  ) : (
                    cartItems.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start w-full">
                        <div className="w-20 aspect-[4/5] bg-muted shrink-0 rounded-sm overflow-hidden">
                           <img 
                              src={item.img} 
                              alt={item.name} 
                              className="w-full h-full object-cover" 
                              data-strk-img-id={`cart-img-${i}`}
                              data-strk-img={`[cart-name-${i}]`}
                              data-strk-img-ratio="4x5"
                              data-strk-img-width="100"
                            />
                        </div>
                        <div className="flex-grow flex flex-col pt-1 h-full min-w-0">
                          <div className="flex justify-between items-start gap-2 mb-1 w-full">
                            <h4 id={`cart-name-${i}`} className="font-serif uppercase tracking-widest text-[13px] leading-tight flex-grow break-words pr-2">{item.name}</h4>
                            <span className="font-medium text-sm shrink-0">${item.price.toFixed(2)}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-4">18K Gold Vermeil</p>
                          
                          <div className="mt-auto flex items-center justify-between w-full">
                            <div className="flex items-center border border-input rounded-sm self-start h-8">
                              <button 
                                className="w-8 flex justify-center text-muted-foreground hover:bg-muted font-medium"
                                onClick={() => {
                                  const newItems = [...cartItems];
                                  if (newItems[0].quantity > 1) newItems[0].quantity -= 1;
                                  setCartItems(newItems);
                                }}
                              >-</button>
                              <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                              <button 
                                className="w-8 flex justify-center text-muted-foreground hover:bg-muted font-medium"
                                onClick={() => {
                                  const newItems = [...cartItems];
                                  newItems[0].quantity += 1;
                                  setCartItems(newItems);
                                }}
                              >+</button>
                            </div>
                            <button 
                              className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                              onClick={() => setCartItems([])}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                <div className="pt-6 border-t border-border mt-auto">
                  <div className="flex justify-between items-center mb-6 font-medium">
                    <span className="uppercase tracking-widest text-sm">Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mb-4">Shipping & taxes calculated at checkout</p>
                  <Button 
                    className="w-full text-xs py-7 uppercase tracking-widest font-medium rounded-none bg-foreground text-background hover:bg-foreground/90" 
                    disabled={cartItems.length === 0}
                  >
                    Checkout
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-1 border-b border-white/10 md:border-none pb-8 md:pb-0">
              <h2 className="font-serif text-3xl tracking-[0.2em] mb-6 uppercase">Velmora</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                Crafted to be treasured. Demi-fine jewelry designed for the modern romantic.
              </p>
            </div>
            
            <div>
              <h3 className="uppercase tracking-widest text-sm font-medium mb-6">Shop</h3>
              <ul className="space-y-4 text-sm text-white/70 font-light">
                <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
                <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
                <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
                <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
                <li><Link to="/shop?category=sets" className="hover:text-white transition-colors">Gift Sets</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-sm font-medium mb-6">Help</h3>
              <ul className="space-y-4 text-sm text-white/70 font-light">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jewelry Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-sm font-medium mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-white/70 font-light">
                <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 font-light">
            <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
