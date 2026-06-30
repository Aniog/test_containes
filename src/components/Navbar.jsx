import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg = scrolled
    ? 'bg-surface/95 backdrop-blur-md shadow-sm'
    : isHome
    ? 'bg-transparent'
    : 'bg-surface/95 backdrop-blur-md shadow-sm';

  const textColor = scrolled || !isHome ? 'text-base' : 'text-text-inverse';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest font-semibold transition-colors duration-300 ${textColor}`}
            >
              VELMORA
            </Link>

            {/* Desktop Links */}
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
                  className={`font-sans text-xs uppercase tracking-widest font-medium transition-colors duration-300 hover:opacity-70 ${textColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-1 transition-colors duration-300 hover:opacity-70 ${textColor}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`relative p-1 transition-colors duration-300 hover:opacity-70 ${textColor}`}
                aria-label="Cart"
                onClick={toggleCart}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-base text-[10px] font-medium flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className={`md:hidden p-1 transition-colors duration-300 ${textColor}`}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-surface border-t border-hairline">
            <div className="container-main py-6 flex flex-col gap-4">
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/about' },
                { label: 'Journal', to: '/journal' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-sm uppercase tracking-widest font-medium text-base py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
