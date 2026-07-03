import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            type="button"
            className="md:hidden p-2 -ml-2 text-ink"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="font-serif text-xl font-semibold tracking-wide text-ink md:text-2xl">
            VELMORA
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase text-ink-secondary">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button type="button" className="hidden md:inline-flex p-2 text-ink-secondary transition-colors hover:text-ink" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="relative inline-flex p-2 text-ink-secondary transition-colors hover:text-ink"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-surface/95 backdrop-blur-md">
            <nav className="flex flex-col gap-1 py-4 text-sm font-medium tracking-wide uppercase text-ink-secondary">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="px-2 py-2 transition-colors hover:text-ink">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
