import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchModal from './SearchModal';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-serif text-2xl tracking-wider uppercase">
            Velmora
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm tracking-wider uppercase hover:text-gray-600">
              Shop
            </Link>
            <Link to="/about" className="text-sm tracking-wider uppercase hover:text-gray-600">
              About
            </Link>
            <Link to="/journal" className="text-sm tracking-wider uppercase hover:text-gray-600">
              Journal
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-gray-600"
            >
              <Search size={20} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="hover:text-gray-600 relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:text-gray-600"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <Link to="/shop" className="block text-sm tracking-wider uppercase">
              Shop
            </Link>
            <Link to="/about" className="block text-sm tracking-wider uppercase">
              About
            </Link>
            <Link to="/journal" className="block text-sm tracking-wider uppercase">
              Journal
            </Link>
          </div>
        </div>
      )}
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}

export default Navbar;
