import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-400 ease-out ${
          transparent
            ? 'bg-transparent py-5'
            : 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.05)] py-3.5'
        }`}
      >
        <div className="container-page flex items-center justify-between">
          {/* Left: Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-widest font-semibold transition-colors duration-300 ${
              transparent ? 'text-white' : 'text-midnight'
            }`}
          >
            VELMORA
          </Link>

          {/* Center: Nav Links (desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wider uppercase transition-colors duration-200 ${
                  transparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-stone hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Icons */}
          <div className="flex items-center gap-5">
            <button
              aria-label="Search"
              className={`transition-colors duration-200 ${
                transparent ? 'text-white/80 hover:text-white' : 'text-stone hover:text-charcoal'
              }`}
            >
              <Search className="w-4.5 h-4.5" strokeWidth={1.5} />
            </button>

            <button
              onClick={() => setCartOpen(true)}
              aria-label="Cart"
              className={`relative transition-colors duration-200 ${
                transparent ? 'text-white/80 hover:text-white' : 'text-stone hover:text-charcoal'
              }`}
            >
              <ShoppingBag className="w-4.5 h-4.5" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-warm-500 text-white text-[10px] font-medium flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              className={`md:hidden transition-colors duration-200 ${
                transparent ? 'text-white/80 hover:text-white' : 'text-stone hover:text-charcoal'
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden bg-cream border-t border-warm-200/60 mt-3.5">
            <div className="container-page py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-widest uppercase text-charcoal font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
