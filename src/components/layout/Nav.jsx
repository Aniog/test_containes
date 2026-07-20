import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-parchment/95 backdrop-blur-sm border-b border-divider shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-cormorant text-xl md:text-2xl font-light tracking-ultra-wide uppercase transition-colors duration-300 ${
              transparent ? 'text-ink' : 'text-ink'
            }`}
            style={transparent ? { color: '#FAF7F2' } : {}}
          >
            Velmora
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-manrope text-xs uppercase tracking-widest transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-ink' : 'text-mist'
                }`}
                style={transparent ? { color: 'rgba(250,247,242,0.90)' } : {}}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              aria-label="Search"
              className={`transition-colors duration-200 hover:text-gold ${
                transparent ? 'text-mist' : 'text-mist'
              }`}
              style={transparent ? { color: 'rgba(250,247,242,0.90)' } : {}}
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className={`relative transition-colors duration-200 hover:text-gold ${
                transparent ? 'text-mist' : 'text-mist'
              }`}
              style={transparent ? { color: 'rgba(250,247,242,0.90)' } : {}}
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-cream text-[9px] font-manrope font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={`md:hidden transition-colors duration-200 hover:text-gold ${
                transparent ? 'text-mist' : 'text-mist'
              }`}
              style={transparent ? { color: 'rgba(250,247,242,0.90)' } : {}}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-parchment border-t border-divider px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-manrope text-xs uppercase tracking-widest text-mist hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
