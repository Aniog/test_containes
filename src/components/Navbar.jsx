import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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
  const navBg =
    isHome && !scrolled
      ? 'bg-transparent text-cream'
      : 'bg-cream/95 backdrop-blur-sm text-velvet shadow-sm';

  const linkHover = isHome && !scrolled ? 'hover:text-gold' : 'hover:text-gold';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.15em] font-medium"
          >
            VELMORA
          </Link>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Shop', to: '/shop' },
              { label: 'Collections', to: '/shop' },
              { label: 'About', to: '/about' },
              { label: 'Journal', to: '/journal' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs uppercase tracking-[0.15em] font-medium ${linkHover} transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button aria-label="Search" className="p-1 hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleCart}
              aria-label="Cart"
              className="p-1 hover:opacity-70 transition-opacity relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-velvet text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream text-velvet border-t border-linen">
          <div className="flex flex-col py-6 px-8 gap-5">
            {[
              { label: 'Shop', to: '/shop' },
              { label: 'Collections', to: '/shop' },
              { label: 'About', to: '/about' },
              { label: 'Journal', to: '/journal' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-[0.15em] font-medium hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
