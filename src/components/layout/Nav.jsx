import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-velmora-ivory border-b border-velmora-blush shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl font-light tracking-widest-xl transition-colors duration-300 ${
                isTransparent ? 'text-velmora-ivory' : 'text-velmora-obsidian'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-manrope text-xs uppercase tracking-widest transition-colors duration-200 ${
                    isTransparent
                      ? 'text-velmora-ivory/80 hover:text-velmora-ivory'
                      : 'text-velmora-stone hover:text-velmora-champagne'
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
                className={`transition-colors duration-200 ${
                  isTransparent
                    ? 'text-velmora-ivory/80 hover:text-velmora-ivory'
                    : 'text-velmora-stone hover:text-velmora-champagne'
                }`}
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 ${
                  isTransparent
                    ? 'text-velmora-ivory/80 hover:text-velmora-ivory'
                    : 'text-velmora-stone hover:text-velmora-champagne'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-champagne text-velmora-obsidian text-[10px] font-manrope font-medium w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-200 ${
                  isTransparent
                    ? 'text-velmora-ivory/80 hover:text-velmora-ivory'
                    : 'text-velmora-stone hover:text-velmora-champagne'
                }`}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-velmora-ivory border-t border-velmora-blush">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-manrope text-xs uppercase tracking-widest text-velmora-stone hover:text-velmora-champagne transition-colors duration-200"
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
