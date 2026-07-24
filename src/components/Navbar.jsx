import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textClass}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-xl font-medium tracking-[0.15em] ${textClass}`}
        >
          VELMORA
        </Link>

        {/* Center nav — desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-70 ${textClass}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`transition-opacity hover:opacity-70 ${textClass}`} aria-label="Search">
            <Search size={20} />
          </button>
          <button
            onClick={toggleCart}
            className={`relative transition-opacity hover:opacity-70 ${textClass}`}
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-surface px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium uppercase tracking-widest text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
