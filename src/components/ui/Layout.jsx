import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Toaster, toast } from 'sonner';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled || !isHome ? 'bg-background/95 backdrop-blur-sm border-b' : 'bg-transparent text-white'
    }`}>
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex-1 hidden md:flex gap-8 items-center text-[10px] font-bold tracking-widest uppercase">
           <Link to="/shop" className="hover:opacity-60 transition-opacity">Shop</Link>
           <Link to="/shop?category=Collections" className="hover:opacity-60 transition-opacity">Collections</Link>
        </div>

        <div className="md:hidden">
          <Menu className="w-6 h-6 cursor-pointer" />
        </div>

        <Link to="/" className="flex-1 text-center font-serif text-2xl md:text-3xl tracking-widest-xl">
          VELMORA
        </Link>

        <div className="flex-1 flex items-center justify-end gap-6">
          <div className="hidden md:flex gap-8 items-center text-[10px] font-bold tracking-widest uppercase mr-8">
             <Link to="/about" className="hover:opacity-60 transition-opacity">About</Link>
             <Link to="/journal" className="hover:opacity-60 transition-opacity">Journal</Link>
          </div>
          <Search className="w-5 h-5 cursor-pointer hover:opacity-60 transition-opacity" />
          <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag className="w-5 h-5 hover:opacity-60 transition-opacity" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-muted py-20 border-t">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-xl mb-6 block">VELMORA</Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Timeless demi-fine jewelry crafted with intention. Personal expressions of quiet luxury for your everyday treasures.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[10px] tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop?category=Earrings" className="hover:text-foreground">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-foreground">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-foreground">Huggies</Link></li>
              <li><Link to="/shop?category=Collections" className="hover:text-foreground">Collections</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-foreground">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-foreground">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] tracking-widest uppercase mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shipping" className="hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-foreground">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase">© 2024 VELMORA FINE JEWELRY</p>
          <div className="flex gap-8">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground tracking-widest uppercase font-bold">Instagram</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground tracking-widest uppercase font-bold">Pinterest</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground tracking-widest uppercase font-bold">TikTok</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  
  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={() => setIsCartOpen(false)}
      />
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-background shadow-xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="font-serif text-2xl tracking-widest uppercase">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6 hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-muted-foreground mb-8">Your bag is currently empty.</p>
              <Link 
                to="/shop" 
                className="bg-primary text-primary-foreground px-8 py-3 text-[10px] tracking-widest uppercase font-bold hover:opacity-90 transition-opacity"
                onClick={() => setIsCartOpen(false)}
              >
                Shop All
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-muted overflow-hidden">
                    <img 
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                       data-strk-img-id={`cart-item-${item.id}`}
                       data-strk-img={`${item.name} jewelry minimalism`}
                       data-strk-img-ratio="3x4"
                       data-strk-img-width="200"
                       alt={item.name}
                       className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-serif text-lg tracking-wider uppercase">{item.name}</h3>
                        <button onClick={() => removeFromCart(item.id)}>
                          <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        </button>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-border">
                        <button 
                          className="px-3 py-1 hover:bg-muted"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 hover:bg-muted"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="p-6 border-t bg-muted/30">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-bold tracking-widest uppercase">Subtotal</span>
              <span className="font-serif text-xl">${cartTotal}</span>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-4 text-[10px] tracking-widest uppercase font-bold hover:opacity-90 transition-opacity mb-4">
              Checkout
            </button>
            <p className="text-[10px] text-muted-foreground text-center tracking-widest uppercase">
              Free worldwide shipping on all orders
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Layout({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  useEffect(() => {
    // Initial load and whenever content changes that might have images
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.search]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-background">
      <Toaster position="top-center" richColors />
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
