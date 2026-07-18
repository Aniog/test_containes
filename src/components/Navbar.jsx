import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-velmora-cream/95 backdrop-blur-md border-b border-velmora-sand';

  const textColor = isHome && !scrolled
    ? 'text-white'
    : 'text-velmora-charcoal';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 -ml-2 ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-2xl tracking-ultra font-medium ${textColor} hover:opacity-80 transition-opacity`}>
            VELMORA
          </Link>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-10">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : '#'}
                className={`text-xs font-sans font-medium tracking-widest uppercase ${textColor} hover:text-velmora-gold transition-colors`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className={`p-1 ${textColor} hover:text-velmora-gold transition-colors`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-1 relative ${textColor} hover:text-velmora-gold transition-colors`}
              onClick={() => setIsOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-sand">
          <div className="px-6 py-6 space-y-4">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : '#'}
                className="block text-sm font-sans font-medium tracking-widest uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
