import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = scrolled
    ? 'bg-brand-surface/90 backdrop-blur-md border-b border-brand-line'
    : 'bg-transparent';

  const textClass = scrolled ? 'text-brand-ink' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <button
            className={`md:hidden p-2 -ml-2 ${textClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className={`font-serif text-xl md:text-2xl tracking-widest ${textClass}`}>
            VELMORA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map(item => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                className={`text-xs uppercase tracking-widest transition-colors hover:text-brand-accent ${textClass}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className={`p-2 transition-colors hover:text-brand-accent ${textClass}`} aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              className={`p-2 relative transition-colors hover:text-brand-accent ${textClass}`}
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-brand-accent text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-brand-surface border-b border-brand-line">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {['Shop', 'Collections', 'About', 'Journal'].map(item => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest text-brand-ink"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
