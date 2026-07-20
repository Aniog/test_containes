import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/shop' },
  { name: 'About', path: '/#about' },
  { name: 'Journal', path: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // On non-home pages, always use scrolled appearance
  const showScrolled = scrolled || !isHomePage;

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

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.substring(2);
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = path;
      }
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showScrolled
            ? 'bg-brand-50/95 shadow-sm glass-panel'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${showScrolled ? 'text-charcoal-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${showScrolled ? 'text-charcoal-900' : 'text-white'}`} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`heading-serif text-xl sm:text-2xl font-semibold tracking-ultra-wide absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 ${
                showScrolled ? 'text-charcoal-950' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`text-xs tracking-ultra-wide uppercase hover:text-gold-400 transition-colors duration-300 font-medium ${
                    showScrolled ? 'text-charcoal-700 hover:text-gold-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="p-2 hover:text-gold-400 transition-colors" aria-label="Search">
                <Search className={`w-4 h-4 sm:w-5 sm:h-5 ${showScrolled ? 'text-charcoal-800' : 'text-white'}`} />
              </button>
              <button
                onClick={toggleCart}
                className="p-2 relative hover:text-gold-400 transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag className={`w-4 h-4 sm:w-5 sm:h-5 ${showScrolled ? 'text-charcoal-800' : 'text-white'}`} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-gold-600 text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-950/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-brand-50 shadow-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="pt-20 px-8">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="py-3 text-sm tracking-ultra-wide uppercase text-charcoal-800 hover:text-gold-600 transition-colors border-b border-brand-200/40 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-brand-200/40">
              <p className="heading-serif text-lg text-charcoal-800 italic">
                Crafted to be Treasured
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
