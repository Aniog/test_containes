import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent text-white'
            : 'bg-cream-50/95 backdrop-blur-md text-charcoal-900 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl sm:text-2xl tracking-super-wide uppercase font-medium"
            >
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className="hidden lg:flex items-center gap-10">
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/about' },
                { label: 'Journal', to: '/journal' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-xs font-sans font-medium tracking-widest uppercase transition-opacity duration-300 hover:opacity-60"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                className="p-2 transition-opacity duration-300 hover:opacity-60"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 relative transition-opacity duration-300 hover:opacity-60"
                onClick={openCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-cream-50">
          <div className="flex items-center justify-between h-16 px-4">
            <span className="font-serif text-xl tracking-super-wide uppercase font-medium">
              Velmora
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 pt-12">
            {[
              { label: 'Shop', to: '/shop' },
              { label: 'Collections', to: '/shop' },
              { label: 'About', to: '/about' },
              { label: 'Journal', to: '/journal' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-2xl tracking-widest uppercase"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-cream-50/98 backdrop-blur-sm flex flex-col items-center pt-24 px-4">
          <button
            className="absolute top-5 right-5 p-2"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-xl">
            <input
              autoFocus
              type="text"
              placeholder="Search jewelry..."
              className="w-full bg-transparent border-b border-charcoal-300 pb-3 text-2xl font-serif text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <p className="mt-4 text-sm text-charcoal-500">
              Press Enter to search
            </p>
          </div>
        </div>
      )}
    </>
  );
}
