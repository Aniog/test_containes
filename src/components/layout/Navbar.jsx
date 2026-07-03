import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=new' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-charcoal-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -ml-2 text-charcoal-900 hover:text-gold-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Left nav */}
            <div className="hidden md:flex items-center gap-8 flex-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs font-sans font-medium uppercase tracking-ultra-wide transition-colors duration-200 ${
                    scrolled || !isHome
                      ? 'text-charcoal-700 hover:text-charcoal-900'
                      : 'text-charcoal-800 hover:text-gold-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl font-light tracking-[0.2em] transition-colors duration-300 ${
                scrolled || !isHome
                  ? 'text-charcoal-900'
                  : 'text-charcoal-900'
              }`}
              style={{ letterSpacing: '0.25em' }}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-1 md:gap-3 flex-1 justify-end">
              <button
                className={`p-2 transition-colors duration-200 ${
                  scrolled || !isHome
                    ? 'text-charcoal-700 hover:text-charcoal-900'
                    : 'text-charcoal-800 hover:text-gold-600'
                }`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>

              <button
                onClick={openCart}
                className={`p-2 transition-colors duration-200 relative ${
                  scrolled || !isHome
                    ? 'text-charcoal-700 hover:text-charcoal-900'
                    : 'text-charcoal-800 hover:text-gold-600'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-cream-50 text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop bottom nav */}
        <div className="hidden md:block border-t border-charcoal-100/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-center gap-8 h-10">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xs font-sans font-medium uppercase tracking-ultra-wide text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-charcoal-950/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-72 bg-cream-50 z-50 md:hidden transition-transform duration-300 ease-gentle ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pt-20 flex flex-col gap-6">
          <Link
            to="/"
            className="font-serif text-lg tracking-[0.2em] text-charcoal-900 mb-4"
            style={{ letterSpacing: '0.2em' }}
          >
            VELMORA
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-sans font-medium uppercase tracking-ultra-wide text-charcoal-700 hover:text-charcoal-900 transition-colors py-2 border-b border-charcoal-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
}
