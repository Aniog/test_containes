import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cartContext';

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
  const bgClass = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textClass = scrolled || !isHome ? 'text-velmora-espresso' : 'text-white';

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
    >
      <nav className="section-padding flex items-center justify-between h-16 md:h-20">
        <button
          className={`md:hidden p-2 -ml-2 transition-colors ${textClass}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-widest font-semibold transition-colors ${textClass}`}
        >
          VELMORA
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`font-sans text-xs tracking-widest uppercase transition-colors hover:text-velmora-golddark ${textClass}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={`flex items-center gap-4 ${textClass}`}>
          <button aria-label="Search" className="p-1 transition-colors hover:text-velmora-golddark">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={toggleCart}
            aria-label="Cart"
            className="p-1 relative transition-colors hover:text-velmora-golddark"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-cream">
          <div className="section-padding flex items-center justify-between h-16 md:h-20">
            <span className="font-serif text-xl tracking-widest font-semibold text-velmora-espresso">
              VELMORA
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 text-velmora-espresso"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-8 mt-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl text-velmora-espresso tracking-widest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
