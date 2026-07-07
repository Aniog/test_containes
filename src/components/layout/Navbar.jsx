import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/' },
];

export default function Navbar() {
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

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory shadow-[0_1px_0_rgba(201,169,110,0.2)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.2em] font-light transition-colors duration-300 ${
                transparent ? 'text-ivory' : 'text-charcoal'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-[11px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 hover:text-champagne ${
                    transparent ? 'text-ivory/80' : 'text-stone'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4 md:gap-5">
              <button
                aria-label="Search"
                className={`transition-colors duration-300 hover:text-champagne ${
                  transparent ? 'text-ivory/80' : 'text-stone'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${count} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-champagne ${
                  transparent ? 'text-ivory/80' : 'text-stone'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-champagne text-obsidian text-[9px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {count}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-300 hover:text-champagne ${
                  transparent ? 'text-ivory/80' : 'text-stone'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          } bg-ivory border-t border-champagne/20`}
        >
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-xs uppercase tracking-[0.12em] font-medium text-charcoal hover:text-champagne transition-colors"
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
