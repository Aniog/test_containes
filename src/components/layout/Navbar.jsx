import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/badge';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
  }, [location]);

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
    isHome && !isScrolled && !mobileMenuOpen
      ? 'bg-transparent text-white border-transparent'
      : 'bg-background text-foreground border-border shadow-sm'
  );

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
              <Link to="/" className="font-serif text-2xl tracking-widest uppercase">
                Velmora
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center space-x-8">
              <Link to="/shop" className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors">Shop</Link>
              <Link to="/collections" className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors">Collections</Link>
              <Link to="/about" className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors">About</Link>
              <Link to="/journal" className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors">Journal</Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button aria-label="Search" className="p-2 hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button 
                aria-label="Cart" 
                className="p-2 relative hover:text-primary transition-colors inline-flex items-center"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background text-foreground border-t border-border absolute w-full left-0 top-20 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/shop" className="block px-3 py-4 text-base font-medium uppercase tracking-wide border-b border-border">Shop</Link>
              <Link to="/collections" className="block px-3 py-4 text-base font-medium uppercase tracking-wide border-b border-border">Collections</Link>
              <Link to="/about" className="block px-3 py-4 text-base font-medium uppercase tracking-wide border-b border-border">About</Link>
              <Link to="/journal" className="block px-3 py-4 text-base font-medium uppercase tracking-wide">Journal</Link>
            </div>
          </div>
        )}
      </nav>
      
      <CartDrawer />
    </>
  );
}
