import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-md border-b border-beige'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-ink"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop nav left */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                    scrolled || !isHome ? 'text-ink hover:text-gold' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-wider font-light transition-colors duration-300 ${
                scrolled || !isHome ? 'text-ink' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop nav right */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.slice(2).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                    scrolled || !isHome ? 'text-ink hover:text-gold' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-ink hover:text-gold' : 'text-white/90 hover:text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`relative w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-ink hover:text-gold' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 border-t border-beige bg-cream">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}