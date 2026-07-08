import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/' },
];

export default function Navbar() {
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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-sm border-b border-linen shadow-[0_1px_12px_rgba(26,23,20,0.06)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl font-light tracking-[0.18em] uppercase transition-colors duration-300 ${
                transparent ? 'text-cream' : 'text-obsidian'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-manrope text-xs tracking-widest uppercase transition-colors duration-200 hover:text-gold ${
                    transparent ? 'text-cream/90' : 'text-ink-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-cream/90' : 'text-ink-muted'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-cream/90' : 'text-ink-muted'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
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
                  transparent ? 'text-cream/90' : 'text-ink-muted'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-linen animate-fadeIn">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-manrope text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors"
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
