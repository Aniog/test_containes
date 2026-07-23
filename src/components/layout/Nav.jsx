import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? 'bg-transparent'
            : 'bg-parchment/95 backdrop-blur-sm border-b border-linen shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-light tracking-widest transition-colors duration-300 ${
              transparent ? 'text-white' : 'text-ink'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs tracking-widest uppercase font-medium transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-white/90' : 'text-ink-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`transition-colors duration-200 hover:text-gold ${
                transparent ? 'text-white/90' : 'text-ink-muted'
              }`}
            >
              <Search size={18} />
            </button>
            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className={`relative transition-colors duration-200 hover:text-gold ${
                transparent ? 'text-white/90' : 'text-ink-muted'
              }`}
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(v => !v)}
              className={`md:hidden transition-colors duration-200 hover:text-gold ${
                transparent ? 'text-white/90' : 'text-ink-muted'
              }`}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-parchment border-t border-linen px-6 py-6 flex flex-col gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-xs tracking-widest uppercase font-medium text-ink-muted hover:text-gold transition-colors"
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
