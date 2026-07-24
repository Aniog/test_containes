import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
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
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-background/95 backdrop-blur-md border-b border-border py-4' : 'bg-transparent text-white'
      )}
    >
      <div className="flex-1 flex items-center md:hidden">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="hidden md:flex flex-1 items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-sm font-sans tracking-wide hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex-shrink-0">
        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest">
            VELMORA
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-end gap-6">
        <button className="hover:opacity-70 transition-opacity hidden md:block">
          <Search className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="hover:opacity-70 transition-opacity relative"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-background z-[60] flex flex-col p-8 transition-transform duration-500 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between mb-12">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif tracking-widest">
            VELMORA
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-serif tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
