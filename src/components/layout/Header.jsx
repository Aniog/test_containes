import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const headerBg = scrolled || !isHome
    ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-charcoal-100/50'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal-900' : 'text-cream-50';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-1 ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1
              className={`font-serif text-2xl md:text-3xl font-semibold tracking-ultra-wide ${textColor} transition-colors`}
            >
              VELMORA
            </h1>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-sans text-xs font-medium tracking-ultra-wide uppercase ${textColor} opacity-80 hover:opacity-100 transition-all duration-300 relative group`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-1 ${textColor} transition-colors hidden sm:block`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={toggleCart}
              className={`p-1 ${textColor} transition-colors relative`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-400 text-charcoal-950 text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-charcoal-950/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-cream-50 border-b border-charcoal-100 shadow-xl animate-slide-up">
            <nav className="section-padding py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-serif text-2xl tracking-ultra-wide text-charcoal-900 hover:text-gold-500 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-charcoal-100 my-2" />
              <Link
                to="/shop"
                className="font-sans text-sm tracking-ultra-wide uppercase text-charcoal-500 hover:text-charcoal-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                All Products
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
