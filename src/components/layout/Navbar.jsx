import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || !isHome
            ? 'bg-obsidian-950/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-cream-100 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Left nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-xs tracking-widest-xl uppercase text-obsidian-300 hover:text-gold-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0"
          >
            <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-cream-50">
              VELMORA
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            <button className="text-obsidian-300 hover:text-gold-400 transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="relative text-obsidian-300 hover:text-gold-400 transition-colors"
              onClick={toggleCart}
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-gold-500 text-obsidian-950 text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian-950/98 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-3xl text-cream-100 hover:text-gold-400 transition-colors tracking-wider"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
