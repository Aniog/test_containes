import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-parchment/95 backdrop-blur-sm shadow-sm border-b border-blush'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-widest2 transition-colors duration-300 ${
                transparent ? 'text-ivory' : 'text-velvet'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-200 hover:text-champagne ${
                    transparent ? 'text-ivory/90' : 'text-stone'
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
                className={`hidden md:block transition-colors duration-200 hover:text-champagne ${
                  transparent ? 'text-ivory/90' : 'text-stone'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label="Cart"
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-champagne ${
                  transparent ? 'text-ivory/90' : 'text-stone'
                }`}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-champagne text-velvet text-[10px] font-sans font-600 w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {count}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-200 ${
                  transparent ? 'text-ivory/90' : 'text-stone'
                }`}
              >
                {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-parchment border-t border-blush px-6 py-6 flex flex-col gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-sm tracking-widest uppercase text-velvet hover:text-champagne transition-colors"
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
