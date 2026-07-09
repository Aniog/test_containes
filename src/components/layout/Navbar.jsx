import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { setIsOpen: setIsCartOpen, cartCount } = useCart();

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
    { name: 'Collections', path: '/#collections' },
    { name: 'About', path: '/#about' },
    { name: 'Journal', path: '/#journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome
          ? 'bg-white/90 velmora-nav-blur text-velmora-charcoal border-b border-velmora-sand/30 py-4'
          : 'bg-transparent text-white py-6'
      )}
    >
      {/* Left: Logo */}
      <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest">
        VELMORA
      </Link>

      {/* Center: Links (Desktop) */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-6">
        <button className="hover:opacity-60 transition-opacity hidden md:block">
          <Search className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIsCartOpen(true)}
          className="hover:opacity-60 transition-opacity relative"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <button
          className="md:hidden hover:opacity-60 transition-opacity"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-serif tracking-widest text-velmora-charcoal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            className="mt-4 text-sm uppercase tracking-widest text-velmora-charcoal"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
