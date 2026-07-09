import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#about' },
    { label: 'Journal', to: '/#journal' },
  ];

  const bgClass = scrolled || !isHome
    ? 'bg-surface-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${bgClass}`}
      >
        <nav className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textClass} transition-colors duration-300`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Left spacer on desktop */}
          <div className="hidden md:block w-32" />

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-ultra-wide uppercase ${textClass} transition-colors duration-500`}
          >
            Velmora
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-sans text-overline uppercase tracking-ultra-wide ${textClass} opacity-80 hover:opacity-100 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-5 ${textClass}`}>
            <button aria-label="Search" className="opacity-80 hover:opacity-100 transition-opacity duration-300">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={toggleCart}
              className="relative opacity-80 hover:opacity-100 transition-opacity duration-300"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Thin gold accent line */}
        <div className={`h-px transition-opacity duration-500 ${scrolled || !isHome ? 'opacity-100' : 'opacity-0'}`} style={{ background: 'linear-gradient(90deg, transparent, #c9a96e 50%, transparent)' }} />
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-surface-cream border-b border-brand-200 shadow-xl">
            <div className="section-padding py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-serif text-heading-3 text-charcoal py-2 border-b border-brand-200/50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
