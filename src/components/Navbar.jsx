import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/shop' },
  { name: 'About', path: '/#about' },
  { name: 'Journal', path: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury',
          scrolled
            ? 'bg-surface-primary/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="section-padding flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-text-primary p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-serif text-xl lg:text-2xl font-semibold tracking-[0.2em] text-text-primary">
              VELMORA
            </h1>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'font-sans text-[13px] uppercase tracking-[0.15em] transition-colors duration-300',
                  scrolled ? 'text-text-primary hover:text-brand-gold' : 'text-text-primary/90 hover:text-brand-gold'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="text-text-primary/80 hover:text-brand-gold transition-colors duration-300" aria-label="Search">
              <Search size={19} />
            </button>
            <button
              className="relative text-text-primary/80 hover:text-brand-gold transition-colors duration-300"
              onClick={() => setIsOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag size={19} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-gold text-surface-primary text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Hairline */}
        <div className={cn(
          'h-px transition-opacity duration-500',
          scrolled ? 'bg-white/[0.08] opacity-100' : 'opacity-0'
        )} />
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-surface-primary/98 backdrop-blur-lg transition-all duration-400 lg:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-3xl text-text-primary hover:text-brand-gold transition-colors duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
