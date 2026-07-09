import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/collection' },
  { label: 'Collections', to: '/collection' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory-100/95 backdrop-blur-md shadow-sm'
            : isHome
              ? 'bg-transparent'
              : 'bg-ivory-100/95 backdrop-blur-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-6 md:px-12 lg:px-20">
          {/* Left - Logo */}
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-wider text-warm-900 z-10">
            VELMORA
          </Link>

          {/* Center - Nav Links (desktop) */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-sans text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-warm-700 hover:text-warm-900' : 'text-warm-800/80 hover:text-warm-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right - Icons */}
          <div className="flex items-center gap-4 z-10">
            <button
              aria-label="Search"
              className={`p-2 transition-colors duration-300 ${
                scrolled || !isHome ? 'text-warm-700 hover:text-warm-900' : 'text-warm-800/80 hover:text-warm-900'
              }`}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <button
              aria-label="Open cart"
              onClick={onCartOpen}
              className={`relative p-2 transition-colors duration-300 ${
                scrolled || !isHome ? 'text-warm-700 hover:text-warm-900' : 'text-warm-800/80 hover:text-warm-900'
              }`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] font-sans font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(prev => !prev)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                scrolled || !isHome ? 'text-warm-700 hover:text-warm-900' : 'text-warm-800/80 hover:text-warm-900'
              }`}
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-warm-900/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-ivory-100 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col pt-24 px-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-[13px] tracking-[0.15em] uppercase text-warm-800 hover:text-gold transition-colors duration-300 py-4 border-b border-warm-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
