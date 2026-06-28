import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHomepage || isMobileMenuOpen
      ? 'bg-sand-50/95 backdrop-blur-md shadow-sm py-4 text-stone-950'
      : 'bg-transparent py-6 text-white'
  }`;

  const linkClasses = `text-sm uppercase tracking-widest transition-colors hover:text-gold-500`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Left / Center Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className={linkClasses}>Shop</Link>
            <Link to="/collections" className={linkClasses}>Collections</Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest font-medium">
              VELMORA
            </Link>
          </div>

          {/* Right Links & Icons */}
          <div className="flex items-center justify-end space-x-4 md:space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className={linkClasses}>About</Link>
              <Link to="/journal" className={linkClasses}>Journal</Link>
            </div>
            
            <div className="flex items-center space-x-4 border-l border-current/20 pl-4 md:pl-8">
              <button aria-label="Search" className="hover:text-gold-500 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button 
                className="relative hover:text-gold-500 transition-colors p-1"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 -mr-1 -mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-600 text-[9px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-sand-50 border-t border-stone-200 shadow-lg py-4 px-4 flex flex-col space-y-4">
          <Link to="/shop" className="text-stone-950 uppercase tracking-widest text-sm py-2 border-b border-stone-100">Shop</Link>
          <Link to="/collections" className="text-stone-950 uppercase tracking-widest text-sm py-2 border-b border-stone-100">Collections</Link>
          <Link to="/about" className="text-stone-950 uppercase tracking-widest text-sm py-2 border-b border-stone-100">About</Link>
          <Link to="/journal" className="text-stone-950 uppercase tracking-widest text-sm py-2">Journal</Link>
        </div>
      )}
    </nav>
  );
}
