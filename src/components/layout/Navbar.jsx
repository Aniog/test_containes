import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-light tracking-wider">
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
              Shop
            </Link>
            <Link to="/collections" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
              Collections
            </Link>
            <Link to="/about" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
              About
            </Link>
            <Link to="/journal" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
              Journal
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative hover:opacity-70 transition-opacity">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-velmora-border">
          <div className="px-4 py-6 space-y-4">
            <Link to="/shop" className="block text-sm uppercase tracking-wider py-2">
              Shop
            </Link>
            <Link to="/collections" className="block text-sm uppercase tracking-wider py-2">
              Collections
            </Link>
            <Link to="/about" className="block text-sm uppercase tracking-wider py-2">
              About
            </Link>
            <Link to="/journal" className="block text-sm uppercase tracking-wider py-2">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}