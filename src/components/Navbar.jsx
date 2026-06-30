import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
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

  const navBg = isHome && !scrolled
    ? 'bg-transparent text-white'
    : 'bg-cream/95 backdrop-blur-sm text-charcoal shadow-sm';

  const linkHover = isHome && !scrolled
    ? 'hover:text-gold-light'
    : 'hover:text-gold';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-ultra uppercase font-medium"
            >
              Velmora
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Shop', to: '/collection' },
                { label: 'Collections', to: '/collection' },
                { label: 'About', to: '/#story' },
                { label: 'Journal', to: '/#testimonials' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs tracking-widest uppercase font-medium transition-colors ${linkHover}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                aria-label="Search"
                className={`p-2 transition-colors ${linkHover}`}
              >
                <Search size={20} />
              </button>
              <button
                aria-label="Cart"
                className={`p-2 relative transition-colors ${linkHover}`}
                onClick={openCart}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream shadow-xl animate-slide-in-right">
            <div className="flex items-center justify-between p-5 border-b border-divider">
              <span className="font-serif text-lg tracking-ultra uppercase font-medium">
                Velmora
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col p-5 gap-6">
              {[
                { label: 'Shop', to: '/collection' },
                { label: 'Collections', to: '/collection' },
                { label: 'About', to: '/#story' },
                { label: 'Journal', to: '/#testimonials' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm tracking-widest uppercase font-medium text-charcoal hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
