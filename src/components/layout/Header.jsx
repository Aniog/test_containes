import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const { cartCount, toggleDrawer } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/collections' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomepage
      ? 'bg-background/90 backdrop-blur-md border-b border-gray-200 py-4 text-foreground'
      : 'bg-transparent py-6 text-foreground' // Changed text to foreground since we are using light background mostly, but if we have dark hero we might need white text.
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest text-center flex-1 md:flex-none uppercase">
          Velmora
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm tracking-widest uppercase hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          <button onClick={toggleDrawer} className="hover:text-accent transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-2 bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-gray-200 md:hidden flex flex-col p-6 space-y-6 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-lg tracking-widest uppercase hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;