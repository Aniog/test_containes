import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = ({ onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12',
        isScrolled || !isHome ? 'bg-background border-b border-border py-3' : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-serif tracking-widest font-medium">
          VELMORA
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-sm tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:opacity-60 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:opacity-60 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button onClick={onCartClick} className="hover:opacity-60 transition-opacity flex items-center">
            <ShoppingBag className="w-5 h-5" />
            <span className="ml-1 text-xs font-medium">(0)</span>
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-serif">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-60 transition-opacity"
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
