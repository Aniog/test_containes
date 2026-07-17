import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

export default function Navbar() {
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
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Journal', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12',
        isScrolled || !isHome ? 'bg-white shadow-sm py-3' : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="text-xl md:text-2xl font-serif tracking-[0.2em] font-light z-10">
          VELMORA
        </Link>

        {/* Center: Nav links */}
        <div className="hidden md:flex gap-12 items-center text-[10px] tracking-[0.3em] uppercase font-bold absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:opacity-70 transition-opacity">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Search + Cart */}
        <div className="flex items-center gap-6 z-10">
          <button className="hover:opacity-70 transition-opacity">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="hover:opacity-70 transition-opacity relative"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white text-black p-8 border-t md:hidden animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6 text-center text-lg tracking-widest uppercase font-light font-serif">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
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
