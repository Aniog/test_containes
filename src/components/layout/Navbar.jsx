import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury',
          isTransparent
            ? 'bg-transparent py-4'
            : 'bg-cream-100/95 backdrop-blur-md shadow-soft py-3'
        )}
      >
        <nav className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -ml-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-charcoal" />
            ) : (
              <Menu className="w-5 h-5 text-charcoal" />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-ultra-wide font-light transition-colors duration-300',
              isTransparent ? 'text-charcoal' : 'text-charcoal'
            )}
          >
            VELMORA
          </Link>

          {/* Center links — desktop */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  'font-sans text-nav uppercase tracking-ultra-wide transition-colors duration-300 relative',
                  isTransparent ? 'text-charcoal/80 hover:text-charcoal' : 'text-charcoal/70 hover:text-charcoal',
                  'after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className={cn(
                'p-2 transition-colors duration-300',
                isTransparent ? 'text-charcoal/70 hover:text-charcoal' : 'text-charcoal/70 hover:text-charcoal'
              )}
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button
              onClick={toggleCart}
              className={cn(
                'p-2 relative transition-colors duration-300',
                isTransparent ? 'text-charcoal/70 hover:text-charcoal' : 'text-charcoal/70 hover:text-charcoal'
              )}
              aria-label={`Cart with ${totalItems} items`}
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-white text-[9px] font-sans font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile slide menu */}
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-[280px] bg-cream-100 z-50 shadow-drawer transition-transform duration-300 ease-luxury lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-xl tracking-ultra-wide font-light">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close menu">
              <X className="w-5 h-5 text-charcoal" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-nav uppercase tracking-ultra-wide text-charcoal/80 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hairline-divider-solid mt-8 mb-6" />
          <p className="font-sans text-caption text-taupe tracking-wide">
            Free worldwide shipping · 30-day returns
          </p>
        </div>
      </div>
    </>
  );
}
