import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-charcoal">
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm tracking-wide hover:text-velmora-gold transition-colors">
              Shop
            </Link>
            <Link to="/collections" className="text-sm tracking-wide hover:text-velmora-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm tracking-wide hover:text-velmora-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-sm tracking-wide hover:text-velmora-gold transition-colors">
              Journal
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-velmora-gold transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-velmora-gold transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:text-velmora-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-velmora-nude">
          <div className="px-4 py-6 space-y-4">
            <Link to="/shop" className="block text-sm tracking-wide hover:text-velmora-gold transition-colors">
              Shop
            </Link>
            <Link to="/collections" className="block text-sm tracking-wide hover:text-velmora-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="block text-sm tracking-wide hover:text-velmora-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="block text-sm tracking-wide hover:text-velmora-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
