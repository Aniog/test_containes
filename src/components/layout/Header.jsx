import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Shop', path: '/collections' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/' },
    { name: 'Journal', path: '/' }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-50/95 backdrop-blur-md shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-espresso-900" />
            ) : (
              <Menu className="w-6 h-6 text-espresso-900" />
            )}
          </button>
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-espresso-900 uppercase">
              VELMORA
            </h1>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-espresso-700 hover:text-espresso-900 transition-colors duration-200 uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 -mr-2"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-espresso-700" />
            </button>
            
            <button 
              className="p-2 relative"
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5 text-espresso-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-cream-50 text-xs font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-cream-50 border-t border-cream-200">
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-lg font-medium text-espresso-700 hover:text-espresso-900 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
