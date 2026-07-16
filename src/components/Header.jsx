import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop All', path: '/collections/all' },
    { name: 'Necklaces', path: '/collections/necklaces' },
    { name: 'Earrings', path: '/collections/earrings' },
    { name: 'Huggies', path: '/collections/huggies' },
  ];

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHomepage || isMobileMenuOpen
      ? 'bg-background/95 backdrop-blur-sm shadow-sm py-4'
      : 'bg-transparent py-6'
  }`;

  const textClass = `transition-colors duration-300 ${
    isScrolled || !isHomepage || isMobileMenuOpen ? 'text-velmora-charcoal' : 'text-velmora-charcoal max-md:text-velmora-charcoal md:text-white md:drop-shadow-sm'
  }`;

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${textClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <h1 className={`font-serif text-2xl tracking-widest uppercase ${textClass}`}>
              VELMORA
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm tracking-wide hover:text-velmora-gold transition-colors ${textClass}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className={`flex items-center space-x-4 md:space-x-6 ${textClass}`}>
            <button className="hover:text-velmora-gold transition-colors">
              <Search size={20} />
            </button>
            <button 
              className="relative hover:text-velmora-gold transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background shadow-lg md:hidden border-t border-border/50">
            <nav className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-velmora-charcoal text-lg tracking-wide py-2 border-b border-border/30 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
};

export default Header;