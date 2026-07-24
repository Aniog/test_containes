import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  const bgClass = scrolled
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : isHome
    ? 'bg-transparent'
    : 'bg-velmora-cream/95 backdrop-blur-md';

  const textClass = scrolled || !isHome
    ? 'text-velmora-ink'
    : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 -ml-2 ${textClass}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl lg:text-2xl tracking-widest-xl font-semibold ${textClass} hover:text-velmora-gold transition-colors`}
            >
              VELMORA
            </Link>

            {/* Center links - desktop */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest font-medium ${textClass} hover:text-velmora-gold transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-4 ${textClass}`}>
              <button aria-label="Search" className="p-2 hover:text-velmora-gold transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                aria-label="Cart"
                className="p-2 hover:text-velmora-gold transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-velmora-ink text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-velmora-ink/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-velmora-cream shadow-xl animate-slide-up">
            <div className="p-6">
              <div className="flex items-center justify-between mb-10">
                <span className="font-serif text-xl tracking-widest-xl font-semibold text-velmora-ink">
                  VELMORA
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-velmora-ink"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="text-sm uppercase tracking-widest font-medium text-velmora-ink hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
