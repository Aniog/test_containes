import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-40 transition-all duration-300 ${
    isScrolled || !isHome 
      ? 'bg-velmora-bg/95 backdrop-blur-md border-b border-border shadow-sm text-velmora-text py-4' 
      : 'bg-transparent text-velmora-text py-6'
  }`;

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?category=sets' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-inherit hover:text-velmora-accent transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="text-3xl font-serif tracking-[0.15em] uppercase hover:opacity-80 transition-opacity">
          Velmora
        </Link>

        {/* Desktop Links - Center */}
        <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm tracking-widest uppercase hover:text-velmora-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons - Right */}
        <div className="flex items-center space-x-6">
          <button className="text-inherit hover:text-velmora-accent transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="text-inherit hover:text-velmora-accent transition-colors relative"
            onClick={openCart}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-velmora-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-bg flex flex-col md:hidden">
          <div className="flex justify-between items-center p-6 border-b border-border">
            <Link to="/" className="text-2xl font-serif tracking-[0.15em] uppercase" onClick={() => setMobileMenuOpen(false)}>
              Velmora
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-velmora-text">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-6 flex-1 justify-center items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-xl tracking-widest uppercase hover:text-velmora-accent transition-colors block text-center w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}