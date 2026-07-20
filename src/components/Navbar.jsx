import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, count } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const bgClass =
    !isHome || scrolled
      ? 'bg-background/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent';
  const textClass =
    !isHome || scrolled ? 'text-foreground' : 'text-white';
  const borderClass =
    !isHome || scrolled ? 'border-subtle' : 'border-white/20';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <button
          className={`md:hidden p-2 -ml-2 ${textClass}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-brand uppercase ${textClass}`}
        >
          Velmora
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`text-xs uppercase tracking-brand transition-colors hover:text-accent ${textClass}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={`flex items-center gap-4 ${textClass}`}>
          <button aria-label="Search" className="p-1 hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          <button
            onClick={toggleCart}
            className="relative p-1 hover:text-accent transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-background transition-transform duration-300 md:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-subtle px-4 py-4">
          <span className="font-serif text-xl tracking-brand uppercase text-foreground">
            Velmora
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-2 text-foreground"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col px-6 py-8">
          {navLinks.map((link) => (
            <li key={link.label} className="border-b border-subtle">
              <Link
                to={link.to}
                className="block py-5 font-serif text-2xl text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
