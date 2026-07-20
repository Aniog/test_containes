import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex h-16 md:h-20 items-center justify-between">
          <button
            className="md:hidden p-2 -ml-2 text-ink-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="font-display text-xl md:text-2xl font-semibold tracking-wide text-ink-950">
            VELMORA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  location.pathname === link.to ? 'text-brand-600' : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-ink-700 hover:text-ink-900" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="relative p-2 text-ink-700 hover:text-ink-900"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[10px] font-semibold text-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-brand-200 bg-white/95 backdrop-blur-md">
            <nav className="container-custom flex flex-col py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm uppercase tracking-widest text-ink-700 hover:text-ink-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
