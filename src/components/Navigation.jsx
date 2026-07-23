import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

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

  const navClass = `sticky-nav ${isScrolled ? 'solid' : 'transparent'}`;
  const textColor = isScrolled ? 'text-charcoal' : 'text-cream-50';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link 
            to="/" 
            className={`font-serif text-2xl tracking-wider ${textColor}`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            VELMORA
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/shop" 
              className={`${textColor} hover:opacity-70 transition-opacity uppercase tracking-wider text-sm`}
            >
              Shop
            </Link>
            <Link 
              to="/collections" 
              className={`${textColor} hover:opacity-70 transition-opacity uppercase tracking-wider text-sm`}
            >
              Collections
            </Link>
            <Link 
              to="/about" 
              className={`${textColor} hover:opacity-70 transition-opacity uppercase tracking-wider text-sm`}
            >
              About
            </Link>
            <Link 
              to="/journal" 
              className={`${textColor} hover:opacity-70 transition-opacity uppercase tracking-wider text-sm`}
            >
              Journal
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <button 
              className={`${textColor} hover:opacity-70 transition-opacity`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <button 
              className={`${textColor} hover:opacity-70 transition-opacity relative`}
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-charcoal text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              className={`${textColor} hover:opacity-70 transition-opacity md:hidden`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-charcoal-200">
            <div className="flex flex-col gap-4 mt-4">
              <Link 
                to="/shop" 
                className="text-charcoal hover:opacity-70 transition-opacity uppercase tracking-wider text-sm"
              >
                Shop
              </Link>
              <Link 
                to="/collections" 
                className="text-charcoal hover:opacity-70 transition-opacity uppercase tracking-wider text-sm"
              >
                Collections
              </Link>
              <Link 
                to="/about" 
                className="text-charcoal hover:opacity-70 transition-opacity uppercase tracking-wider text-sm"
              >
                About
              </Link>
              <Link 
                to="/journal" 
                className="text-charcoal hover:opacity-70 transition-opacity uppercase tracking-wider text-sm"
              >
                Journal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
