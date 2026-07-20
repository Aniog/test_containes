import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navBg =
    !isHome || scrolled
      ? 'bg-white/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent';
  const textColor =
    !isHome || scrolled ? 'text-base' : 'text-white';

  const links = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="mx-auto max-w-page flex items-center justify-between px-4 md:px-8 lg:px-12 h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-widest font-semibold ${textColor}`}
        >
          VELMORA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-sm tracking-wide font-sans font-medium hover:text-gold transition-colors ${textColor}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button aria-label="Search" className="hover:text-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative hover:text-gold transition-colors"
            onClick={toggleCart}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-base font-sans font-medium text-base hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
