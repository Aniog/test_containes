import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCart } from './lib/CartContext';
import CartDrawer from './components/CartDrawer';

export default function Layout() {
  const { openCart, cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 w-full z-30 transition-all duration-300 border-b ${
    isHome && !isScrolled 
      ? 'bg-transparent border-transparent text-white' 
      : 'bg-background/95 backdrop-blur-md border-border text-foreground'
  }`;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className={navClass}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6 hidden md:flex w-1/3">
            <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Shop</Link>
            <Link to="/collections" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Collections</Link>
            <Link to="/about" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">About</Link>
            <Link to="/journal" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Journal</Link>
          </div>
          
          <button className="md:hidden p-2">
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/" className="w-1/3 text-center">
            <h1 className="font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase">Velmora</h1>
          </Link>

          <div className="flex items-center justify-end gap-6 w-1/3">
            <button className="hover:text-accent transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={openCart} className="hover:text-accent transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-primary text-primary-foreground py-16 border-t border-border/20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="font-serif text-3xl tracking-[0.2em] uppercase">Velmora</h2>
            <p className="text-primary-foreground/70 max-w-sm">
              Discover demi-fine jewelry crafted for the modern woman. 
              Subtle elegance for everyday wear and special occasions.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif uppercase tracking-widest text-lg">Shop</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif uppercase tracking-widest text-lg">Help</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
}