import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const navbarBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-velmora-cream/95 backdrop-blur-md shadow-sm';

  const textColor = isHome && !scrolled ? 'text-white' : 'text-velmora-charcoal';
  const iconColor = isHome && !scrolled ? 'text-white' : 'text-velmora-charcoal';
  const borderColor = isHome && !scrolled ? 'border-white/20' : 'border-velmora-sand';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className={`font-serif text-xl md:text-2xl tracking-widest-lg transition-colors duration-500 ${textColor}`}>
              VELMORA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-sans text-xs font-medium tracking-widest-lg uppercase link-underline pb-0.5 transition-colors duration-500 ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              className={`p-2 rounded-full hover:bg-black/5 transition-colors duration-300 ${iconColor}`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`p-2 rounded-full hover:bg-black/5 transition-colors duration-300 relative ${iconColor}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-velmora-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className={`md:hidden p-2 rounded-full hover:bg-black/5 transition-colors ${iconColor}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${borderColor} border-t ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-6 py-4 space-y-4 ${isHome && !scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-velmora-cream'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block font-sans text-sm font-medium tracking-widest-lg uppercase ${isHome && !scrolled ? 'text-white' : 'text-velmora-charcoal'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}