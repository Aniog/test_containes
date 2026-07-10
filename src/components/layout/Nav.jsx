import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory border-b border-gold/20 shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-cormorant text-xl md:text-2xl font-light tracking-[0.18em] uppercase transition-colors duration-300 ${
              transparent ? 'text-white' : 'text-obsidian'
            }`}
          >
            Velmora
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {[['Shop', '/shop'], ['Collections', '/shop'], ['About', '/'], ['Journal', '/']].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className={`font-inter text-xs uppercase tracking-widest transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-white/90' : 'text-charcoal'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`transition-colors duration-200 hover:text-gold ${transparent ? 'text-white' : 'text-charcoal'}`}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className={`relative transition-colors duration-200 hover:text-gold ${transparent ? 'text-white' : 'text-charcoal'}`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-white text-[9px] font-inter font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              className={`md:hidden transition-colors duration-200 hover:text-gold ${transparent ? 'text-white' : 'text-charcoal'}`}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-ivory border-t border-gold/20 px-6 py-6 flex flex-col gap-5">
            {[['Shop', '/shop'], ['Collections', '/shop'], ['About', '/'], ['Journal', '/']].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className="font-inter text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
