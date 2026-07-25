import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Nav() {
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

  const isTransparent = !isScrolled && location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparent 
        ? 'bg-transparent' 
        : 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl font-medium tracking-wider ${
            isTransparent ? 'text-white' : 'text-velmora-charcoal'
          }`}>
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                className={`text-sm uppercase tracking-wider hover:opacity-70 transition-opacity ${
                  isTransparent ? 'text-white' : 'text-velmora-charcoal'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className={`hover:opacity-70 transition-opacity ${
              isTransparent ? 'text-white' : 'text-velmora-charcoal'
            }`}>
              <Search size={20} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative hover:opacity-70 transition-opacity ${
                isTransparent ? 'text-white' : 'text-velmora-charcoal'
              }`}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden hover:opacity-70 transition-opacity ${
                isTransparent ? 'text-white' : 'text-velmora-charcoal'
              }`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-warmGray/20">
          <div className="container-custom py-6 space-y-4">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-velmora-charcoal text-sm uppercase tracking-wider py-2"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
