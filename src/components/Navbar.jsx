import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
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

  const bgClass =
    !isHome || scrolled
      ? 'bg-surface/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent';

  const textClass =
    !isHome || scrolled ? 'text-base' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${bgClass}`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-widest font-light ${textClass}`}
        >
          VELMORA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-xs uppercase tracking-[0.15em] font-medium hover:opacity-60 transition-opacity ${textClass}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className={`hover:opacity-60 transition-opacity ${textClass}`}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            className={`relative hover:opacity-60 transition-opacity ${textClass}`}
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            className={`md:hidden hover:opacity-60 transition-opacity ${textClass}`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-hairline px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm uppercase tracking-[0.15em] font-medium text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
