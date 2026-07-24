import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, count } = useCart();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid
            ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu
                size={22}
                className={`transition-colors ${solid ? 'text-velmora-dark' : 'text-white'}`}
              />
            </button>

            {/* Nav links - desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-amber-700 ${
                    solid ? 'text-velmora-dark' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-widest font-medium transition-colors ${
                solid ? 'text-velmora-dark' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button aria-label="Search" className="hidden md:block">
                <Search
                  size={20}
                  className={`transition-colors hover:text-amber-700 ${
                    solid ? 'text-velmora-dark' : 'text-white'
                  }`}
                />
              </button>
              <button
                onClick={toggleCart}
                className="relative"
                aria-label={`Cart with ${count} items`}
              >
                <ShoppingBag
                  size={20}
                  className={`transition-colors hover:text-amber-700 ${
                    solid ? 'text-velmora-dark' : 'text-white'
                  }`}
                />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-accent text-white text-[10px] font-medium w-4 h-4 flex items-center justify-center rounded-full">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-stone-50 flex flex-col md:hidden">
          <div className="flex items-center justify-between px-4 h-16 border-b border-stone-200">
            <span className="font-serif text-2xl tracking-widest">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={24} className="text-velmora-dark" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl text-velmora-dark hover:text-amber-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
