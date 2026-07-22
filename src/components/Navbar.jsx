import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { totalItems, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/shop' },
    { label: 'About', href: '/#story' },
    { label: 'Journal', href: '/#journal' },
  ];

  const bgClass = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md text-ink shadow-sm'
    : 'bg-transparent text-cream';

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <nav className="flex h-16 items-center justify-between px-6 md:h-20 md:px-10 lg:px-16">
          <Link
            to="/"
            className="font-serif text-xl font-semibold uppercase tracking-[0.18em] md:text-2xl"
          >
            Velmora
          </Link>

          <ul className="hidden items-center gap-10 font-sans text-sm font-medium uppercase tracking-wider md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="relative py-2 transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="Search"
              className="transition-opacity hover:opacity-70"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={toggleCart}
              className="relative transition-opacity hover:opacity-70"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-ink">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              className="transition-opacity hover:opacity-70 md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-cream transition-transform duration-500 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-serif text-xl font-semibold uppercase tracking-[0.18em]">
            Velmora
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} strokeWidth={1.5} className="text-ink" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-8 pt-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="block font-serif text-3xl font-medium uppercase tracking-wider text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
