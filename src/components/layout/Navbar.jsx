import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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

  const linkClass = (path) =>
    `text-sm tracking-wide transition-colors duration-200 ${
      location.pathname === path ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'
    }`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container-narrow flex items-center justify-between py-4">
        <button
          className="md:hidden p-2 -ml-2 text-brand-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest text-brand-ink">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={linkClass('/shop')}>Shop</Link>
          <Link to="/shop?category=earrings" className={linkClass('/shop')}>Earrings</Link>
          <Link to="/shop?category=necklaces" className={linkClass('/shop')}>Necklaces</Link>
          <Link to="/shop?category=huggies" className={linkClass('/shop')}>Huggies</Link>
          <Link to="/about" className={linkClass('/about')}>About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            className="relative p-2 text-brand-ink hover:text-brand-accent transition-colors"
            onClick={toggleCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-brand-surface border-b border-brand-line">
          <nav className="container-narrow flex flex-col py-6 gap-4">
            <Link to="/shop" className="text-base text-brand-ink">Shop All</Link>
            <Link to="/shop?category=earrings" className="text-base text-brand-muted">Earrings</Link>
            <Link to="/shop?category=necklaces" className="text-base text-brand-muted">Necklaces</Link>
            <Link to="/shop?category=huggies" className="text-base text-brand-muted">Huggies</Link>
            <Link to="/about" className="text-base text-brand-muted">About</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
