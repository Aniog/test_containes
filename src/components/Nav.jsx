import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
];

export default function Nav({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome ? 'bg-velvet-deep/95 backdrop-blur-md' : 'bg-transparent';
  const borderClass = scrolled || !isHome ? 'border-b border-velvet-border' : 'border-b border-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} ${borderClass}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-velvet-cream hover:text-velvet-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-xs tracking-widest uppercase text-velvet-taupe hover:text-velvet-cream transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-extrawide text-velvet-cream absolute left-1/2 -translate-x-1/2 hover:text-velvet-gold transition-colors duration-300"
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-velvet-taupe hover:text-velvet-cream transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="text-velvet-taupe hover:text-velvet-cream transition-colors relative"
            onClick={onCartOpen}
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-velvet-gold text-velvet-deep text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velvet-deep border-t border-velvet-border px-4 py-6 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-3 text-sm tracking-widest uppercase text-velvet-cream hover:text-velvet-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}