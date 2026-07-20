import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[var(--velmora-surface)]/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`serif-heading text-2xl md:text-3xl tracking-[0.2em] transition-colors duration-300 ${
                scrolled || !isHome
                  ? 'text-[var(--velmora-text)]'
                  : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : `/${item.toLowerCase()}`}
                  className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[var(--velmora-accent)] ${
                    scrolled || !isHome
                      ? 'text-[var(--velmora-text)]'
                      : 'text-white/90'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-[var(--velmora-accent)] ${
                  scrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={`p-2 relative transition-colors duration-300 hover:text-[var(--velmora-accent)] ${
                  scrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--velmora-accent)] text-white text-[10px] rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--velmora-bg)] pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : `/${item.toLowerCase()}`}
                className="serif-heading text-2xl tracking-wide text-[var(--velmora-text)] py-2 border-b border-[var(--velmora-border-light)]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
