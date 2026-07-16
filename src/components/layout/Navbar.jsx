import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-obsidian-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors ${
                isTransparent ? 'text-cream' : 'text-obsidian'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs font-medium tracking-widest uppercase transition-colors ${
                    isTransparent
                      ? 'text-cream/80 hover:text-cream'
                      : 'text-obsidian-600 hover:text-obsidian'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                aria-label="Search"
                className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
                  isTransparent
                    ? 'text-cream/80 hover:text-cream hover:bg-white/10'
                    : 'text-obsidian-600 hover:text-obsidian hover:bg-obsidian-50'
                }`}
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                aria-label={`Cart (${totalItems} items)`}
                className={`w-9 h-9 flex items-center justify-center rounded-full relative transition-colors ${
                  isTransparent
                    ? 'text-cream/80 hover:text-cream hover:bg-white/10'
                    : 'text-obsidian-600 hover:text-obsidian hover:bg-obsidian-50'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-obsidian text-[9px] font-bold rounded-full flex items-center justify-center font-sans">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                aria-label="Toggle menu"
                className={`md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
                  isTransparent
                    ? 'text-cream/80 hover:text-cream hover:bg-white/10'
                    : 'text-obsidian-600 hover:text-obsidian hover:bg-obsidian-50'
                }`}
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-obsidian-100 animate-fade-in">
            <nav className="px-6 py-6 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block py-3 font-sans text-sm font-medium tracking-widest uppercase text-obsidian-600 hover:text-obsidian border-b border-obsidian-50 last:border-0 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
