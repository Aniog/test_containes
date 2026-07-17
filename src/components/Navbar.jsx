import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

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
        isScrolled || !isHome ? 'bg-white text-velmora-dark shadow-sm py-4' : 'bg-transparent text-white'
      )}
    >
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden flex-1 flex justify-start"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Logo - Left on desktop, Center on Mobile */}
      <Link 
        to="/" 
        className="font-serif text-2xl tracking-[0.2em] md:flex-1 text-left"
      >
        VELMORA
      </Link>

      {/* Center Links - Desktop Only */}
      <div className="hidden md:flex items-center justify-center gap-10 flex-[2]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-xs uppercase tracking-[0.2em] font-medium hover:text-velmora-gold transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center justify-end gap-6 md:flex-1">
        <button className="hidden md:block hover:text-velmora-gold transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative hover:text-velmora-gold transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-8 md:hidden">
          <button 
            className="self-end mb-12"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6 text-velmora-dark" />
          </button>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xl font-serif uppercase tracking-widest text-velmora-dark"
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
};

export default Navbar;
