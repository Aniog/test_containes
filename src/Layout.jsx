import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between",
          isScrolled || !isHome ? "bg-background border-b border-border py-3 md:py-4" : "bg-transparent text-white"
        )}
      >
        <div className="flex items-center gap-8">
          <button 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase-widest">
            <Link to="/collections" className="hover:opacity-60 transition-opacity">Shop</Link>
            <Link to="/collections" className="hover:opacity-60 transition-opacity">Collections</Link>
          </div>
        </div>

        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest absolute left-1/2 -translate-x-1/2 group">
          VELMORA
          <span className="block h-[1px] w-0 group-hover:w-full bg-current transition-all duration-500 mx-auto" />
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase-widest text-right">
            <Link to="/about" className="hover:opacity-60 transition-opacity">About</Link>
            <Link to="/journal" className="hover:opacity-60 transition-opacity">Journal</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:opacity-60 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="hover:opacity-60 transition-opacity relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background animate-in fade-in slide-in-from-left duration-300">
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-serif tracking-widest">VELMORA</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-xl font-serif">
              <Link to="/collections">Shop All</Link>
              <Link to="/collections">Collections</Link>
              <Link to="/about">About Us</Link>
              <Link to="/journal">Journal</Link>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary pt-20 pb-10 px-6 md:px-12 border-t border-border">
        {/* ... same footer code ... */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <p className="text-2xl font-serif tracking-widest mb-6">VELMORA</p>
            <p className="text-sm opacity-60 max-w-xs leading-relaxed">
              Timeless demi-fine jewelry designed for the modern woman. Each piece is crafted with intention.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase-widest mb-6">Shop</h4>
            <ul className="flex flex-col gap-3 text-sm opacity-60">
              <li><Link to="/collections" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/collections" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/collections" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="hover:text-accent transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase-widest mb-6">Help</h4>
            <ul className="flex flex-col gap-3 text-sm opacity-60">
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase-widest mb-6">Connect</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase-widest opacity-40">© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4 opacity-40">
            <div className="w-8 h-5 bg-foreground/10 rounded" />
            <div className="w-8 h-5 bg-foreground/10 rounded" />
            <div className="w-8 h-5 bg-foreground/10 rounded" />
            <div className="w-8 h-5 bg-foreground/10 rounded" />
          </div>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
};

export default Layout;
