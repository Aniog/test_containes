import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled
    ? 'bg-brand-charcoal/95 backdrop-blur-md shadow-lg'
    : isHome
      ? 'bg-transparent'
      : 'bg-brand-charcoal';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop nav links - left */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-white/80 hover:text-brand-gold text-xs font-sans uppercase tracking-wide transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo - center */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 font-serif text-white text-2xl md:text-3xl tracking-ultra-wide font-medium"
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className="text-white/80 hover:text-brand-gold transition-colors duration-300 p-1" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={openCart}
                className="relative text-white/80 hover:text-brand-gold transition-colors duration-300 p-1"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-charcoal text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-brand-charcoal/98 backdrop-blur-lg md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="text-white font-serif text-2xl tracking-wide hover:text-brand-gold transition-colors duration-300"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
