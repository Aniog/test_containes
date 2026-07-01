import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = ({ onCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between",
        isScrolled || !isHome || isMobileMenuOpen ? "bg-white text-foreground shadow-sm" : "bg-transparent text-white"
      )}
    >
      {/* Left: Brand */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase">
          VELMORA
        </Link>
      </div>

      {/* Center: Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            className="text-sm uppercase tracking-widest-extra hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Icons */}
      <div className="flex-1 flex justify-end items-center space-x-6">
        <button className="hover:opacity-70 transition-opacity">
          <Search size={20} />
        </button>
        <button className="relative hover:opacity-70 transition-opacity" onClick={onCartOpen}>
          <ShoppingBag size={20} />
          <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </button>
        <button 
          className="md:hidden hover:opacity-70 transition-opacity"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-border p-6 flex flex-col space-y-4 md:hidden text-foreground">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm uppercase tracking-widest-extra py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
