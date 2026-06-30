import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;

  const navLinkClass =
    'text-xs font-sans font-medium uppercase tracking-widest transition-colors duration-300 hover:text-gold';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent text-white'
          : 'bg-cream/95 backdrop-blur-sm text-base shadow-sm'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center nav desktop */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link to="/shop" className={navLinkClass}>
            Shop
          </Link>
          <Link to="/shop" className={navLinkClass}>
            Collections
          </Link>
          <Link to="/" className={navLinkClass}>
            About
          </Link>
          <Link to="/" className={navLinkClass}>
            Journal
          </Link>
        </nav>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-[0.15em] font-semibold"
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button aria-label="Search" className="p-1 hover:text-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={toggleCart}
            aria-label="Cart"
            className="p-1 hover:text-gold transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-cream text-base border-t border-hairline">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link to="/shop" className={navLinkClass}>
              Shop
            </Link>
            <Link to="/shop" className={navLinkClass}>
              Collections
            </Link>
            <Link to="/" className={navLinkClass}>
              About
            </Link>
            <Link to="/" className={navLinkClass}>
              Journal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
