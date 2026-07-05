import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items, isOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        transparent
          ? 'bg-transparent py-5'
          : 'bg-velmora-cream/95 backdrop-blur-md py-3 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-1 -ml-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-5 h-5 ${transparent ? 'text-white' : 'text-velmora-deep'}`} />
          ) : (
            <Menu className={`w-5 h-5 ${transparent ? 'text-white' : 'text-velmora-deep'}`} />
          )}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl tracking-[0.25em] font-bold ${
            transparent ? 'text-white' : 'text-velmora-deep'
          } transition-colors duration-300`}
        >
          VELMORA
        </Link>

        {/* Center links — desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/shop/earrings', label: 'Earrings' },
            { to: '/shop/necklaces', label: 'Necklaces' },
            { to: '/about', label: 'Our Story' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-sans text-[13px] tracking-wider uppercase ${
                transparent
                  ? 'text-white/90 hover:text-white'
                  : 'text-velmora-muted hover:text-velmora-deep'
              } transition-colors duration-200`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button
            className={`p-1 ${transparent ? 'text-white/90 hover:text-white' : 'text-velmora-muted hover:text-velmora-deep'} transition-colors`}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`p-1 relative ${transparent ? 'text-white/90 hover:text-white' : 'text-velmora-muted hover:text-velmora-deep'} transition-colors`}
            onClick={() => {
              window.dispatchEvent(new CustomEvent('toggle-cart'));
            }}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-velmora-cream border-t border-velmora-divider mt-3 animate-fade-in">
          <div className="flex flex-col px-6 py-6 gap-4">
            {[
              { to: '/shop', label: 'Shop All' },
              { to: '/shop/earrings', label: 'Earrings' },
              { to: '/shop/necklaces', label: 'Necklaces' },
              { to: '/about', label: 'Our Story' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-sm tracking-wider uppercase text-velmora-deep hover:text-velmora-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
