import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../ui/CartDrawer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart, isOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-espresso" />
              ) : (
                <Menu className="w-5 h-5 text-espresso" />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-ultra-wide font-light text-espresso order-2 md:order-1"
            >
              VELMORA
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 order-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs tracking-ultra-wide uppercase font-sans font-medium transition-colors duration-300 ${
                    scrolled ? 'text-espresso hover:text-gold' : 'text-espresso hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 order-3">
              <button
                className="p-2 transition-colors hover:text-gold"
                aria-label="Search"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                className="p-2 relative transition-colors hover:text-gold"
                onClick={toggleCart}
                aria-label={`Cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-ivory text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-ivory/98 backdrop-blur-md ${
            mobileOpen ? 'max-h-64 border-b border-sand' : 'max-h-0'
          }`}
        >
          <div className="px-5 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm tracking-ultra-wide uppercase font-sans font-medium text-espresso py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}
