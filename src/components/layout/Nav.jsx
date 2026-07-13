import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setIsOpen } = useCart();
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
            : 'bg-obsidian shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest font-light transition-colors duration-300 ${
                transparent ? 'text-warm-white' : 'text-warm-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                    transparent
                      ? 'text-warm-white/80 hover:text-gold'
                      : 'text-warm-white/70 hover:text-gold'
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
                className={`transition-colors duration-300 ${
                  transparent ? 'text-warm-white/80 hover:text-gold' : 'text-warm-white/70 hover:text-gold'
                }`}
              >
                <Search size={18} />
              </button>

              <button
                aria-label={`Cart (${count} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 ${
                  transparent ? 'text-warm-white/80 hover:text-gold' : 'text-warm-white/70 hover:text-gold'
                }`}
              >
                <ShoppingBag size={18} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {count}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-300 ${
                  transparent ? 'text-warm-white/80 hover:text-gold' : 'text-warm-white/70 hover:text-gold'
                }`}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-obsidian overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-64 border-t border-white/10' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="font-sans text-xs tracking-widest uppercase text-warm-white/70 hover:text-gold transition-colors duration-300 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
