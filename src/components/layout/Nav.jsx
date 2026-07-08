import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = scrolled
    ? 'bg-white/90 backdrop-blur-md border-b border-brand-line shadow-sm'
    : 'bg-transparent';

  const linkClass = (path) =>
    `text-sm tracking-widest uppercase transition-colors duration-200 ${
      location.pathname === path ? 'text-brand-ink' : 'text-brand-muted hover:text-brand-ink'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            className="md:hidden p-2 -ml-2 text-brand-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={linkClass('/shop')}>Shop</Link>
            <Link to="/shop?category=earrings" className={linkClass('/shop')}>Earrings</Link>
            <Link to="/shop?category=necklaces" className={linkClass('/shop')}>Necklaces</Link>
            <Link to="/shop?category=huggies" className={linkClass('/shop')}>Huggies</Link>
          </nav>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-widest text-brand-ink">
            VELMORA
          </Link>

          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="relative p-2 text-brand-ink hover:text-brand-accent transition-colors"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-brand-line animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-3">
            <Link to="/shop" className="py-2 text-sm tracking-widest uppercase text-brand-ink">Shop All</Link>
            <Link to="/shop?category=earrings" className="py-2 text-sm tracking-widest uppercase text-brand-muted">Earrings</Link>
            <Link to="/shop?category=necklaces" className="py-2 text-sm tracking-widest uppercase text-brand-muted">Necklaces</Link>
            <Link to="/shop?category=huggies" className="py-2 text-sm tracking-widest uppercase text-brand-muted">Huggies</Link>
            <Link to="/" className="py-2 text-sm tracking-widest uppercase text-brand-muted">About</Link>
            <Link to="/" className="py-2 text-sm tracking-widest uppercase text-brand-muted">Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
