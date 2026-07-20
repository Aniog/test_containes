import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const overHero = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out-cubic ${
          overHero
            ? 'bg-transparent text-white'
            : 'bg-cream/95 backdrop-blur-md text-stone-900 shadow-soft'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              type="button"
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-sans text-xs uppercase tracking-widest hover:text-gold-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              to="/"
              className="font-serif text-xl md:text-2xl uppercase tracking-widest"
            >
              Velmora
            </Link>

            <div className="flex items-center gap-4 md:gap-6">
              <button
                type="button"
                className="p-1 hover:text-gold-500 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                type="button"
                className="relative p-1 hover:text-gold-500 transition-colors"
                onClick={toggleCart}
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center bg-gold-500 text-white text-[10px] font-medium rounded-full">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream">
          <div className="flex items-center justify-between h-16 px-5 border-b border-stone-200">
            <span className="font-serif text-xl uppercase tracking-widest">Velmora</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-serif text-2xl text-stone-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
