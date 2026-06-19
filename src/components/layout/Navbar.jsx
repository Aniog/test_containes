import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
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

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const bgClass = scrolled || !isHome
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textClass = scrolled || !isHome ? 'text-brand-charcoal' : 'text-brand-charcoal';
  const borderClass = scrolled || !isHome ? 'border-brand-warmgray/30' : 'border-transparent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass} ${borderClass} border-b`}
      >
        <nav className="section-padding flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 ${textClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Left: Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl lg:text-3xl font-light tracking-[0.2em] ${textClass} transition-colors`}
          >
            VELMORA
          </Link>

          {/* Center: Nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-[13px] font-medium tracking-[0.15em] uppercase ${textClass} hover:text-brand-gold transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <button className={`p-2 ${textClass} hover:text-brand-gold transition-colors`} aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              className={`relative p-2 ${textClass} hover:text-brand-gold transition-colors`}
              aria-label={`Cart (${totalItems} items)`}
              onClick={toggleCart}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-brand-cream shadow-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 pt-20 flex flex-col gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-sm font-medium tracking-[0.15em] uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="hairline-divider mt-4" />
            <Link to="/shop" className="font-sans text-sm font-medium tracking-wider uppercase text-brand-gold" onClick={() => setMobileOpen(false)}>
              Shop All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
