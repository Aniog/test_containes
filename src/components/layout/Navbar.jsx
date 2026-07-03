import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleDrawer, count } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navClass = scrolled
    ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm'
    : 'bg-transparent';

  const linkClass = (path) =>
    `text-sm tracking-[0.18em] uppercase transition-colors duration-200 ${
      location.pathname === path ? 'text-accent' : 'text-text hover:text-accent'
    }`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container-editorial flex items-center justify-between py-4">
        <button
          type="button"
          className="md:hidden p-2 -ml-2 text-text"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-xl md:text-2xl tracking-[0.22em] text-text">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={linkClass('/shop')}>Shop</Link>
          <Link to="/shop?category=earrings" className={linkClass('/shop')}>Earrings</Link>
          <Link to="/shop?category=necklaces" className={linkClass('/shop')}>Necklaces</Link>
          <Link to="/shop?category=huggies" className={linkClass('/shop')}>Huggies</Link>
          <Link to="/" className={linkClass('/')}>About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button type="button" className="p-2 text-text hover:text-accent transition-colors" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="relative p-2 text-text hover:text-accent transition-colors" onClick={toggleDrawer} aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-md">
          <nav className="container-editorial flex flex-col gap-4 py-6">
            <Link to="/shop" className="text-sm tracking-[0.18em] uppercase text-text">Shop All</Link>
            <Link to="/shop?category=earrings" className="text-sm tracking-[0.18em] uppercase text-text">Earrings</Link>
            <Link to="/shop?category=necklaces" className="text-sm tracking-[0.18em] uppercase text-text">Necklaces</Link>
            <Link to="/shop?category=huggies" className="text-sm tracking-[0.18em] uppercase text-text">Huggies</Link>
            <Link to="/" className="text-sm tracking-[0.18em] uppercase text-text">About</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
