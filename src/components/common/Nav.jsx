import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Nav = () => {
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome
          ? 'bg-background/95 backdrop-blur-sm border-b border-border py-3'
          : 'bg-transparent text-white'
      )}
    >
      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Left: Nav Links (Desktop) */}
      <div className="hidden lg:flex items-center gap-8 text-xs font-sans uppercase tracking-widest">
        {navLinks.slice(0, 2).map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:opacity-60 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Center: Logo */}
      <Link
        to="/"
        className={cn(
          "font-serif text-2xl lg:text-3xl tracking-widest transition-all",
          isScrolled || !isHome ? "text-[#1A1A1A]" : "text-white"
        )}
      >
        VELMORA
      </Link>

      {/* Right: Nav Links + Icons */}
      <div className="flex items-center gap-4 lg:gap-8">
        <div className="hidden lg:flex items-center gap-8 text-xs font-sans uppercase tracking-widest">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:opacity-60 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-2 lg:gap-4">
          <button className="p-2 hover:opacity-60 transition-opacity">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            className="p-2 hover:opacity-60 transition-opacity relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[60] flex flex-col items-center justify-center gap-8 p-10 lg:hidden">
          <button
            className="absolute top-6 right-6 p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-3xl tracking-widest uppercase"
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

export default Nav;
